
class ImageLoadingNode extends ProcessGraphNode
{
  private colorMap : ColorMap;

  constructor(image)
  {
    super("Image Loading", 0, 1);
    this.colorMap = ImageToColorMapParser.parse(image);
  }

  public display()
  {
    return ColorMapToImageParser.parse(this.colorMap);
  }

  protected calculate()
  {
    this.setValueToOutputPort(0, this.colorMap);
  }
}
