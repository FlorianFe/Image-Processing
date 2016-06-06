
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
    let image = ColorMapToImageParser.parse(this.colorMap);
    image.width = 150;
    return image;
  }

  protected calculate()
  {
    this.setValueToOutputPort(0, this.colorMap);

    let image = ColorMapToImageParser.parse(this.colorMap);
    image.width = 150;
    this.displayElement = image;
  }
}
