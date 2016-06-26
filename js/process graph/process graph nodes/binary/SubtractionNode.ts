
class SubtractionNode extends ProcessGraphNode
{
  constructor()
  {
    super("Subtraction", 2, 1);
  }

  protected calculate(values : Array<any>)
  {
    let sourceColorMap1 = values[0];
    let sourceColorMap2 = values[1];

    let resultColorMap = (new Subtraction()).convolute([sourceColorMap1, sourceColorMap2]);
    this.setResult(0, resultColorMap);

    console.log(resultColorMap);
  }
}
