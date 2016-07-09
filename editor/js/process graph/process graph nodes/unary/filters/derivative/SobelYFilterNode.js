var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SobelYFilterNode = (function (_super) {
    __extends(SobelYFilterNode, _super);
    function SobelYFilterNode() {
        _super.call(this, "Sobel-Y Filter", 1, 1);
    }
    SobelYFilterNode.prototype.calculate = function (values) {
        var sourceColorMap = values[0];
        var resultColorMap = (new SobelYFilter()).convolute(sourceColorMap);
        return [resultColorMap];
    };
    return SobelYFilterNode;
}(ProcessGraphNode));
//# sourceMappingURL=SobelYFilterNode.js.map