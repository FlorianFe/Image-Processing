
class ProcessGraphNodeViewDecorator extends ProcessGraphNode
{
  private displayImage;
  private displayPosition;
  private processGraphNode;

  constructor(processGraphNode : ProcessGraphNode)
  {
    super(processGraphNode.getName(), processGraphNode.getInputSize(), processGraphNode.getOutputSize());
    this.processGraphNode = processGraphNode;
  }

  calculate(args)
  {
    let results = this.processGraphNode.calculate(args);
    let colorMap = results[0];

    this.displayImage = ColorMapToImageParser.parse(colorMap);

    return results;
  }

  getDisplayImage()
  {
    return this.displayImage;
  }

  setDisplayPosition(x, y)
  {
    this.displayPosition = {x: x, y: y};
  }

  getDisplayPosition()
  {
    return this.displayPosition();
  }
}
