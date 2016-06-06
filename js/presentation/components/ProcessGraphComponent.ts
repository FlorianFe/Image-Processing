import {Component} from 'angular2/core';
import {ProcessGraphNodeComponent} from './ProcessGraphNodeComponent'

declare var $ : any;

@Component({
    selector: 'process-graph',
    directives: [ProcessGraphNodeComponent],
    providers: [],
    template: `
        <process-graph-node
          *ngFor="#node of processGraph.nodeList"
          [process-graph-node]="node" ></process-graph-node>
    `
})

export class ProcessGraphComponent
{
  private processGraph;

  constructor()
  {
    this.processGraph = new ProcessGraph();

    let image = new Image();
    image.src = "res/img/dices.gif";

    let that = this;
    image.onload = function()
    {
      that.processGraph.addNode(new ImageLoadingNode(image));
      that.processGraph.addNode(new BoxFilterNode());
      that.processGraph.addNode(new SobelYFilterNode());

      that.processGraph.connectNodes(0, 1, 0, 0);
      that.processGraph.connectNodes(1, 2, 0, 0);

      that.processGraph.execute();
    }
  }

  addImageLoadingNode(image)
  {
    this.processGraph.addNode(new ImageLoadingNode(image))
  }
}
