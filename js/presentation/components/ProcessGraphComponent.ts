import {Component, EventEmitter} from 'angular2/core';
import {ProcessGraphNodeComponent} from './ProcessGraphNodeComponent';
import {ProcessGraphEdgesComponent} from './ProcessGraphEdgesComponent';

declare var $ : any;

@Component({
    selector: 'process-graph',
    directives: [ProcessGraphNodeComponent, ProcessGraphEdgesComponent],
    providers: [],
    template: `

      <div id="loading" style="position: absolute; display: none;">
        <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
      </div>

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
        <span (click)="openModal($event)" style="cursor: pointer;">
          <i class="fa fa-plus-circle fa-3x" aria-hidden="true"></i>
        </span>
      </div>

      <div class="modal fade" id="adding-node-modal" role="dialog">
        <div class="modal-dialog">

          <!-- Modal content-->
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">&times;</button>
              <h4 class="modal-title">Neuen Knoten hinzufügen</h4>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label for="sel1">Kathegorie</label>
                <select [(ngModel)]="selectedNodeClassIndex" class="form-control" id="sel1">
                  <option *ngFor="#nodeClass of availableNodeClassList; #index = index"
                    [attr.value]="index">
                    {{nodeClass.name}}
                  </option>
                </select>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Schließen</button>
              <button type="button" class="btn btn-success" (click)="addNode()" data-dismiss="modal">Hinzufügen</button>
            </div>
          </div>
        </div>
      </div>
    `
})

export class ProcessGraphComponent
{
  private processGraph;
  private nodePositions;
  private updateEvent;

  private availableNodeClassList;
  private selectedNodeClassIndex;

  constructor()
  {
    this.updateEvent = new EventEmitter();
    this.availableNodeClassList = this.setupAvailableNodeClassList();
    this.selectedNodeClassIndex = 0;
    this.processGraph = new ProcessGraph();

    let image = new Image();
    image.src = "res/img/dices.gif";

    let that = this;
    image.onload = function()
    {
      that.processGraph.addNode(new ImageLoadingNode(image));
      that.processGraph.execute();
    }

    this.nodePositions = [];
  }

  private setupAvailableNodeClassList()
  {
    let classes = [];

    classes.push(BoxFilterNode);
    classes.push(DilationNode);
    classes.push(ErosionNode);
    classes.push(LaplacianOfGaussianNode);
    classes.push(SobelYFilterNode);

    classes.push(AdditionNode);
    classes.push(SubtractionNode);

    classes.push(CloneNode);

    return classes;
  }

  addImageLoadingNode(image)
  {
    this.processGraph.addNode(new ImageLoadingNode(image))
  }

  play()
  {
    this.processGraph.execute();
  }

  addNode()
  {
    let nodeClass = this.availableNodeClassList[this.selectedNodeClassIndex];
    this.processGraph.addNode(new nodeClass());

    let self = this;
    $('#loading').fadeIn("slow", function()
    {
      self.processGraph.execute();
      $('#loading').fadeOut(3000);
    });
  }

  openModal()
  {
    $('#adding-node-modal').modal();
  }
}
