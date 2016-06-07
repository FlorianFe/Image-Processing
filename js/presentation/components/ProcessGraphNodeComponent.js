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
                function ProcessGraphNodeComponent(element) {
                    this.element = element;
                    this.element.nativeElement; // <- your direct element reference
                }
                ProcessGraphNodeComponent.prototype.setPosition = function () {
                    var el = this.element.nativeElement;
                    this.nodePositions[this.nodeIndex] = { x: $(el).children().offset().left, y: $(el).children().offset().top };
                };
                ProcessGraphNodeComponent.prototype.ngAfterViewInit = function () {
                    var self = this;
                    this.updateEvent.subscribe(function () {
                        self.setPosition();
                    });
                    this.setPosition();
                    $(drag);
                    function drag() {
                        $('.draggable').draggable({
                            cursor: "move",
                            grid: [20, 20],
                            drag: function (event, ui) {
                                self.updateEvent.emit({});
                            }
                        });
                    }
                    self.updateEvent.emit({});
                };
                ProcessGraphNodeComponent.prototype.ngOnInit = function () {
                    var el = this.element.nativeElement;
                    this.setPosition();
                };
                __decorate([
                    core_2.Input("process-graph-node"), 
                    __metadata('design:type', Object)
                ], ProcessGraphNodeComponent.prototype, "processGraphNode", void 0);
                __decorate([
                    core_2.Input("node-positions"), 
                    __metadata('design:type', Object)
                ], ProcessGraphNodeComponent.prototype, "nodePositions", void 0);
                __decorate([
                    core_2.Input("node-index"), 
                    __metadata('design:type', Object)
                ], ProcessGraphNodeComponent.prototype, "nodeIndex", void 0);
                __decorate([
                    core_2.Input('update-event'), 
                    __metadata('design:type', Object)
                ], ProcessGraphNodeComponent.prototype, "updateEvent", void 0);
                ProcessGraphNodeComponent = __decorate([
                    core_1.Component({
                        selector: 'process-graph-node',
                        directives: [],
                        providers: [],
                        template: "\n      <style>\n\n        .thumbnail\n        {\n          left: 0px;\n          top: 0px;\n          margin: 40px;\n          width: 200px;\n          height: 200px;\n          border-color: black;\n          text-align: center;\n          float: left;\n        }\n\n        .draggable\n        {\n          cursor: move;\n        }\n\n      </style>\n\n      <div #draggableElement class=\"thumbnail draggable\" (load)=\"onLoad(event)\">\n        <div *ngIf=\"processGraphNode.finished\">\n          <img src=\"{{processGraphNode.displayElement.src}}\" width=\"150\" height=\"100\">\n        </div>\n       <div class=\"caption\">\n         <h3>{{processGraphNode.name}}</h3>\n       </div>\n      </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], ProcessGraphNodeComponent);
                return ProcessGraphNodeComponent;
            }());
            exports_1("ProcessGraphNodeComponent", ProcessGraphNodeComponent);
        }
    }
});
//# sourceMappingURL=ProcessGraphNodeComponent.js.map