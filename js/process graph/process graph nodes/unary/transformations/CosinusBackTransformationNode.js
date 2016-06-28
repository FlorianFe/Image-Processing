var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CosinusBackTransformationNode = (function (_super) {
    __extends(CosinusBackTransformationNode, _super);
    function CosinusBackTransformationNode() {
        _super.call(this, "Cosinus Rücktransformation", 1, 1);
    }
    CosinusBackTransformationNode.prototype.calculate = function (values) {
        var sourceColorMap = values[0];
        var resultColorMap = (new CosinusBackTransformation()).transform(sourceColorMap);
        return [resultColorMap];
    };
    return CosinusBackTransformationNode;
}(ProcessGraphNode));
//# sourceMappingURL=CosinusBackTransformationNode.js.map