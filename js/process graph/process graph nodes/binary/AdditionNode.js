var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AdditionNode = (function (_super) {
    __extends(AdditionNode, _super);
    function AdditionNode() {
        _super.call(this, "Addition", 2, 1);
        this.resultColorMap = null;
    }
    AdditionNode.prototype.calculate = function () {
        var sourceColorMap1 = this.getValueFromInputPort(0);
        var sourceColorMap2 = this.getValueFromInputPort(1);
        var resultColorMap = (new Addition()).convolute([sourceColorMap1, sourceColorMap2]);
        this.resultColorMap = resultColorMap;
        this.setValueToOutputPort(0, resultColorMap);
        console.log(resultColorMap);
        // Display
        var image = ColorMapToImageParser.parse(this.resultColorMap);
        image.width = 200;
        this.displayElement = image;
    };
    return AdditionNode;
}(ProcessGraphNode));
//# sourceMappingURL=AdditionNode.js.map