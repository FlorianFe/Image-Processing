var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CosinusTransformationNode = (function (_super) {
    __extends(CosinusTransformationNode, _super);
    function CosinusTransformationNode() {
        _super.call(this, "Cosinus Transformation", 1, 1);
    }
    CosinusTransformationNode.prototype.calculate = function (values) {
        var sourceColorMap = values[0];
        var resultColorMap = (new CosinusTransformation(0.5)).transform(sourceColorMap);
        return [resultColorMap];
    };
    return CosinusTransformationNode;
}(ProcessGraphNode));
//# sourceMappingURL=CosinusTransformationNode.js.map