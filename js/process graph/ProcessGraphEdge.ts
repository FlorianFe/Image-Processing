
class ProcessGraphEdge
{
  private sourceNode : ProcessGraphNode;
  private sourceNodeOutputPortIndex : number;
  private destinationNode : ProcessGraphNode;
  private destinationNodeInputPortIndex : number;

  constructor(sn : ProcessGraphNode, snopi : number, dn : ProcessGraphNode, dnipi : number)
  {
    this.sourceNode = sn;
    this.sourceNodeOutputPortIndex = snopi;
    this.destinationNode = dn;
    this.destinationNodeInputPortIndex = dnipi;
  }

  public getSourceNode()
  {
    return this.sourceNode;
  }

  public getDestinationNode()
  {
    return this.destinationNode;
  }

  public getDestinationNodeInputPortIndex()
  {
    return this.destinationNodeInputPortIndex;
  }

  public getSourceNodeOutputPortIndex()
  {
    return this.sourceNodeOutputPortIndex;
  }
}
