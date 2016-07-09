var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var InversionNode = (function (_super) {
    __extends(InversionNode, _super);
    function InversionNode() {
        _super.call(this, "Invertierung", 1, 1);
    }
    InversionNode.prototype.calculate = function (values) {
        var sourceColorMap = values[0];
        var resultColorMap = (new Inversion()).convolute(sourceColorMap);
        return [resultColorMap];
    };
    return InversionNode;
}(ProcessGraphNode));
//# sourceMappingURL=InversionNode.js.map