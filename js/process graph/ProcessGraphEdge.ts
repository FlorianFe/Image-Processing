
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
    let original = this.value;
    this.value = value;

    if(original === null)
    {
      // because we only decrement, when Port had no value
      this.destination.decrementKey();
    }
  }

  public getValue()
  {
    return this.value;
  }

  public getDestination()
  {
    return this.destination;
  }
}
