var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SubtractionNode = (function (_super) {
    __extends(SubtractionNode, _super);
    function SubtractionNode() {
        _super.call(this, "Subtraction", 2, 1);
    }
    SubtractionNode.prototype.calculate = function (values) {
        var sourceColorMap1 = values[0];
        var sourceColorMap2 = values[1];
        var resultColorMap = (new Subtraction()).convolute([sourceColorMap1, sourceColorMap2]);
        this.setResult(0, resultColorMap);
        console.log(resultColorMap);
    };
    return SubtractionNode;
}(ProcessGraphNode));
//# sourceMappingURL=SubtractionNode.js.map