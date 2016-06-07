
class SobelYFilterNode extends ProcessGraphNode
{
  private resultColorMap : ColorMap;

  constructor()
  {
    super("Sobel-Y Filter", 1, 1);
    this.resultColorMap = null;
  }

  protected calculate()
  {
    let sourceColorMap = this.getValueFromInputPort(0);
    let resultColorMap = (new SobelYFilter()).convolute(sourceColorMap);
    this.resultColorMap = resultColorMap;
    this.setValueToOutputPort(0, resultColorMap);
    console.log(resultColorMap);

    // Display
    let image = ColorMapToImageParser.parse(this.resultColorMap);
    image.width = 200;
    this.displayElement = image;
  }
}
