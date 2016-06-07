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
          [attr.x1]="edge.sourceNodePosition.x + 200"
          [attr.y1]="edge.sourceNodePosition.y + 100 + 40 * edge.sourcePortIndex"
          [attr.x2]="edge.sourceNodePosition.x + 100 + ((edge.destinationNodePosition.x - edge.sourceNodePosition.x)/2)"
          [attr.y2]="edge.sourceNodePosition.y + 100 + 40 * edge.sourcePortIndex"
          style="stroke:rgb(55,55,55);stroke-width:2"/>

        <line
          [attr.x1]="edge.sourceNodePosition.x + 100 + ((edge.destinationNodePosition.x - edge.sourceNodePosition.x)/2)"
          [attr.y1]="edge.sourceNodePosition.y + 100 + 40 * edge.sourcePortIndex"
          [attr.x2]="edge.sourceNodePosition.x + 100 + ((edge.destinationNodePosition.x - edge.sourceNodePosition.x)/2)"
          [attr.y2]="edge.destinationNodePosition.y + 100 + 40 * edge.destinationPortIndex"
          style="stroke:rgb(55,55,55);stroke-width:2"/>

        <line
          [attr.x1]="edge.sourceNodePosition.x + 100 + ((edge.destinationNodePosition.x - edge.sourceNodePosition.x)/2)"
          [attr.y1]="edge.destinationNodePosition.y + 100 + 40 * edge.destinationPortIndex"
          [attr.x2]="edge.destinationNodePosition.x + 0"
          [attr.y2]="edge.destinationNodePosition.y + 100 + 40 * edge.destinationPortIndex"
          style="stroke:rgb(55,55,55);stroke-width:2"/>
      </g>

      <g *ngFor="#node of processGraph.getNodes(); #i = index" >
        <g *ngFor="#input of node.input; #j = index" >
          <rect
            (click)="onClickOfInputPort(i, j)"
            [attr.x]="nodePositions[i].x - 10"
            [attr.y]="nodePositions[i].y + 90 + j*40"
            width="20"
            height="20"
            [ngClass]="(input === null) ? 'unconnected-port' : 'connected-port'" />
        </g>

        <g *ngFor="#output of node.output; #j = index" >
          <rect
            (click)="onClickOfOutputPort(i, j)"
            [attr.x]="nodePositions[i].x + 190"
            [attr.y]="nodePositions[i].y + 90 + j*40"
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
    this.edges = [];
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
              let destinationNode = nodes[k];
              for(let l = 0; l<destinationNode.getInputSize(); l++)
              {
                if(destinationNode.getInput(l) === output)
                {
                  edges.push(
                  {
                    sourceNodePosition: this.nodePositions[i],
                    sourcePortIndex: j,
                    destinationNodePosition: this.nodePositions[k],
                    destinationPortIndex: l
                  });
                }
              }
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

      this.processGraph.getNode(outputNodeIndex).reset();
      this.processGraph.getNode(inputNodeIndex).reset();

      let self = this;
      $('#loading').fadeIn("slow", function()
      {
        self.processGraph.execute();
        $(this).fadeOut(3000);
      });
    }
  }

  onClickOfOutputPort(nodeIndex, portIndex)
  {
    this.lastOutputPortClicked = {nodeIndex : nodeIndex, portIndex : portIndex};
  }
}
