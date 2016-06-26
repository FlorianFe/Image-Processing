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
<!--
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
-->
      <g *ngFor="#node of processGraph.nodeList; #i = index" >
        <g *ngFor="#number of getNumbers(node.numberInputPorts); #j = index">
          <rect
            (click)="onClickOfInputPort(0, 0)"
            [attr.x]="nodePositionsMap.getPosition(node.id).x - 10"
            [attr.y]="nodePositionsMap.getPosition(node.id).y + 90 + j*40"
            width="20"
            height="20"
            class="unconnected-port"
            />
        </g>

        <line x1="0" x2="100" y1="0" y2="100"></line>

        <g *ngFor="#number of getNumbers(node.numberOutputPorts); #j = index">
          <rect
            (click)="onClickOfOutputPort(0, 0)"
            [attr.x]="nodePositionsMap.getPosition(node.id).x + 190"
            [attr.y]="nodePositionsMap.getPosition(node.id).y + 90 + j*40"
            width="20"
            height="20"
            class="unconnected-port"
            />
        </g>
      </g>
<!--
      <g *ngFor="#edge of processGraph.edgeCollection.edges; #i = index" >
        <g>
          <rect
            (click)="onClickOfInputPort(0, 0)"
            [attr.x]="nodePositionsMap.getPosition(edge.destinationPin.node.id).x - 10"
            [attr.y]="nodePositionsMap.getPosition(edge.destinationPin.node.id).y + 90 + j*40"
            width="20"
            height="20"/>
        </g>

        <line x1="0" x2="100" y1="0" y2="100"></line>

        <g>
          <rect
            (click)="onClickOfOutputPort(0, 0)"
            [attr.x]="nodePositionsMap.getPosition(edge.sourcePin.node.id).x + 190"
            [attr.y]="nodePositionsMap.getPosition(edge.sourcePin.node.id).y + 90 + j*40"
            width="20"
            height="20" />
        </g>
      </g>
-->
    </svg>

    `
})

export class ProcessGraphEdgesComponent
{
  @Input("process-graph") processGraph;
  @Input("node-positions-map") nodePositionsMap;
  @Input('update-event') updateEvent;

  private lastOutputPortClicked : any;

  constructor()
  {
    this.lastOutputPortClicked = null;
  }

  getNumbers(num : number)
  {
    let array = new Array(num);
    for(let i=0; i<num; i++)
    {
      array[i] = i;
    }
    return array;
  }

  ngAfterViewInit()
  {

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

      let destinationNode = this.processGraph.getNode(inputNodeIndex);

      let self = this;
      $('#loading').fadeIn("slow", function()
      {
        destinationNode.execute();
        $(this).fadeOut(3000);
      });
    }
  }

  onClickOfOutputPort(nodeIndex, portIndex)
  {
    this.lastOutputPortClicked = {nodeIndex : nodeIndex, portIndex : portIndex};
  }
}
