
class CosinusBackTransformationNode extends ProcessGraphNode
{
  constructor()
  {
    super("Cosinus Rücktransformation", 1, 1);
  }

  protected calculate(values : Array<any>) : Array<any>
  {
    let sourceColorMap = values[0];
    let resultColorMap = (new CosinusBackTransformation()).transform(sourceColorMap);

    return [resultColorMap];
  }
}
