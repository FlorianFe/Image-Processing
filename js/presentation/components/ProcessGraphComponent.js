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
                    this.availableNodeClassList = this.setupAvailableNodeClassList();
                    this.selectedNodeClassIndex = 0;
                    this.processGraph = new ProcessGraph();
                    var image = new Image();
                    image.src = "res/img/dices.gif";
                    var that = this;
                    image.onload = function () {
                        that.processGraph.addNode(new ImageLoadingNode(image));
                        that.processGraph.execute();
                    };
                    this.nodePositions = [];
                }
                ProcessGraphComponent.prototype.setupAvailableNodeClassList = function () {
                    var classes = [];
                    classes.push(BoxFilterNode);
                    classes.push(DilationNode);
                    classes.push(ErosionNode);
                    classes.push(LaplacianOfGaussianNode);
                    classes.push(SobelYFilterNode);
                    classes.push(AdditionNode);
                    classes.push(SubtractionNode);
                    classes.push(CloneNode);
                    return classes;
                };
                ProcessGraphComponent.prototype.addImageLoadingNode = function (image) {
                    this.processGraph.addNode(new ImageLoadingNode(image));
                };
                ProcessGraphComponent.prototype.play = function () {
                    this.processGraph.execute();
                };
                ProcessGraphComponent.prototype.addNode = function () {
                    var nodeClass = this.availableNodeClassList[this.selectedNodeClassIndex];
                    this.processGraph.addNode(new nodeClass());
                    var self = this;
                    $('#loading').fadeIn("slow", function () {
                        self.processGraph.execute();
                        $('#loading').fadeOut(3000);
                    });
                };
                ProcessGraphComponent.prototype.openModal = function () {
                    $('#adding-node-modal').modal();
                };
                ProcessGraphComponent = __decorate([
                    core_1.Component({
                        selector: 'process-graph',
                        directives: [ProcessGraphNodeComponent_1.ProcessGraphNodeComponent, ProcessGraphEdgesComponent_1.ProcessGraphEdgesComponent],
                        providers: [],
                        template: "\n\n      <div id=\"loading\" style=\"position: absolute; display: none;\">\n        <i class=\"fa fa-spinner fa-spin fa-3x fa-fw\"></i>\n      </div>\n\n      <process-graph-edges\n        [process-graph]=\"processGraph\"\n        [node-positions]=\"nodePositions\"\n        [update-event]=\"updateEvent\"\n        ></process-graph-edges>\n\n      <process-graph-node\n        *ngFor=\"#node of processGraph.nodeList; #index = index\"\n        [process-graph-node]=\"node\"\n        [node-positions]=\"nodePositions\"\n        [node-index]=\"index\"\n        [update-event]=\"updateEvent\"\n        ></process-graph-node>\n\n      <div style=\"position: absolute; right: 20px;\">\n        <span (click)=\"openModal($event)\" style=\"cursor: pointer;\">\n          <i class=\"fa fa-plus-circle fa-3x\" aria-hidden=\"true\"></i>\n        </span>\n      </div>\n\n      <div class=\"modal fade\" id=\"adding-node-modal\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n\n          <!-- Modal content-->\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n              <h4 class=\"modal-title\">Neuen Knoten hinzuf\u00FCgen</h4>\n            </div>\n            <div class=\"modal-body\">\n              <div class=\"form-group\">\n                <label for=\"sel1\">Kathegorie</label>\n                <select [(ngModel)]=\"selectedNodeClassIndex\" class=\"form-control\" id=\"sel1\">\n                  <option *ngFor=\"#nodeClass of availableNodeClassList; #index = index\"\n                    [attr.value]=\"index\">\n                    {{nodeClass.name}}\n                  </option>\n                </select>\n              </div>\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Schlie\u00DFen</button>\n              <button type=\"button\" class=\"btn btn-success\" (click)=\"addNode()\" data-dismiss=\"modal\">Hinzuf\u00FCgen</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    "
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