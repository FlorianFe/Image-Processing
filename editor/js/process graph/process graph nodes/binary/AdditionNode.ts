
class AdditionNode extends ProcessGraphNode
{
  constructor()
  {
    super("Addition", 2, 1);
  }

  protected calculate(values : Array<any>) : Array<any>
  {
    let sourceColorMap1 = values[0];
    let sourceColorMap2 = values[1];

    let resultColorMap = (new Addition()).convolute([sourceColorMap1, sourceColorMap2]);
    
    return [resultColorMap];
  }
}
