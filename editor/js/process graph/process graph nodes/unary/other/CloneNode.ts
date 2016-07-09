
class CloneNode extends ProcessGraphNode
{
  constructor()
  {
    super("Clone", 1, 2);
  }

  protected calculate(values : Array<any>) : Array<any>
  {
    let sourceColorMap = values[0];
    let resultColorMap = sourceColorMap;
    
    return [resultColorMap, resultColorMap]
  }
}
