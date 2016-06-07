var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ImageLoadingNode = (function (_super) {
    __extends(ImageLoadingNode, _super);
    function ImageLoadingNode(image) {
        _super.call(this, "Image Loading", 0, 1);
        this.colorMap = ImageToColorMapParser.parse(image);
    }
    ImageLoadingNode.prototype.display = function () {
        var image = ColorMapToImageParser.parse(this.colorMap);
        image.width = 150;
        return image;
    };
    ImageLoadingNode.prototype.calculate = function () {
        this.setValueToOutputPort(0, this.colorMap);
        var image = ColorMapToImageParser.parse(this.colorMap);
        image.width = 150;
        this.displayElement = image;
    };
    return ImageLoadingNode;
}(ProcessGraphNode));
//# sourceMappingURL=ImageLoadingNode.js.map