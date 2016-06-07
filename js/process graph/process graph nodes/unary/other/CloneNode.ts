
class CloneNode extends ProcessGraphNode
{
  private resultColorMap : ColorMap;

  constructor()
  {
    super("Clone", 1, 2);
    this.resultColorMap = null;
  }

  protected calculate()
  {
    let sourceColorMap = this.getValueFromInputPort(0);

    this.resultColorMap = sourceColorMap;
    this.setValueToOutputPort(0, this.resultColorMap);
    this.setValueToOutputPort(1, this.resultColorMap);

    console.log(this.resultColorMap);

    // Display
    let image = ColorMapToImageParser.parse(this.resultColorMap);
    image.width = 200;
    this.displayElement = image;
  }
}
