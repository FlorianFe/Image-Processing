
abstract class ProcessGraphNode
{
  private name : string;
  private numberInputPorts : number;
  private numberOutputPorts : number;
  private results : Array<any>;

  constructor(name : string, numberInputPorts : number, numberOutputPorts : number)
  {
    this.name = name;
    this.numberInputPorts = numberInputPorts;
    this.numberOutputPorts = numberOutputPorts;

    this.results = this.createArrayWithNullValues(numberOutputPorts);
  }

  private createArrayWithNullValues(length : number)
  {
    let array = new Array(length);

    for(let i=0; i<length; i++)
    {
      array[i] = null;
    }

    return array;
  }

  protected setResult(index : number, value : any)
  {
    this.results[index] = value;
  }

  public resetResult()
  {
    this.results = new Array(this.numberOutputPorts);
  }

  public getInputSize()
  {
    return this.numberInputPorts;
  }

  public getResult(index : number)
  {
    return this.results;
  }

  public execute(values : Array<any>)
  {
    this.calculate(values);
  }

  protected calculate(values : Array<any>)
  {
    throw Error("'calculate' should be implemented in sub - classes!");
  }
}
