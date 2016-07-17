System.register(['angular2/core', '../../../../utils/CodeToHTMLParser'], function(exports_1, context_1) {
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
    var core_1, CodeToHTMLParser_1;
    var LinearFilterComponent;
    function loadImageFromFileInput(event, callback) {
        var image = new Image();
        var self = this;
        var input = event.target;
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                image.src = e.target['result'];
                callback(image);
            };
            reader.readAsDataURL(input.files[0]);
        }
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (CodeToHTMLParser_1_1) {
                CodeToHTMLParser_1 = CodeToHTMLParser_1_1;
            }],
        execute: function() {
            LinearFilterComponent = (function () {
                function LinearFilterComponent() {
                }
                LinearFilterComponent.prototype.ngAfterViewInit = function () {
                    $(document).ready(function () {
                        $('.code-box').each(function (index, element) {
                            $.get($(element).attr('data'), function (data) {
                                $(element).html((new CodeToHTMLParser_1.CodeToHTMLParser()).parse(data));
                            });
                        });
                        $('.button-collapse').sideNav();
                        $('.collapsible').collapsible({
                            accordion: false
                        });
                        $('.materialboxed').materialbox();
                        // Code Editor Part
                        var sourceColorMap = new ColorMap(1, 1);
                        var editor = ace.edit("editor");
                        editor.setTheme("ace/theme/textmate");
                        editor.getSession().setMode("ace/mode/javascript");
                        $('#source-image').on('load', function () {
                            sourceColorMap = ImageToColorMapParser.parse($('#source-image').get(0));
                        });
                        $('.code-box').each(function (index, element) {
                            $.get($(element).attr('data'), function (data) {
                                $(element).html((new CodeToHTMLParser_1.CodeToHTMLParser()).parse(data));
                            });
                        });
                        $('#image-file-input').on('change', function (event) {
                            loadImageFromFileInput(event, function (image) {
                                $('#loading-bar').show();
                                sourceColorMap = ImageToColorMapParser.parse(image);
                                $('#source-image').attr('src', image.src);
                                var resultColorMap = new ColorMap(1, 1);
                                eval(editor.getValue());
                                var resultImage = ColorMapToImageParser.parse(resultColorMap);
                                $('#result-image').attr("src", resultImage.src);
                                $('#loading-bar').hide();
                            });
                        });
                        $('#btn-calculate').click(function () {
                            $('#loading-bar').show();
                            setTimeout(function () {
                                try {
                                    sourceColorMap = ImageToColorMapParser.parse($('#source-image').get(0));
                                    var resultColorMap = new ColorMap(1, 1);
                                    eval(editor.getValue());
                                    var resultImage = ColorMapToImageParser.parse(resultColorMap);
                                    $('#result-image').attr("src", resultImage.src);
                                }
                                catch (exception) {
                                    var toastContent = $('<b>' + exception + '</b>');
                                    Materialize.toast(toastContent, 3000);
                                }
                                finally {
                                    $('#loading-bar').hide();
                                }
                            }, 50);
                        });
                    });
                };
                LinearFilterComponent = __decorate([
                    core_1.Component({
                        selector: 'chapter-linear-filter',
                        directives: [],
                        providers: [],
                        templateUrl: 'js/presentation/components/chapters/linear filter/linear-filter.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], LinearFilterComponent);
                return LinearFilterComponent;
            }());
            exports_1("LinearFilterComponent", LinearFilterComponent);
        }
    }
});
//# sourceMappingURL=LinearFilterComponent.js.map