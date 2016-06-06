import {Component} from 'angular2/core';

@Component({
    selector: 'process-graph',
    directives: [],
    providers: [],
    template: `
        <li *ngFor="#node of processGraph.nodeList">{{node.name}}</li>
    `
})

export class ProcessGraphComponent
{
  private processGraph;

  constructor()
  {
    this.processGraph = new ProcessGraph();
    this.processGraph.addNode(new BoxFilterNode());
    this.processGraph.addNode(new BoxFilterNode());
  }
}
