
class ProcessGraphEdge
{
  private value : any;
  private destination : ProcessGraphNode;

  constructor(destination : ProcessGraphNode)
  {
    this.value = null;
    this.destination = destination;
  }

  public setValue(value)
  {
    this.value = value;
    this.destination.decrementHeapKey();
  }

  public getValue()
  {
    return this.value;
  }
}
