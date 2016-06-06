import {Component, EventEmitter} from 'angular2/core';
import {ProcessGraphNodeComponent} from './ProcessGraphNodeComponent';
import {ProcessGraphEdgesComponent} from './ProcessGraphEdgesComponent';

declare var $ : any;

@Component({
    selector: 'process-graph',
    directives: [ProcessGraphNodeComponent, ProcessGraphEdgesComponent],
    providers: [],
    template: `

      <process-graph-edges
        [process-graph]="processGraph"
        [node-positions]="nodePositions"
        [update-event]="updateEvent"
        ></process-graph-edges>

      <process-graph-node
        *ngFor="#node of processGraph.nodeList; #index = index"
        [process-graph-node]="node"
        [node-positions]="nodePositions"
        [node-index]="index"
        [update-event]="updateEvent"
        ></process-graph-node>

        <button style="position: absolute; right: 20px;" (click)="play($event)">play</button>
        <button style="position: absolute; right: 50px;" (click)="addNode($event)">Knoten</button>
    `
})

export class ProcessGraphComponent
{
  private processGraph;
  private nodePositions;
  private updateEvent;

  constructor()
  {
    this.updateEvent = new EventEmitter();
    this.processGraph = new ProcessGraph();

    let image = new Image();
    image.src = "res/img/dices.gif";

    let that = this;
    image.onload = function()
    {
      that.processGraph.addNode(new ImageLoadingNode(image));
      that.processGraph.addNode(new BoxFilterNode());
      that.processGraph.addNode(new SobelYFilterNode());

      //that.processGraph.connectNodes(0, 1, 0, 0);
      //that.processGraph.connectNodes(1, 2, 0, 0);

      //that.processGraph.execute();
    }

    this.nodePositions = [];
  }

  play()
  {
    this.processGraph.execute();
  }

  addNode()
  {
    this.processGraph.addNode(new BoxFilterNode());
  }

  addImageLoadingNode(image)
  {
    this.processGraph.addNode(new ImageLoadingNode(image))
  }

  onUpdate()
  {

  }
}
