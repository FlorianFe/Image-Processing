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
    var ProcessGraphNodeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            }],
        execute: function() {
            ProcessGraphNodeComponent = (function () {
                function ProcessGraphNodeComponent() {
                }
                ProcessGraphNodeComponent.prototype.ngAfterViewInit = function () {
                    $(drag);
                    function drag() {
                        $('.draggable').draggable({
                            cursor: "move",
                            grid: [20, 20]
                        });
                    }
                };
                __decorate([
                    core_2.Input("process-graph-node"), 
                    __metadata('design:type', Object)
                ], ProcessGraphNodeComponent.prototype, "processGraphNode", void 0);
                ProcessGraphNodeComponent = __decorate([
                    core_1.Component({
                        selector: 'process-graph-node',
                        directives: [],
                        providers: [],
                        template: "\n      <style>\n\n        .thumbnail\n        {\n          left: 0px;\n          top: 0px;\n          width: 200px;\n          height: 200px;\n          border-color: black;\n          text-align: center;\n        }\n\n        .draggable\n        {\n          cursor: move;\n        }\n\n      </style>\n<!--\n      <div class=\"draggable\">\n        {{processGraphNode.name}}\n      </div>\n-->\n      <div class=\"thumbnail draggable\">\n        <div *ngIf=\"processGraphNode.finished\">\n          <img src=\"{{processGraphNode.displayElement.src}}\" width=\"150\" height=\"100\">\n        </div>\n       <div class=\"caption\">\n         <h3>{{processGraphNode.name}}</h3>\n       </div>\n      </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProcessGraphNodeComponent);
                return ProcessGraphNodeComponent;
            }());
            exports_1("ProcessGraphNodeComponent", ProcessGraphNodeComponent);
        }
    }
});
//# sourceMappingURL=ProcessGraphNodeComponent.js.map