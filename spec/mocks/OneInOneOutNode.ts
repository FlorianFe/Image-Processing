
class OneInOneOutNode extends ProcessGraphNode
{
  constructor()
  {
    super("One In One Out", 1, 1);
  }

  calculate(values : Array<any>) : Array<any>
  {
    let input = values[0]
    let result = input + 1;
    return [result];
  }
}
