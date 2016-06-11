
abstract class ProcessGraphNode
{
  private name : string;
  private input : Array<any>;
  private output : Array<any>;
  private finished : boolean;
  private key : number;

  protected displayElement : HTMLElement;


  constructor(name : string, numberInputPorts : number, numberOutputPorts : number)
  {
    this.name = name;
    this.input = this.createArrayWithNullValues(numberInputPorts);
    this.output = this.createArrayWithOutputConnections(numberOutputPorts);
    this.key = numberInputPorts;
    this.finished = false;
    this.displayElement = null;
  }

  private createArrayWithNullValues(length : number)
  {
    let array = new Array(length);

    for(let i=0; i<array.length; i++)
    {
      array[i] = null;
    }

    return array;
  }

  private createArrayWithOutputConnections(length : number)
  {
    let array = new Array(length);

    for(let i=0; i<array.length; i++)
    {
      array[i] = new ProcessGraphEdge();
    }

    return array;
  }

  public reset()
  {
    this.finished = false;
  }

  public getOutput(index : number)
  {
    return this.output[index];
  }

  public getOutputSize()
  {
    return this.output.length;
  }

  public getInput(index : number)
  {
    return this.input[index];
  }

  public getInputSize()
  {
    return this.input.length;
  }

  public execute()
  {
    // use input ports for calculations...
    // make something here...
    // Write result into output ports...

    if(this.isReady())
    {
      console.log('execute Node "' + this.name + '" ...');

      this.calculate();

      this.finished = true;
    }
    else
    {
      console.log("Node not ready...");
    }
  }

  protected calculate()
  {

  }

  protected setValueToOutputPort(portNumber : number, value : any)
  {
    if(this.output[portNumber] !== null)
      this.output[portNumber].setValue(value);
  }

  protected getValueFromInputPort(portNumber : number)
  {
    if(this.input[portNumber] !== null)
    {
      return this.input[portNumber].getValue();
    }

    throw "Fehler: Input Port ist leer!";
  }

  public isReady()
  {
    return (this.key === 0 && !this.finished);
  }

  public decrementKey()
  {
    this.key--;

    console.assert(this.key >= 0, "Key should be 0 or more");

    if(this.key === 0)
    {
      this.execute();
    }
  }

  public setInputConnection(connection, port)
  {
    this.input[port] = connection;
    console.log(this.input);
  }

  public setOutputConnection(connection, port)
  {
    this.output[port] = connection;
  }
}
