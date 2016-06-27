export class NodeIdToPositionMap
{
  private processGraph : ProcessGraph;
  private positions : Array<Vector2d> = [];

  constructor(processGraph : ProcessGraph)
  {
    this.processGraph = processGraph;
    this.update();
  }

  public update()
  {
    let nodeList = this.processGraph.getNodes();
    for(let i=0; i<nodeList.length; i++)
    {
      this.addNode(nodeList[i]);
    }
  }

  private addNode(node : ProcessGraphNode)
  {
    this.positions[node.getId()] = new Vector2d(0, 0);
  }

  public getPosition(id : number)
  {
    return this.positions[id];
  }

  public setPosition(id : number, pos : Vector2d)
  {
    this.positions[id] = pos;
  }
}
