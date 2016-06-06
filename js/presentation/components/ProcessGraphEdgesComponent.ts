import {Component} from 'angular2/core';
import {Input} from 'angular2/core';

declare var $ : any;

@Component({
    selector: 'process-graph-edges',
    directives: [],
    providers: [],
    template: `

    <style>

      .connected-port
      {
        stroke: none;
        fill: black;
      }

      .unconnected-port
      {
        stroke: black;
        stroke-width: 1;
        fill: white;
      }

    </style>

    <svg style="position: absolute; left:0px; right:0px;" width="1600" height="800">

      <g *ngFor="#edge of edges; #index = index" >
        <line
          [attr.x1]="edge.source.x + 200"
          [attr.y1]="edge.source.y + 100"
          [attr.x2]="edge.destination.x + 0"
          [attr.y2]="edge.destination.y + 100"
          style="stroke:rgb(55,55,55);stroke-width:2"/>
      </g>

      <g *ngFor="#node of processGraph.getNodes(); #i = index" >
        <g *ngFor="#input of node.input; #j = index" >
          <rect
            (click)="onClickOfInputPort(i, j)"
            [attr.x]="nodePositions[i].x - 10"
            [attr.y]="nodePositions[i].y + 90"
            width="20"
            height="20"
            [ngClass]="(input === null) ? 'unconnected-port' : 'connected-port'" />
        </g>

        <g *ngFor="#output of node.output; #j = index" >
          <rect
            (click)="onClickOfOutputPort(i, j)"
            [attr.x]="nodePositions[i].x + 190"
            [attr.y]="nodePositions[i].y + 90"
            width="20"
            height="20"
            [ngClass]="(output === null) ? 'unconnected-port' : 'connected-port'" />
        </g>
      </g>
    </svg>

    `
})

export class ProcessGraphEdgesComponent
{
  @Input("process-graph") processGraph;
  @Input("node-positions") nodePositions;
  @Input('update-event') updateEvent;

  private edges : Array<Object>;
  private lastOutputPortClicked : any;

  constructor()
  {
    this.lastOutputPortClicked = null;
  }

  ngAfterViewInit()
  {
    this.edges = this.calculateEdges();
    let that = this;

    this.updateEvent.subscribe(function()
    {
      that.edges = that.calculateEdges();
    });
  }

  private calculateEdges()
  {
    let edges = [];
    let nodes = this.processGraph.getNodes();

    for(let i=0; i<nodes.length; i++)
    {
      let node = nodes[i];
      for(let j=0; j<node.getOutputSize(); j++)
      {
        let output = node.getOutput(j);
        for(let k=0; k<nodes.length; k++)
        {
          if(output !== null)
          {
            if(nodes[k] === output.getDestination())
            {
              edges.push({source: this.nodePositions[i], destination: this.nodePositions[k]});
            }
          }
        }
      }
    }

    return edges;
  }

  onClickOfInputPort(nodeIndex, portIndex)
  {
    if(this.lastOutputPortClicked)
    {
      let outputNodeIndex = this.lastOutputPortClicked.nodeIndex;
      let outputPortIndex = this.lastOutputPortClicked.portIndex;
      let inputNodeIndex = nodeIndex;
      let inputPortIndex = portIndex;

      this.processGraph.connectNodes(outputNodeIndex, inputNodeIndex, outputPortIndex, inputPortIndex);
      this.lastOutputPortClicked = null;
      this.updateEvent.emit({});
    }
  }

  onClickOfOutputPort(nodeIndex, portIndex)
  {
    this.lastOutputPortClicked = {nodeIndex : nodeIndex, portIndex : portIndex};
  }
}
