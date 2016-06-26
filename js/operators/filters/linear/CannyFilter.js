var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CannyFilter = (function (_super) {
    __extends(CannyFilter, _super);
    function CannyFilter() {
        var mask = new FilterMask([
            [1, 2, 1],
            [2, 4, 2],
            [1, 2, 1]
        ]);
        mask.normalize();
        _super.call(this, mask);
    }
    return CannyFilter;
}(LinearFilter));
//# sourceMappingURL=CannyFilter.js.map