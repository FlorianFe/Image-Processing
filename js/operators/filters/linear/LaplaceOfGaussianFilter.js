var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var LaplacianOfGaussianFilter = (function (_super) {
    __extends(LaplacianOfGaussianFilter, _super);
    function LaplacianOfGaussianFilter() {
        _super.call(this, [
            [0, 0, -1, 0, 0],
            [0, -1, -2, -1, 0],
            [-1, -2, 16, -2, -1],
            [0, -1, -2, -1, 0],
            [0, 0, -1, 0, 0]
        ], true);
    }
    return LaplacianOfGaussianFilter;
}(LinearFilter));
//# sourceMappingURL=LaplaceOfGaussianFilter.js.map