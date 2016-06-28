
class ProcessGraphNodeKathegory
{
  private name : string;
  private nodeClasses : Array<any> = [];

  constructor(name : string)
  {
    this.name = name;
  }

  addNodeClass(nodeClass : any)
  {
    this.nodeClasses.push(nodeClass);
  }

  getNodeClass(index : number)
  {
    return this.nodeClasses[index];
  }
}
