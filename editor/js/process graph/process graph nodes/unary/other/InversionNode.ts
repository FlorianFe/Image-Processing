
class InversionNode extends ProcessGraphNode
{
  constructor()
  {
    super("Invertierung", 1, 1);
  }

  protected calculate(values : Array<any>) : Array<any>
  {
    let sourceColorMap = values[0];
    let resultColorMap = (new Inversion()).convolute(sourceColorMap);

    return [resultColorMap];
  }
}
