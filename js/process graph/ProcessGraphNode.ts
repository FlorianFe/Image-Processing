
abstract class ProcessGraphNode
{
  private name : string;
  private numberInputPorts : number;
  private numberOutputPorts : number;
  private results : Array<any>;

  private static COUNTER : number = 0;
  private id : number;

  constructor(name : string, numberInputPorts : number, numberOutputPorts : number)
  {
    console.assert(numberInputPorts % 1 === 0, "Number of Input Ports has to be a integer.");
    console.assert(numberOutputPorts % 1 === 0, "Number of Output Ports has to be a integer.");

    this.name = name;
    this.numberInputPorts = numberInputPorts;
    this.numberOutputPorts = numberOutputPorts;

    this.results = this.createArrayWithNullValues(numberOutputPorts);

    this.id = ProcessGraphNode.COUNTER;
    ProcessGraphNode.COUNTER++;
  }

  private createArrayWithNullValues(length : number)
  {
    console.assert(length % 1 === 0, "Length of Array has to be a integer.");

    let array = new Array(length);

    for(let i=0; i<length; i++)
    {
      array[i] = null;
    }

    return array;
  }

  public resetResults()
  {
    this.results = this.createArrayWithNullValues(this.numberOutputPorts);
  }

  public getInputSize()
  {
    return this.numberInputPorts;
  }

  public getResult(index : number)
  {
    return this.results[index];
  }

  public execute(values : Array<any>)
  {
    this.results = this.calculate(values);
  }

  public isFinished() : boolean
  {
    for(let i=0; i<this.results.length; i++)
    {
      if(this.results[i] === null || this.results[i] === undefined)
        return false;
    }

    return true;
  }

  protected calculate(values : Array<any>) : Array<any>
  {
    throw Error("'calculate' should be implemented in sub - classes!");
  }

  public getId()
  {
    return this.id;
  }
}
