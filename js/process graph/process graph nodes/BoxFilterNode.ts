
class BoxFilterNode extends ProcessGraphNode
{
  private resultColorMap : ColorMap;

  constructor()
  {
    super("Box Filter", 1, 1);
  }

  public display()
  {
    return ColorMapToImageParser.parse(this.resultColorMap);
  }

  protected calculate()
  {
    let sourceColorMap = this.getValueFromInputPort(0);
    let resultColorMap = (new BoxFilter()).convolute(sourceColorMap);
    this.resultColorMap = resultColorMap;
    this.setValueToOutputPort(0, resultColorMap);
    console.log(resultColorMap);
  }
}
