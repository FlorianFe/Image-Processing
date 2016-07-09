var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var LaplacianOfGaussianNode = (function (_super) {
    __extends(LaplacianOfGaussianNode, _super);
    function LaplacianOfGaussianNode() {
        _super.call(this, "Laplace of Gaussian Filter", 1, 1);
    }
    LaplacianOfGaussianNode.prototype.calculate = function (values) {
        var sourceColorMap = values[0];
        var resultColorMap = (new LaplacianOfGaussianFilter()).convolute(sourceColorMap);
        return [resultColorMap];
    };
    return LaplacianOfGaussianNode;
}(ProcessGraphNode));
//# sourceMappingURL=LaplacianOfGaussianNode.js.map