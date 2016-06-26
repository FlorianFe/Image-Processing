var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AdditionNode = (function (_super) {
    __extends(AdditionNode, _super);
    function AdditionNode() {
        _super.call(this, "Addition", 2, 1);
    }
    AdditionNode.prototype.calculate = function (values) {
        var sourceColorMap1 = values[0];
        var sourceColorMap2 = values[1];
        var resultColorMap = (new Addition()).convolute([sourceColorMap1, sourceColorMap2]);
        return [resultColorMap];
    };
    return AdditionNode;
}(ProcessGraphNode));
//# sourceMappingURL=AdditionNode.js.map