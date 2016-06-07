var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CloneNode = (function (_super) {
    __extends(CloneNode, _super);
    function CloneNode() {
        _super.call(this, "Clone", 1, 2);
        this.resultColorMap = null;
    }
    CloneNode.prototype.calculate = function () {
        var sourceColorMap = this.getValueFromInputPort(0);
        this.resultColorMap = sourceColorMap;
        this.setValueToOutputPort(0, this.resultColorMap);
        this.setValueToOutputPort(1, this.resultColorMap);
        console.log(this.resultColorMap);
        // Display
        var image = ColorMapToImageParser.parse(this.resultColorMap);
        image.width = 200;
        this.displayElement = image;
    };
    return CloneNode;
}(ProcessGraphNode));
//# sourceMappingURL=CloneNode.js.map