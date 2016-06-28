
class SobelYFilterNode extends ProcessGraphNode
{
  constructor()
  {
    super("Sobel-Y Filter", 1, 1);
  }

  protected calculate(values : Array<any>) : Array<any>
  {
    let sourceColorMap = values[0];
    let resultColorMap = (new SobelYFilter()).convolute(sourceColorMap);

    return [resultColorMap];
  }
}
