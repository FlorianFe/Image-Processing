var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ProcessGraphNodeViewDecorator = (function (_super) {
    __extends(ProcessGraphNodeViewDecorator, _super);
    function ProcessGraphNodeViewDecorator(processGraphNode) {
        _super.call(this, processGraphNode.getName(), processGraphNode.getInputSize(), processGraphNode.getOutputSize());
        this.processGraphNode = processGraphNode;
    }
    ProcessGraphNodeViewDecorator.prototype.calculate = function (args) {
        var results = this.processGraphNode.calculate(args);
        var colorMap = results[0];
        this.displayImage = ColorMapToImageParser.parse(colorMap);
        return results;
    };
    ProcessGraphNodeViewDecorator.prototype.getDisplayImage = function () {
        return this.displayImage;
    };
    ProcessGraphNodeViewDecorator.prototype.setDisplayPosition = function (x, y) {
        this.displayPosition = { x: x, y: y };
    };
    ProcessGraphNodeViewDecorator.prototype.getDisplayPosition = function () {
        return this.displayPosition();
    };
    return ProcessGraphNodeViewDecorator;
}(ProcessGraphNode));
//# sourceMappingURL=ProcessGraphNodeViewDecorator.js.map