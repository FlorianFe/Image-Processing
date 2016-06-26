
class ProcessGraphNodePin
{
  private node : ProcessGraphNode;
  private port : number;

  constructor(node : ProcessGraphNode, port : number)
  {
    console.assert(node !== null, "Node Pin cant be created without a Node.");
    console.assert(port >= 0, "Port has to greater or equal to 0.");
    console.assert(port % 1 === 0, "Port has to be a integer.");

    this.node = node;
    this.port = port;
  }

  public getNode()
  {
    return this.node;
  }

  public getPort()
  {
    return this.port;
  }
}
