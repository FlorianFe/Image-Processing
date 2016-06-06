
class BoxFilterNode extends ProcessGraphNode
{
  private resultColorMap : ColorMap;

  constructor()
  {
    super("Box Filter", 1, 1);
    this.resultColorMap = null;
  }

  public display()
  {
    if(this.resultColorMap !== null)
    {
      let image = ColorMapToImageParser.parse(this.resultColorMap);
      image.width = 200;
      return image;
    }
    else
    {
      return new HTMLElement();
    }
  }

  protected calculate()
  {
    let sourceColorMap = this.getValueFromInputPort(0);
    let resultColorMap = (new BoxFilter()).convolute(sourceColorMap);
    this.resultColorMap = resultColorMap;
    this.setValueToOutputPort(0, resultColorMap);
    console.log(resultColorMap);

    // Display
    let image = ColorMapToImageParser.parse(this.resultColorMap);
    image.width = 200;
    this.displayElement = image;
  }
}
