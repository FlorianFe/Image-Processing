
export class NodeIdToResultMap
{
  private processGraph : ProcessGraph;
  private results : Array<any> = [];

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
    this.results[node.getId()] = null;
  }

  public getResult(id : number)
  {
    return this.results[id];
  }

  public setResult(id : number, result : any)
  {
    this.results[id] = result;
  }
}
