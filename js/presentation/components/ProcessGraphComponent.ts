import {NodeIdToPositionMap} from '../view model/NodeIdToPositionMap';

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
        [node-positions-map]="nodePositionsMap"
        [update-event]="updateEvent"
      ></process-graph-edges>

      <process-graph-node
        *ngFor="#node of processGraph.nodeList; #index = index"
        [process-graph-node]="node"
        [node-positions-map]="nodePositionsMap"
        [update-event]="updateEvent"
      ></process-graph-node>

      <div class="navbar-fixed">
        <nav>
          <div class="nav-wrapper grey lighten-4">
            <a href="#!" class="brand-logo"></a>
            <ul class="right hide-on-med-and-down">
              <li><a class="grey-text text-darken-4" (click)="executeProcessGraph()">Start</a></li>
              <li><a class="grey-text text-darken-4" (click)="openModal()">Knoten hinzufügen</a></li>
              <li><a class="grey-text text-darken-4" (click)="toggleJasminePanel()">Jasmine</a></li>
            </ul>
          </div>
        </nav>
      </div>

      <div class="modal" id="adding-node-modal">
        <div class="modal-dialog">

          <!-- Modal content-->
          <div class="modal-content">
            <h4 class="modal-title">Neuen Knoten hinzufügen</h4>
            <br><br>
            <div class="input-field">
              <select id="node-class-selection">
                <option *ngFor="#nodeClass of availableNodeClassList; #index = index"
                  [attr.value]="index">
                  {{nodeClass.name}}
                </option>
              </select>
              <label>Kathegorie</label>
            </div>

            <div class="modal-footer">
              <a href="#" (click)="closeModal()" class="modal-action modal-close waves-effect waves-green btn-flat">Schließen</a>
              <button type="button" class="btn btn-success" (click)="addNode()">Hinzufügen</button>
            </div>
          </div>
        </div>
      </div>
    `
})

export class ProcessGraphComponent
{
  private processGraph;
  private nodePositionsMap;
  private updateEvent;

  private jasmineOpened;

  private availableNodeClassList;

  constructor()
  {
    this.updateEvent = new EventEmitter();
    this.availableNodeClassList = this.setupAvailableNodeClassList();
    this.processGraph = new ProcessGraph();

    this.jasmineOpened = false;

    let image = new Image();
    image.src = "res/img/dices.gif";

    let that = this;
    image.onload = function()
    {
      that.processGraph.addNode(new ProcessGraphNodeViewDecorator(new ImageLoadingNode(image)));
    }

    this.nodePositionsMap = new NodeIdToPositionMap(this.processGraph);
  }

  ngAfterViewInit()
  {
    $('select').material_select();
  }

  private setupAvailableNodeClassList()
  {
    let classes = [];

    classes.push(BoxFilterNode);
    classes.push(LaplacianOfGaussianNode);
    classes.push(SobelYFilterNode);

    classes.push(DilationNode);
    classes.push(ErosionNode);

    classes.push(AdditionNode);
    classes.push(SubtractionNode);

    classes.push(CloneNode);

    return classes;
  }

  addNode()
  {
    let classIndex = parseInt($('#node-class-selection').val());
    let nodeClass = this.availableNodeClassList[classIndex];
    this.processGraph.addNode(new ProcessGraphNodeViewDecorator(new nodeClass()));

    this.nodePositionsMap.update();

    $('#adding-node-modal').closeModal();
  }

  executeProcessGraph()
  {
    this.processGraph.execute();
    console.log(this.processGraph);
  }

  openModal()
  {
    $('#adding-node-modal').openModal();
  }

  closeModal()
  {
    $('#adding-node-modal').closeModal();
  }

  toggleJasminePanel()
  {
    if(this.jasmineOpened)
    {
      $('.jasmine_html-reporter').hide();
      this.jasmineOpened = false;
    }
    else
    {
      $('.jasmine_html-reporter').show();
      this.jasmineOpened = true;
    }
  }
}
