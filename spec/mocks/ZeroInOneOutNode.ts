
class ZeroInOneOutNode extends ProcessGraphNode
{
  constructor()
  {
    super("Zero In One Out", 0, 1);
  }

  calculate(values : Array<any>) : Array<any>
  {
    let result = 1;
    return [result];
  }
}
