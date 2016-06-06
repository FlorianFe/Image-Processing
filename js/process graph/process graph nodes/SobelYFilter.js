var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SobelYNode = (function (_super) {
    __extends(SobelYNode, _super);
    function SobelYNode() {
        _super.call(this, "Sobel-Y Filter", 0, 1);
        this.resultColorMap = null;
    }
    SobelYNode.prototype.display = function () {
        if (this.resultColorMap !== null) {
            var image = ColorMapToImageParser.parse(this.resultColorMap);
            image.width = 200;
            return image;
        }
        else {
            return new HTMLElement();
        }
    };
    SobelYNode.prototype.calculate = function () {
        var sourceColorMap = this.getValueFromInputPort(0);
        var resultColorMap = (new SobelYFilter()).convolute(sourceColorMap);
        this.resultColorMap = resultColorMap;
        this.setValueToOutputPort(0, resultColorMap);
        console.log(resultColorMap);
        // Display
        var image = ColorMapToImageParser.parse(this.resultColorMap);
        image.width = 200;
        this.displayElement = image;
    };
    return SobelYNode;
}(ProcessGraphNode));
//# sourceMappingURL=SobelYFilter.js.map