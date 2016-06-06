System.register(['angular2/core', './ProcessGraphNodeComponent'], function(exports_1, context_1) {
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
    var core_1, ProcessGraphNodeComponent_1;
    var ProcessGraphComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ProcessGraphNodeComponent_1_1) {
                ProcessGraphNodeComponent_1 = ProcessGraphNodeComponent_1_1;
            }],
        execute: function() {
            ProcessGraphComponent = (function () {
                function ProcessGraphComponent() {
                    this.processGraph = new ProcessGraph();
                    var image = new Image();
                    image.src = "res/img/dices.gif";
                    var that = this;
                    image.onload = function () {
                        that.processGraph.addNode(new ImageLoadingNode(image));
                        that.processGraph.addNode(new BoxFilterNode());
                        that.processGraph.addNode(new SobelYFilterNode());
                        that.processGraph.connectNodes(0, 1, 0, 0);
                        that.processGraph.connectNodes(1, 2, 0, 0);
                        that.processGraph.execute();
                    };
                }
                ProcessGraphComponent.prototype.addImageLoadingNode = function (image) {
                    this.processGraph.addNode(new ImageLoadingNode(image));
                };
                ProcessGraphComponent = __decorate([
                    core_1.Component({
                        selector: 'process-graph',
                        directives: [ProcessGraphNodeComponent_1.ProcessGraphNodeComponent],
                        providers: [],
                        template: "\n        <process-graph-node\n          *ngFor=\"#node of processGraph.nodeList\"\n          [process-graph-node]=\"node\" ></process-graph-node>\n    "
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