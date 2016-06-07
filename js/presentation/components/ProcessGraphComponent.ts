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

        <div style="position: absolute; right: 20px;">
          <span (click)="play($event)" style="cursor: pointer;">
            <i class="fa fa-play-circle fa-3x" aria-hidden="true"></i>
          </span>

          <span (click)="addNode($event)" style="cursor: pointer;">
            <i class="fa fa-plus-circle fa-3x" aria-hidden="true"></i>
          </span>
        </div>
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
    this.processGraph.addNode(new AdditionNode());
  }

  addImageLoadingNode(image)
  {
    this.processGraph.addNode(new ImageLoadingNode(image))
  }
}
