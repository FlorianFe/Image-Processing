
class NormalizationNode extends ProcessGraphNode
{
  constructor()
  {
    super("Normalisierung", 1, 1);
  }

  protected calculate(values : Array<any>) : Array<any>
  {
    let sourceColorMap = values[0];
    let resultColorMap = (new Normalization()).convolute(sourceColorMap);

    return [resultColorMap];
  }
}
