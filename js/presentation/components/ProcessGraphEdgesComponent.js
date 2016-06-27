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
                    this.lastOutputPinClicked = null;
                }
                ProcessGraphEdgesComponent.prototype.getNumbers = function (num) {
                    var array = new Array(num);
                    for (var i = 0; i < num; i++) {
                        array[i] = i;
                    }
                    return array;
                };
                ProcessGraphEdgesComponent.prototype.ngAfterViewInit = function () {
                };
                ProcessGraphEdgesComponent.prototype.onClickOfInputPort = function (nodeIndex, portIndex) {
                    if (this.lastOutputPinClicked !== null) {
                        var outputNodePin = this.lastOutputPinClicked;
                        var inputNode = this.processGraph.getNode(nodeIndex);
                        var inputNodePin = new ProcessGraphNodePin(inputNode, portIndex);
                        this.processGraph.connectNodePins(outputNodePin, inputNodePin);
                        this.lastOutputPinClicked = null;
                        this.updateEvent.emit({});
                    }
                };
                ProcessGraphEdgesComponent.prototype.onClickOfOutputPort = function (nodeIndex, portIndex) {
                    var node = this.processGraph.getNode(nodeIndex);
                    this.lastOutputPinClicked = new ProcessGraphNodePin(node, portIndex);
                };
                __decorate([
                    core_2.Input("process-graph"), 
                    __metadata('design:type', Object)
                ], ProcessGraphEdgesComponent.prototype, "processGraph", void 0);
                __decorate([
                    core_2.Input("node-positions-map"), 
                    __metadata('design:type', Object)
                ], ProcessGraphEdgesComponent.prototype, "nodePositionsMap", void 0);
                __decorate([
                    core_2.Input('update-event'), 
                    __metadata('design:type', Object)
                ], ProcessGraphEdgesComponent.prototype, "updateEvent", void 0);
                ProcessGraphEdgesComponent = __decorate([
                    core_1.Component({
                        selector: 'process-graph-edges',
                        directives: [],
                        providers: [],
                        template: "\n\n    <style>\n\n      .connected-port\n      {\n        stroke: none;\n        fill: black;\n      }\n\n      .unconnected-port\n      {\n        stroke: black;\n        stroke-width: 1;\n        fill: white;\n      }\n\n    </style>\n    <svg style=\"position: absolute; left:0px; right:0px;\" width=\"1600\" height=\"800\">\n      <g *ngFor=\"#edge of processGraph.edgeCollection.edges; #index = index\" >\n        <line\n          [attr.x1]=\"nodePositionsMap.getPosition(edge.sourcePin.node.id).x + 200\"\n          [attr.y1]=\"nodePositionsMap.getPosition(edge.sourcePin.node.id).y + 100 + 40 * edge.sourcePin.port\"\n          [attr.x2]=\"nodePositionsMap.getPosition(edge.sourcePin.node.id).x + 100 + ((nodePositionsMap.getPosition(edge.destinationPin.node.id).x -\n            nodePositionsMap.getPosition(edge.sourcePin.node.id).x)/2)\"\n          [attr.y2]=\"nodePositionsMap.getPosition(edge.sourcePin.node.id).y + 100 + 40 * edge.sourcePin.port\"\n          style=\"stroke:rgb(55,55,55);stroke-width:2\"/>\n\n        <line\n          [attr.x1]=\"nodePositionsMap.getPosition(edge.sourcePin.node.id).x + 100 +\n            ((nodePositionsMap.getPosition(edge.destinationPin.node.id).x\n            - nodePositionsMap.getPosition(edge.sourcePin.node.id).x)/2)\"\n\n          [attr.y1]=\"nodePositionsMap.getPosition(edge.sourcePin.node.id).y + 100 + 40 * edge.sourcePin.port\"\n          [attr.x2]=\"nodePositionsMap.getPosition(edge.sourcePin.node.id).x + 100 +\n            ((nodePositionsMap.getPosition(edge.destinationPin.node.id).x\n            - nodePositionsMap.getPosition(edge.sourcePin.node.id).x)/2)\"\n\n          [attr.y2]=\"nodePositionsMap.getPosition(edge.destinationPin.node.id).y + 100 + 40 * edge.destinationPin.port\"\n          style=\"stroke:rgb(55,55,55);stroke-width:2\"/>\n\n        <line\n          [attr.x1]=\"nodePositionsMap.getPosition(edge.sourcePin.node.id).x + 100 + ((nodePositionsMap.getPosition(edge.destinationPin.node.id).x - nodePositionsMap.getPosition(edge.sourcePin.node.id).x)/2)\"\n          [attr.y1]=\"nodePositionsMap.getPosition(edge.destinationPin.node.id).y + 100 + 40 * edge.destinationPin.port\"\n          [attr.x2]=\"nodePositionsMap.getPosition(edge.destinationPin.node.id).x + 0\"\n          [attr.y2]=\"nodePositionsMap.getPosition(edge.destinationPin.node.id).y + 100 + 40 * edge.destinationPin.port\"\n          style=\"stroke:rgb(55,55,55);stroke-width:2\"/>\n      </g>\n\n      <g *ngFor=\"#node of processGraph.nodeList; #i = index\" >\n        <g *ngFor=\"#number of getNumbers(node.numberOutputPorts); #j = index\">\n          <rect\n            (click)=\"onClickOfOutputPort(i, j)\"\n            [attr.x]=\"nodePositionsMap.getPosition(node.id).x + 190\"\n            [attr.y]=\"nodePositionsMap.getPosition(node.id).y + 90 + j*40\"\n            width=\"20\" height=\"20\"\n            class=\"unconnected-port\"\n          />\n        </g>\n\n        <g *ngFor=\"#number of getNumbers(node.numberInputPorts); #j = index\">\n          <rect\n            (click)=\"onClickOfInputPort(i, j)\"\n            [attr.x]=\"nodePositionsMap.getPosition(node.id).x - 10\"\n            [attr.y]=\"nodePositionsMap.getPosition(node.id).y + 90 + j*40\"\n            width=\"20\" height=\"20\"\n            class=\"unconnected-port\"\n          />\n        </g>\n      </g>\n\n      <g *ngFor=\"#edge of processGraph.edgeCollection.edges; #i = index\" >\n        <g>\n          <rect\n            [attr.x]=\"nodePositionsMap.getPosition(edge.sourcePin.node.id).x + 190\"\n            [attr.y]=\"nodePositionsMap.getPosition(edge.sourcePin.node.id).y + 90 + edge.sourcePin.port*40\"\n            width=\"20\" height=\"20\"\n            class=\"connected-port\"\n          />\n        </g>\n\n        <g>\n          <rect\n            [attr.x]=\"nodePositionsMap.getPosition(edge.destinationPin.node.id).x - 10\"\n            [attr.y]=\"nodePositionsMap.getPosition(edge.destinationPin.node.id).y + 90 + edge.destinationPin.port*40\"\n            width=\"20\" height=\"20\"\n            class=\"connected-port\"\n          />\n        </g>\n      </g>\n    </svg>\n\n    "
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