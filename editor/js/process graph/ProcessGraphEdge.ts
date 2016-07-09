
class ProcessGraphEdge
{
  private sourcePin : ProcessGraphNodePin;
  private destinationPin : ProcessGraphNodePin;

  constructor(sourcePin : ProcessGraphNodePin, destinationPin: ProcessGraphNodePin)
  {
    this.sourcePin = sourcePin;
    this.destinationPin = destinationPin;
  }

  public getSourceNode()
  {
    return this.sourcePin.getNode();
  }

  public getSourceNodeOutputPortIndex()
  {
    return this.sourcePin.getPort();
  }

  public getDestinationNode()
  {
    return this.destinationPin.getNode();
  }

  public getDestinationNodeInputPortIndex()
  {
    return this.destinationPin.getPort();
  }
}
