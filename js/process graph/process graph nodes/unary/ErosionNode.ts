
class ErosionNode extends ProcessGraphNode
{
  private resultColorMap : ColorMap;

  constructor()
  {
    super("Erosion", 1, 1);
    this.resultColorMap = null;
  }

  protected calculate()
  {
    let structuringElement = new StructuringElement(
    [
      [true, true, true],
      [true, true, true],
      [true, true, true]
    ]);

    let sourceColorMap = this.getValueFromInputPort(0);
    let resultColorMap = (new Erosion(structuringElement)).convolute(sourceColorMap);
    this.resultColorMap = resultColorMap;
    this.setValueToOutputPort(0, resultColorMap);
    console.log(resultColorMap);

    // Display
    let image = ColorMapToImageParser.parse(this.resultColorMap);
    image.width = 200;
    this.displayElement = image;
  }
}
