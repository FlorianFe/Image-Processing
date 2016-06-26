
class ImageLoadingNode extends ProcessGraphNode
{
  private resultColorMap : ColorMap;

  constructor(image)
  {
    super("Image Loading", 0, 1);
    this.resultColorMap = ImageToColorMapParser.parse(image);
  }

  protected calculate()
  {
    this.setResult(0, this.resultColorMap);
  }
}
