
class ProcessGraphEdgeCollection
{
  private edges : Array<ProcessGraphEdge>;

  constructor()
  {
    this.edges = [];
  }

  public connectNodePins(sourcePin : ProcessGraphNodePin, destinationPin : ProcessGraphNodePin)
  {
    this.edges.push(new ProcessGraphEdge(sourcePin, destinationPin));
  }

  public getInputValuesOfNode(node : ProcessGraphNode)
  {
    let inputValues = new Array(node.getInputSize());
    for(let i=0; i<this.edges.length; i++)
    {
      let destinationNode = this.edges[i].getDestinationNode();

      if(node === destinationNode)
      {
        let sourceNode = this.edges[i].getSourceNode();
        let destinationNodeInputPortIndex = this.edges[i].getDestinationNodeInputPortIndex();
        let sourceNodeOutputPortIndex = this.edges[i].getSourceNodeOutputPortIndex();

        inputValues[destinationNodeInputPortIndex] = sourceNode.getResult(sourceNodeOutputPortIndex);
      }
    }

    return inputValues;
  }

  public isNodeReady(node : ProcessGraphNode)
  {
    if(node.isFinished()) return false;

    let values = this.getInputValuesOfNode(node);

    for(let i=0; i<values.length; i++)
    {
      if(values[i] === null || values[i] === undefined)
        return false;
    }

    return true;
  }
}
