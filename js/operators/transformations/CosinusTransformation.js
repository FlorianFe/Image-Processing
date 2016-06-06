var CosinusTransformation = (function () {
    function CosinusTransformation(n) {
        this.n = n;
        this.baseVectors = this.calcBaseVectors(n);
    }
    CosinusTransformation.prototype.calcBaseVectors = function (n) {
        var vectors = new Array(n);
        for (var i = 0; i < n; i++) {
            var vector = vectors[i];
            vector = new Vector(n);
            for (var j = 0; j < n; j++) {
                var alpha = (i == 0) ? Math.sqrt(1 / n) : Math.sqrt(2 / n);
                vector.setValue(j, alpha * Math.cos(((j + 0.5) * i * Math.PI) / n));
            }
        }
        return vectors;
    };
    CosinusTransformation.prototype.convolute = function (sourceColorMap) {
        var result = new ColorMap(sourceColorMap.getHeight(), sourceColorMap.getHeight());
        for (var x = 0; x < sourceColorMap.getWidth(); x++) {
            for (var y = 0; y < sourceColorMap.getHeight(); y++) {
                var sourcePixelR = (sourceColorMap.getPixel(x, y)).r;
            }
        }
        return result;
    };
    return CosinusTransformation;
}());
//# sourceMappingURL=CosinusTransformation.js.map