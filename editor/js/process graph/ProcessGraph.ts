
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
      node.resetResults();
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

  public addNode(node : ProcessGraphNode)
  {
    this.nodeList.push(node);
  }

  public connectNodePins(outputNodePin : ProcessGraphNodePin, inputNodePin : ProcessGraphNodePin)
  {
    console.assert(this.isNodeInNodeList(outputNodePin.getNode()));
    console.assert(this.isNodeInNodeList(inputNodePin.getNode()));

    this.edgeCollection.connectNodePins(outputNodePin, inputNodePin);
  }

  private isNodeInNodeList(node : ProcessGraphNode)
  {
    for(let i=0; i<this.nodeList.length; i++)
    {
      if(node === this.nodeList[i])
        return true;
    }

    return false;
  }

  public getNodes()
  {
    return this.nodeList;
  }

  public getNode(index : number)
  {
    return this.nodeList[index];
  }
}
