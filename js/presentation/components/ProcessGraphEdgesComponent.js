System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1, core_2;
    var ProcessGraphEdgesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            }],
        execute: function() {
            ProcessGraphEdgesComponent = (function () {
                function ProcessGraphEdgesComponent() {
                    this.lastOutputPortClicked = null;
                }
                ProcessGraphEdgesComponent.prototype.ngAfterViewInit = function () {
                    this.edges = this.calculateEdges();
                    var that = this;
                    this.updateEvent.subscribe(function () {
                        that.edges = that.calculateEdges();
                    });
                };
                ProcessGraphEdgesComponent.prototype.calculateEdges = function () {
                    var edges = [];
                    var nodes = this.processGraph.getNodes();
                    for (var i = 0; i < nodes.length; i++) {
                        var node = nodes[i];
                        for (var j = 0; j < node.getOutputSize(); j++) {
                            var output = node.getOutput(j);
                            for (var k = 0; k < nodes.length; k++) {
                                if (output !== null) {
                                    if (nodes[k] === output.getDestination()) {
                                        var destinationNode = nodes[k];
                                        for (var l = 0; l < destinationNode.getInputSize(); l++) {
                                            if (destinationNode.getInput(l) === output) {
                                                edges.push({
                                                    sourceNodePosition: this.nodePositions[i],
                                                    sourcePortIndex: j,
                                                    destinationNodePosition: this.nodePositions[k],
                                                    destinationPortIndex: l
                                                });
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    return edges;
                };
                ProcessGraphEdgesComponent.prototype.onClickOfInputPort = function (nodeIndex, portIndex) {
                    if (this.lastOutputPortClicked) {
                        var outputNodeIndex = this.lastOutputPortClicked.nodeIndex;
                        var outputPortIndex = this.lastOutputPortClicked.portIndex;
                        var inputNodeIndex = nodeIndex;
                        var inputPortIndex = portIndex;
                        this.processGraph.connectNodes(outputNodeIndex, inputNodeIndex, outputPortIndex, inputPortIndex);
                        this.lastOutputPortClicked = null;
                        this.updateEvent.emit({});
                    }
                };
                ProcessGraphEdgesComponent.prototype.onClickOfOutputPort = function (nodeIndex, portIndex) {
                    this.lastOutputPortClicked = { nodeIndex: nodeIndex, portIndex: portIndex };
                };
                __decorate([
                    core_2.Input("process-graph"), 
                    __metadata('design:type', Object)
                ], ProcessGraphEdgesComponent.prototype, "processGraph", void 0);
                __decorate([
                    core_2.Input("node-positions"), 
                    __metadata('design:type', Object)
                ], ProcessGraphEdgesComponent.prototype, "nodePositions", void 0);
                __decorate([
                    core_2.Input('update-event'), 
                    __metadata('design:type', Object)
                ], ProcessGraphEdgesComponent.prototype, "updateEvent", void 0);
                ProcessGraphEdgesComponent = __decorate([
                    core_1.Component({
                        selector: 'process-graph-edges',
                        directives: [],
                        providers: [],
                        template: "\n\n    <style>\n\n      .connected-port\n      {\n        stroke: none;\n        fill: black;\n      }\n\n      .unconnected-port\n      {\n        stroke: black;\n        stroke-width: 1;\n        fill: white;\n      }\n\n    </style>\n\n    <svg style=\"position: absolute; left:0px; right:0px;\" width=\"1600\" height=\"800\">\n\n      <g *ngFor=\"#edge of edges; #index = index\" >\n        <line\n          [attr.x1]=\"edge.sourceNodePosition.x + 200\"\n          [attr.y1]=\"edge.sourceNodePosition.y + 100 + 40 * edge.sourcePortIndex\"\n          [attr.x2]=\"edge.destinationNodePosition.x + 0\"\n          [attr.y2]=\"edge.destinationNodePosition.y + 100 + 40 * edge.destinationPortIndex\"\n          style=\"stroke:rgb(55,55,55);stroke-width:2\"/>\n      </g>\n\n      <g *ngFor=\"#node of processGraph.getNodes(); #i = index\" >\n        <g *ngFor=\"#input of node.input; #j = index\" >\n          <rect\n            (click)=\"onClickOfInputPort(i, j)\"\n            [attr.x]=\"nodePositions[i].x - 10\"\n            [attr.y]=\"nodePositions[i].y + 90 + j*40\"\n            width=\"20\"\n            height=\"20\"\n            [ngClass]=\"(input === null) ? 'unconnected-port' : 'connected-port'\" />\n        </g>\n\n        <g *ngFor=\"#output of node.output; #j = index\" >\n          <rect\n            (click)=\"onClickOfOutputPort(i, j)\"\n            [attr.x]=\"nodePositions[i].x + 190\"\n            [attr.y]=\"nodePositions[i].y + 90 + j*40\"\n            width=\"20\"\n            height=\"20\"\n            [ngClass]=\"(output === null) ? 'unconnected-port' : 'connected-port'\" />\n        </g>\n      </g>\n    </svg>\n\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProcessGraphEdgesComponent);
                return ProcessGraphEdgesComponent;
            }());
            exports_1("ProcessGraphEdgesComponent", ProcessGraphEdgesComponent);
        }
    }
});
//# sourceMappingURL=ProcessGraphEdgesComponent.js.map