
class BoxFilterNode extends ProcessGraphNode
{
  constructor()
  {
    super("Box Filter", 1, 1);
  }

  protected calculate(values : Array<any>)
  {
    let sourceColorMap = values[0];
    let resultColorMap = (new BoxFilter()).convolute(sourceColorMap);
    return [resultColorMap];
  }
}
