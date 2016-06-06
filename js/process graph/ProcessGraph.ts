
class ProcessGraph
{
  private nodeList : Array<ProcessGraphNode>;

  constructor()
  {
    this.nodeList = [];
  }

  public execute()
  {
    for(let i=0; i<this.nodeList.length; i++)
    {
      let node = this.nodeList[i];
      if(node.isReady())
      {
        node.execute();
      }
    }
  }

  public addNode(node : ProcessGraphNode)
  {
    this.nodeList.push(node);
  }

  public getNode(index : number)
  {
    return this.nodeList[index];
  }

  public connectNodes(outputNodeIndex : number, inputNodeIndex : number, outputPort : number, inputPort : number)
  {
    let outputNode = this.getNode(outputNodeIndex);
    let inputNode = this.getNode(inputNodeIndex);

    let connection = new ProcessGraphEdge(inputNode);
    outputNode.setOutputConnection(connection, outputPort);
    inputNode.setInputConnection(connection, inputPort);
  }
}
