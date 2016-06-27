
class DilationNode extends ProcessGraphNode
{
  constructor()
  {
    super("Dilation", 1, 1);
  }

  protected calculate(values : Array<any>) : Array<any>
  {
    let structuringElement = new StructuringElement(
    [
      [true, true, true],
      [true, true, true],
      [true, true, true]
    ]);

    let sourceColorMap = values[0];
    let resultColorMap = (new Dilation(structuringElement)).convolute(sourceColorMap)

    return [resultColorMap];
  }
}
