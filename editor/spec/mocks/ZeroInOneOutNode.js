var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ZeroInOneOutNode = (function (_super) {
    __extends(ZeroInOneOutNode, _super);
    function ZeroInOneOutNode() {
        _super.call(this, "Zero In One Out", 0, 1);
    }
    ZeroInOneOutNode.prototype.calculate = function (values) {
        var result = 1;
        return [result];
    };
    return ZeroInOneOutNode;
}(ProcessGraphNode));
//# sourceMappingURL=ZeroInOneOutNode.js.map