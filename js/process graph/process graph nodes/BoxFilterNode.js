var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BoxFilterNode = (function (_super) {
    __extends(BoxFilterNode, _super);
    function BoxFilterNode() {
        _super.call(this, "Box Filter", 1, 1);
    }
    BoxFilterNode.prototype.display = function () {
        return ColorMapToImageParser.parse(this.resultColorMap);
    };
    BoxFilterNode.prototype.calculate = function () {
        var sourceColorMap = this.getValueFromInputPort(0);
        var resultColorMap = (new BoxFilter()).convolute(sourceColorMap);
        this.resultColorMap = resultColorMap;
        this.setValueToOutputPort(0, resultColorMap);
        console.log(resultColorMap);
    };
    return BoxFilterNode;
}(ProcessGraphNode));
//# sourceMappingURL=BoxFilterNode.js.map