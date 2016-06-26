
class ProcessGraph
{
  private nodeList : Array<ProcessGraphNode>;
  private edgeCollection : ProcessGraphEdgeCollection;

  constructor()
  {
    this.nodeList = [];
    this.edgeCollection = new ProcessGraphEdgeCollection();
  }

  public reset()
  {
    for(let i=0; i<this.nodeList.length; i++)
    {
      let node = this.nodeList[i];
      node.resetResult();
    }
  }

  public execute()
  {
    for(let i=0; i<this.nodeList.length; i++)
    {
      let node = this.nodeList[i];

      if(this.edgeCollection.isNodeReady(node))
      {
        let values = this.edgeCollection.getInputValuesOfNode(node);
        node.execute(values);
        i = 0;
      }
    }
  }

  private getNode(index : number)
  {
    if(index < 0) throw new UnableToAccessException();
    if(index >= this.nodeList.length) throw new UnableToAccessException();

    return this.nodeList[index];
  }

  public addNode(node : ProcessGraphNode)
  {
    this.nodeList.push(node);
  }

  public connectNodes(outputNodeIndex : number, inputNodeIndex : number, outputPort : number, inputPort : number)
  {
    this.edgeCollection.connectNodes(
      this.getNode(outputNodeIndex),
      this.getNode(inputNodeIndex),
      outputPort, inputPort
    );
  }
}
