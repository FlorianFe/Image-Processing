var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SubtractionNode = (function (_super) {
    __extends(SubtractionNode, _super);
    function SubtractionNode() {
        _super.call(this, "Subtraction", 2, 1);
        this.resultColorMap = null;
    }
    SubtractionNode.prototype.calculate = function () {
        var sourceColorMap1 = this.getValueFromInputPort(0);
        var sourceColorMap2 = this.getValueFromInputPort(1);
        console.log(sourceColorMap1, sourceColorMap2);
        var resultColorMap = (new Subtraction()).convolute([sourceColorMap1, sourceColorMap2]);
        this.resultColorMap = resultColorMap;
        this.setValueToOutputPort(0, resultColorMap);
        console.log(resultColorMap);
        // Display
        var image = ColorMapToImageParser.parse(this.resultColorMap);
        image.width = 200;
        this.displayElement = image;
    };
    return SubtractionNode;
}(ProcessGraphNode));
//# sourceMappingURL=SubtractionNode.js.map