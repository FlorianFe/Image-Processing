System.register(['angular2/core', './ProcessGraphNodeComponent', './ProcessGraphEdgesComponent'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, ProcessGraphNodeComponent_1, ProcessGraphEdgesComponent_1;
    var ProcessGraphComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ProcessGraphNodeComponent_1_1) {
                ProcessGraphNodeComponent_1 = ProcessGraphNodeComponent_1_1;
            },
            function (ProcessGraphEdgesComponent_1_1) {
                ProcessGraphEdgesComponent_1 = ProcessGraphEdgesComponent_1_1;
            }],
        execute: function() {
            ProcessGraphComponent = (function () {
                function ProcessGraphComponent() {
                    this.updateEvent = new core_1.EventEmitter();
                    this.availableNodeKathegoryList = this.setupAvailableNodeKathegoryList();
                    this.processGraph = new ProcessGraph();
                    this.jasmineOpened = false;
                    var image = new Image();
                    image.src = "res/img/cat.jpg";
                    var that = this;
                    image.onload = function () {
                        that.processGraph.addNode(new ProcessGraphNodeViewDecorator(new ImageLoadingNode(image)));
                    };
                }
                ProcessGraphComponent.prototype.ngAfterViewInit = function () {
                    $('select').material_select();
                };
                ProcessGraphComponent.prototype.setupAvailableNodeKathegoryList = function () {
                    var kathegories = [];
                    var blurringKathegory = new ProcessGraphNodeKathegory("Weichzeichnungsfilter");
                    blurringKathegory.addNodeClass(BoxFilterNode);
                    kathegories.push(blurringKathegory);
                    var derivativeKathegory = new ProcessGraphNodeKathegory("Ableitungsfilter");
                    derivativeKathegory.addNodeClass(SobelYFilterNode);
                    derivativeKathegory.addNodeClass(LaplacianOfGaussianNode);
                    kathegories.push(derivativeKathegory);
                    var morphologicKathegory = new ProcessGraphNodeKathegory("Morphologische Filter");
                    morphologicKathegory.addNodeClass(DilationNode);
                    morphologicKathegory.addNodeClass(ErosionNode);
                    kathegories.push(morphologicKathegory);
                    var transformationsKathegory = new ProcessGraphNodeKathegory("Transformationen");
                    transformationsKathegory.addNodeClass(CosinusTransformationNode);
                    transformationsKathegory.addNodeClass(CosinusBackTransformationNode);
                    kathegories.push(transformationsKathegory);
                    var othersKathegory = new ProcessGraphNodeKathegory("Sonstiges");
                    othersKathegory.addNodeClass(CloneNode);
                    othersKathegory.addNodeClass(AdditionNode);
                    othersKathegory.addNodeClass(SubtractionNode);
                    kathegories.push(othersKathegory);
                    return kathegories;
                };
                ProcessGraphComponent.prototype.getSelectedNodeKathegory = function () {
                    var kathegoryIndex = parseInt($('#node-kathegory-selection').val());
                    kathegoryIndex = (kathegoryIndex) ? kathegoryIndex : 0;
                    console.log(kathegoryIndex, this.availableNodeKathegoryList);
                    return this.availableNodeKathegoryList[kathegoryIndex];
                };
                ProcessGraphComponent.prototype.isKathegorySelected = function (index) {
                    return (index === parseInt($('#node-kathegory-selection').val()));
                };
                ProcessGraphComponent.prototype.addNode = function () {
                    var kathegoryIndex = parseInt($('#node-kathegory-selection').val());
                    kathegoryIndex = (kathegoryIndex) ? kathegoryIndex : 0;
                    var classIndex = parseInt($('#node-class-selection-' + kathegoryIndex).val());
                    classIndex = (classIndex) ? classIndex : 0;
                    var nodeClass = this.availableNodeKathegoryList[kathegoryIndex].getNodeClass(classIndex);
                    this.processGraph.addNode(new ProcessGraphNodeViewDecorator(new nodeClass()));
                    $('#adding-node-modal').closeModal();
                };
                ProcessGraphComponent.prototype.openModal = function () {
                    $('#adding-node-modal').openModal();
                };
                ProcessGraphComponent.prototype.closeModal = function () {
                    $('#adding-node-modal').closeModal();
                };
                ProcessGraphComponent.prototype.toggleJasminePanel = function () {
                    if (this.jasmineOpened) {
                        $('.jasmine_html-reporter').hide();
                        this.jasmineOpened = false;
                    }
                    else {
                        $('.jasmine_html-reporter').show();
                        this.jasmineOpened = true;
                    }
                };
                ProcessGraphComponent.prototype.toggleMode = function () {
                    this.displayModeSelected = !this.displayModeSelected;
                    if (this.displayModeSelected) {
                        this.processGraph.execute();
                        $('.draggable').draggable({ disabled: true });
                    }
                    else {
                        this.processGraph.reset();
                        $('.draggable').draggable({ disabled: false });
                    }
                };
                ProcessGraphComponent = __decorate([
                    core_1.Component({
                        selector: 'process-graph',
                        directives: [ProcessGraphNodeComponent_1.ProcessGraphNodeComponent, ProcessGraphEdgesComponent_1.ProcessGraphEdgesComponent],
                        providers: [],
                        template: "\n\n      <process-graph-edges\n        [process-graph]=\"processGraph\"\n      ></process-graph-edges>\n\n      <process-graph-node\n        *ngFor=\"#node of processGraph.nodeList; #index = index\"\n        [process-graph-node]=\"node\"\n        [update-event]=\"updateEvent\"\n      ></process-graph-node>\n\n      <div class=\"navbar-fixed\">\n        <nav>\n          <div class=\"nav-wrapper grey lighten-4\">\n            <a href=\"#!\" class=\"brand-logo\"></a>\n            <ul class=\"right hide-on-med-and-down\">\n              <li>\n                <div class=\"switch\">\n                  <label>\n                    Bearbeiten\n                    <input type=\"checkbox\" (click)=\"toggleMode()\">\n                    <span class=\"lever\"></span>\n                    Anzeigen\n                  </label>\n                </div>\n              </li>\n\n              <li><a class=\"grey-text text-darken-4\" (click)=\"openModal()\">Knoten hinzuf\u00FCgen</a></li>\n              <li><a class=\"grey-text text-darken-4\" (click)=\"toggleJasminePanel()\">Jasmine</a></li>\n            </ul>\n          </div>\n        </nav>\n      </div>\n\n      <div class=\"modal\" id=\"adding-node-modal\">\n        <div class=\"modal-dialog\">\n\n          <!-- Modal content-->\n          <div class=\"modal-content\">\n            <h4 class=\"modal-title\">Neuen Knoten hinzuf\u00FCgen</h4>\n            <br><br>\n            <div class=\"input-field\">\n              <select id=\"node-kathegory-selection\">\n                <option *ngFor=\"#nodeKathegory of availableNodeKathegoryList; #index = index\"\n                  [attr.value]=\"index\">\n                  {{nodeKathegory.name}}\n                </option>\n              </select>\n              <label>Kathegorie</label>\n            </div>\n\n            <br>\n\n            <div class=\"input-field\" *ngFor=\"#nodeKathegory of availableNodeKathegoryList; #index = index\">\n              <div [hidden]=\"!isKathegorySelected(index)\">\n                <select id=\"node-class-selection-{{index}}\">\n                  <option *ngFor=\"#nodeClass of availableNodeKathegoryList[index].nodeClasses; #index2 = index\"\n                    [attr.value]=\"index2\">\n                    {{nodeClass.name}}\n                  </option>\n                </select>\n                <label>Knoten</label>\n              </div>\n            </div>\n\n            <div class=\"modal-footer\">\n              <a href=\"#\" (click)=\"closeModal()\" class=\"modal-action modal-close waves-effect waves-green btn-flat\">Schlie\u00DFen</a>\n              <button type=\"button\" class=\"btn btn-success\" (click)=\"addNode()\">Hinzuf\u00FCgen</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProcessGraphComponent);
                return ProcessGraphComponent;
            }());
            exports_1("ProcessGraphComponent", ProcessGraphComponent);
        }
    }
});
//# sourceMappingURL=ProcessGraphComponent.js.map