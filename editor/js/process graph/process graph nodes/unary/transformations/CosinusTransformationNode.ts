
class CosinusTransformationNode extends ProcessGraphNode
{
  constructor()
  {
    super("Cosinus Transformation", 1, 1);
  }

  protected calculate(values : Array<any>) : Array<any>
  {
    let sourceColorMap = values[0];
    let resultColorMap = (new CosinusTransformation(0.5)).transform(sourceColorMap);

    return [resultColorMap];
  }
}
