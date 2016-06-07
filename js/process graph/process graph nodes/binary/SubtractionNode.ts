
class SubtractionNode extends ProcessGraphNode
{
  private resultColorMap : ColorMap;

  constructor()
  {
    super("Subtraction", 2, 1);
    this.resultColorMap = null;
  }

  protected calculate()
  {
    let sourceColorMap1 = this.getValueFromInputPort(0);
    let sourceColorMap2 = this.getValueFromInputPort(1);

    console.log(sourceColorMap1, sourceColorMap2);

    let resultColorMap = (new Subtraction()).convolute([sourceColorMap1, sourceColorMap2]);
    this.resultColorMap = resultColorMap;
    this.setValueToOutputPort(0, resultColorMap);
    console.log(resultColorMap);

    // Display
    let image = ColorMapToImageParser.parse(this.resultColorMap);
    image.width = 200;
    this.displayElement = image;
  }
}
