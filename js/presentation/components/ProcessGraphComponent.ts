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
      ></process-graph-edges>

      <process-graph-node
        *ngFor="#node of processGraph.nodeList; #index = index"
        [process-graph-node]="node"
        [update-event]="updateEvent"
      ></process-graph-node>

      <div class="navbar-fixed">
        <nav>
          <div class="nav-wrapper grey lighten-4">
            <a href="#!" class="brand-logo"></a>
            <ul class="right hide-on-med-and-down">
              <li>
                <div class="switch">
                  <label>
                    Bearbeiten
                    <input type="checkbox" (click)="toggleMode()">
                    <span class="lever"></span>
                    Anzeigen
                  </label>
                </div>
              </li>

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
              <select id="node-kathegory-selection">
                <option *ngFor="#nodeKathegory of availableNodeKathegoryList; #index = index"
                  [attr.value]="index">
                  {{nodeKathegory.name}}
                </option>
              </select>
              <label>Kathegorie</label>
            </div>

            <br>

            <div class="input-field" *ngFor="#nodeKathegory of availableNodeKathegoryList; #index = index">
              <div [hidden]="!isKathegorySelected(index)">
                <select id="node-class-selection-{{index}}">
                  <option *ngFor="#nodeClass of availableNodeKathegoryList[index].nodeClasses; #index2 = index"
                    [attr.value]="index2">
                    {{nodeClass.name}}
                  </option>
                </select>
                <label>Knoten</label>
              </div>
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
  private updateEvent;

  private jasmineOpened;
  private displayModeSelected;

  private availableNodeKathegoryList;

  constructor()
  {
    this.updateEvent = new EventEmitter();
    this.availableNodeKathegoryList = this.setupAvailableNodeKathegoryList();
    this.processGraph = new ProcessGraph();

    this.jasmineOpened = false;

    let image = new Image();
    image.src = "res/img/cat.jpg";

    let that = this;
    image.onload = function()
    {
      that.processGraph.addNode(new ProcessGraphNodeViewDecorator(new ImageLoadingNode(image)));
    }
  }

  ngAfterViewInit()
  {
    $('select').material_select();
  }

  private setupAvailableNodeKathegoryList()
  {
    let kathegories = [];

    let blurringKathegory = new ProcessGraphNodeKathegory("Weichzeichnungsfilter");
    blurringKathegory.addNodeClass(BoxFilterNode);
    kathegories.push(blurringKathegory);

    let derivativeKathegory = new ProcessGraphNodeKathegory("Ableitungsfilter");
    derivativeKathegory.addNodeClass(SobelYFilterNode);
    derivativeKathegory.addNodeClass(LaplacianOfGaussianNode);
    kathegories.push(derivativeKathegory);

    let morphologicKathegory = new ProcessGraphNodeKathegory("Morphologische Filter");
    morphologicKathegory.addNodeClass(DilationNode);
    morphologicKathegory.addNodeClass(ErosionNode);
    kathegories.push(morphologicKathegory);

    let transformationsKathegory = new ProcessGraphNodeKathegory("Transformationen");
    transformationsKathegory.addNodeClass(CosinusTransformationNode);
    transformationsKathegory.addNodeClass(CosinusBackTransformationNode);
    kathegories.push(transformationsKathegory);

    let othersKathegory = new ProcessGraphNodeKathegory("Sonstiges");
    othersKathegory.addNodeClass(CloneNode);
    othersKathegory.addNodeClass(AdditionNode);
    othersKathegory.addNodeClass(SubtractionNode);
    kathegories.push(othersKathegory);

    return kathegories;
  }

  private getSelectedNodeKathegory()
  {
    let kathegoryIndex = parseInt($('#node-kathegory-selection').val());
    kathegoryIndex = (kathegoryIndex) ? kathegoryIndex : 0;
    console.log(kathegoryIndex, this.availableNodeKathegoryList);
    return this.availableNodeKathegoryList[kathegoryIndex];
  }

  isKathegorySelected(index)
  {
    return (index === parseInt($('#node-kathegory-selection').val()));
  }

  addNode()
  {
    let kathegoryIndex = parseInt($('#node-kathegory-selection').val());
    kathegoryIndex = (kathegoryIndex) ? kathegoryIndex : 0;
    let classIndex = parseInt($('#node-class-selection-' + kathegoryIndex).val());
    classIndex = (classIndex) ? classIndex : 0;

    let nodeClass = this.availableNodeKathegoryList[kathegoryIndex].getNodeClass(classIndex);
    this.processGraph.addNode(new ProcessGraphNodeViewDecorator(new nodeClass()));

    $('#adding-node-modal').closeModal();
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

  toggleMode()
  {
    this.displayModeSelected = !this.displayModeSelected;

    if(this.displayModeSelected)
    {
      this.processGraph.execute();
      $('.draggable').draggable({ disabled: true });
    }
    else
    {
      this.processGraph.reset();
      $('.draggable').draggable({ disabled: false });
    }
  }
}
