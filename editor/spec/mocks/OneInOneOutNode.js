var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OneInOneOutNode = (function (_super) {
    __extends(OneInOneOutNode, _super);
    function OneInOneOutNode() {
        _super.call(this, "One In One Out", 1, 1);
    }
    OneInOneOutNode.prototype.calculate = function (values) {
        var input = values[0];
        var result = input + 1;
        return [result];
    };
    return OneInOneOutNode;
}(ProcessGraphNode));
//# sourceMappingURL=OneInOneOutNode.js.map