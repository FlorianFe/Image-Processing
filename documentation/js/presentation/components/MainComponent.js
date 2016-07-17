System.register(['angular2/core', './chapters/introduction/IntroductionComponent', './chapters/linear filter/LinearFilterComponent'], function(exports_1, context_1) {
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
    var core_1, IntroductionComponent_1, LinearFilterComponent_1;
    var MainComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (IntroductionComponent_1_1) {
                IntroductionComponent_1 = IntroductionComponent_1_1;
            },
            function (LinearFilterComponent_1_1) {
                LinearFilterComponent_1 = LinearFilterComponent_1_1;
            }],
        execute: function() {
            MainComponent = (function () {
                function MainComponent() {
                    this.INTRODUCTION_CHAPTER = 0;
                    this.LINEAR_FILTER_CHAPTER = 1;
                    this.MORPHOLOGIC_FILTER_CHAPTER = 2;
                    this.TRANSFORMATIONS_CHAPTER = 3;
                    this.selectedChapter = this.INTRODUCTION_CHAPTER;
                }
                MainComponent.prototype.selectIntroduction = function () {
                    this.selectedChapter = this.INTRODUCTION_CHAPTER;
                };
                MainComponent.prototype.selectLinearFilter = function () {
                    this.selectedChapter = this.LINEAR_FILTER_CHAPTER;
                };
                MainComponent.prototype.selectMorphologicFilter = function () {
                    this.selectedChapter = this.INTRODUCTION_CHAPTER;
                };
                MainComponent.prototype.selectTransformations = function () {
                    this.selectedChapter = this.INTRODUCTION_CHAPTER;
                };
                MainComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        directives: [LinearFilterComponent_1.LinearFilterComponent, IntroductionComponent_1.IntroductionComponent],
                        providers: [],
                        template: "\n      <main>\n        <div class=\"documentation\">\n          <div class=\"container\">\n            <chapter-introduction *ngIf=\"selectedChapter === INTRODUCTION_CHAPTER\"></chapter-introduction>\n            <chapter-linear-filter *ngIf=\"selectedChapter === LINEAR_FILTER_CHAPTER\"></chapter-linear-filter>\n            <!--<chapter-introduction *ngIf=\"selectedChapter === 'introduction'\"></chapter-introduction>\n            <chapter-introduction *ngIf=\"selectedChapter === 'introduction'\"></chapter-introduction>-->\n            <div id=\"loading-bar\" style=\"position: fixed; display: none; top : 50px; right: 50px;\">\n              <i class=\"material-icons\">av_timer</i> L\u00E4dt...\n            </div>\n          </div>\n        </div>\n      </main>\n\n      <ul id=\"slide-out\" class=\"side-nav fixed\">\n        <li class=\"no-padding\">\n         <ul class=\"collapsible collapsible-accordion\">\n          <li><a class=\"nav-item\" [class]=\"(selectedChapter === INTRODUCTION_CHAPTER) ? 'light-blue white-text' : ''\" (click)=\"selectIntroduction()\" href=\"#!introduction\">Einleitung</a></li>\n          <li><a class=\"nav-item\" [class]=\"(selectedChapter === LINEAR_FILTER_CHAPTER) ? 'light-blue white-text' : ''\" (click)=\"selectLinearFilter()\" href=\"#!linear-filter\">Lineare Filter</a></li>\n          <li><a class=\"nav-item\" (click)=\"selectMorphologicFilter()\" id=\"nav-item-morphologic-filter\" href=\"#!morphologic-filter\">Morphologische Filter</a></li>\n          <li><a class=\"nav-item\" (click)=\"selectTransformations()\" id=\"nav-item-transformations\" href=\"#!transformations\">Transformationen</a></li>\n        </ul>\n      </ul>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], MainComponent);
                return MainComponent;
            }());
            exports_1("MainComponent", MainComponent);
        }
    }
});
//# sourceMappingURL=MainComponent.js.map