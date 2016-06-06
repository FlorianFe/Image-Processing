var FilterMask = (function () {
    function FilterMask(matrix) {
        this.matrix = matrix;
    }
    FilterMask.prototype.getWidth = function () {
        return this.matrix[0].length;
    };
    FilterMask.prototype.getHeight = function () {
        return this.matrix.length;
    };
    FilterMask.prototype.getValueOnPos = function (x, y) {
        return this.matrix[x][y];
    };
    FilterMask.prototype.normalize = function () {
        var total = 0;
        for (var x = 0; x < this.matrix.length; x++) {
            for (var y = 0; y < this.matrix[x].length; y++) {
                total += Math.abs(this.matrix[x][y]);
            }
        }
        for (var x = 0; x < this.matrix.length; x++) {
            for (var y = 0; y < this.matrix[x].length; y++) {
                this.matrix[x][y] = this.matrix[x][y] / total;
            }
        }
    };
    return FilterMask;
}());
//# sourceMappingURL=FilterMask.js.map