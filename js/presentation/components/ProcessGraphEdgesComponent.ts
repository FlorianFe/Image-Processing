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
      <g *ngFor="#edge of processGraph.edgeCollection.edges; #index = index" >
        <line
          [attr.x1]="edge.sourcePin.node.displayPosition.x + 200"
          [attr.y1]="edge.sourcePin.node.displayPosition.y + 100 + 40 * edge.sourcePin.port"
          [attr.x2]="edge.sourcePin.node.displayPosition.x + 100
            + ((edge.destinationPin.node.displayPosition.x
            - edge.sourcePin.node.displayPosition.x)/2)"
          [attr.y2]="edge.sourcePin.node.displayPosition.y + 100 + 40 * edge.sourcePin.port"
          style="stroke:rgb(55,55,55);stroke-width:2"/>

        <line
          [attr.x1]="edge.sourcePin.node.displayPosition.x + 100
            + ((edge.destinationPin.node.displayPosition.x
            - edge.sourcePin.node.displayPosition.x)/2)"

          [attr.y1]="edge.sourcePin.node.displayPosition.y + 100 + 40 * edge.sourcePin.port"
          [attr.x2]="edge.sourcePin.node.displayPosition.x + 100
            + ((edge.destinationPin.node.displayPosition.x
            - edge.sourcePin.node.displayPosition.x)/2)"

          [attr.y2]="edge.destinationPin.node.displayPosition.y + 100
            + 40 * edge.destinationPin.port"

          style="stroke:rgb(55,55,55);stroke-width:2"/>

        <line
          [attr.x1]="edge.sourcePin.node.displayPosition.x + 100
            + ((edge.destinationPin.node.displayPosition.x
            - edge.sourcePin.node.displayPosition.x)/2)"

          [attr.y1]="edge.destinationPin.node.displayPosition.y + 100 + 40 * edge.destinationPin.port"
          [attr.x2]="edge.destinationPin.node.displayPosition.x + 0"
          [attr.y2]="edge.destinationPin.node.displayPosition.y + 100 + 40 * edge.destinationPin.port"
          style="stroke:rgb(55,55,55);stroke-width:2"/>
      </g>

      <g *ngFor="#node of processGraph.nodeList; #i = index" >
        <g *ngFor="#number of getNumbers(node.numberOutputPorts); #j = index">
          <rect
            (click)="onClickOfOutputPort(i, j)"
            [attr.x]="node.displayPosition.x + 190"
            [attr.y]="node.displayPosition.y + 90 + j*40"
            width="20" height="20"
            class="unconnected-port"
          />
        </g>

        <g *ngFor="#number of getNumbers(node.numberInputPorts); #j = index">
          <rect
            (click)="onClickOfInputPort(i, j)"
            [attr.x]="node.displayPosition.x - 10"
            [attr.y]="node.displayPosition.y + 90 + j*40"
            width="20" height="20"
            class="unconnected-port"
          />
        </g>
      </g>

      <g *ngFor="#edge of processGraph.edgeCollection.edges; #i = index" >
        <g>
          <rect
            [attr.x]="edge.sourcePin.node.displayPosition.x + 190"
            [attr.y]="edge.sourcePin.node.displayPosition.y + 90 + edge.sourcePin.port*40"
            width="20" height="20"
            class="connected-port"
          />
        </g>

        <g>
          <rect
            [attr.x]="edge.destinationPin.node.displayPosition.x - 10"
            [attr.y]="edge.destinationPin.node.displayPosition.y + 90 + edge.destinationPin.port*40"
            width="20" height="20"
            class="connected-port"
          />
        </g>
      </g>
    </svg>

    `
})

export class ProcessGraphEdgesComponent
{
  @Input("process-graph") processGraph;

  private lastOutputPinClicked : any;

  constructor()
  {
    this.lastOutputPinClicked = null;
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
    if(this.lastOutputPinClicked !== null)
    {
      let outputNodePin = this.lastOutputPinClicked;

      let inputNode = this.processGraph.getNode(nodeIndex);
      let inputNodePin = new ProcessGraphNodePin(inputNode, portIndex);

      this.processGraph.connectNodePins(outputNodePin, inputNodePin);
      this.lastOutputPinClicked = null;
    }
  }

  onClickOfOutputPort(nodeIndex, portIndex)
  {
    let node = this.processGraph.getNode(nodeIndex);
    this.lastOutputPinClicked = new ProcessGraphNodePin(node, portIndex);
  }
}
