var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", '../../node_modules/angular2/core'], function (require, exports, core_1) {
    "use strict";
    var MainComponent = (function () {
        function MainComponent() {
        }
        MainComponent = __decorate([
            core_1.Component({
                selector: 'app',
                directives: [],
                providers: [],
                template: "\n        <process-graph></process-graph>\n    "
            }), 
            __metadata('design:paramtypes', [])
        ], MainComponent);
        return MainComponent;
    }());
});
//# sourceMappingURL=MainComponent.js.map