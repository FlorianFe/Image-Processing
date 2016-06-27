var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DilationNode = (function (_super) {
    __extends(DilationNode, _super);
    function DilationNode() {
        _super.call(this, "Dilation", 1, 1);
    }
    DilationNode.prototype.calculate = function (values) {
        var structuringElement = new StructuringElement([
            [true, true, true],
            [true, true, true],
            [true, true, true]
        ]);
        var sourceColorMap = values[0];
        var resultColorMap = (new Dilation(structuringElement)).convolute(sourceColorMap);
        return [resultColorMap];
    };
    return DilationNode;
}(ProcessGraphNode));
//# sourceMappingURL=DilationNode.js.map