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
    BoxFilterNode.prototype.calculate = function (values) {
        var sourceColorMap = values[0];
        var resultColorMap = (new BoxFilter()).convolute(sourceColorMap);
        return [resultColorMap];
    };
    return BoxFilterNode;
}(ProcessGraphNode));
//# sourceMappingURL=BoxFilterNode.js.map