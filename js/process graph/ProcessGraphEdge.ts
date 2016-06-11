
class ProcessGraphEdge
{
  private value : any;
  private destination : ProcessGraphNode;

  constructor(destination? : ProcessGraphNode)
  {
    this.value = null;
    this.destination = destination ? destination : null;
  }

  public setDestination(destination : ProcessGraphNode)
  {
    this.destination = destination;

    console.log(destination);

    if(this.value !== null)
    {
      // lower the key, when output was already calculated
      this.destination.decrementKey();
    }
  }

  public setValue(value)
  {
    let original = this.value;
    this.value = value;

    console.log(this.destination);

    if(original === null && this.destination !== null)
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
