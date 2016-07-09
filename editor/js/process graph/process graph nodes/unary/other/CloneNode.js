var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CloneNode = (function (_super) {
    __extends(CloneNode, _super);
    function CloneNode() {
        _super.call(this, "Clone", 1, 2);
    }
    CloneNode.prototype.calculate = function (values) {
        var sourceColorMap = values[0];
        var resultColorMap = sourceColorMap;
        return [resultColorMap, resultColorMap];
    };
    return CloneNode;
}(ProcessGraphNode));
//# sourceMappingURL=CloneNode.js.map