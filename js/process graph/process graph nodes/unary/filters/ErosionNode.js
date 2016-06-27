var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ErosionNode = (function (_super) {
    __extends(ErosionNode, _super);
    function ErosionNode() {
        _super.call(this, "Erosion", 1, 1);
    }
    ErosionNode.prototype.calculate = function (values) {
        var structuringElement = new StructuringElement([
            [true, true, true],
            [true, true, true],
            [true, true, true]
        ]);
        var sourceColorMap = values[0];
        var resultColorMap = (new Erosion(structuringElement)).convolute(sourceColorMap);
        return [resultColorMap];
    };
    return ErosionNode;
}(ProcessGraphNode));
//# sourceMappingURL=ErosionNode.js.map