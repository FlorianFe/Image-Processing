
class ImageLoadingNode extends ProcessGraphNode
{
  private resultColorMap : ColorMap;

  constructor(image)
  {
    super("Image Loading", 0, 1);
    this.resultColorMap = ImageToColorMapParser.parse(image);
  }

  setImage(image)
  {
    this.resultColorMap = ImageToColorMapParser.parse(image);
  }

  protected calculate(values : Array<any>) : Array<any>
  {
    return [this.resultColorMap];
  }
}
