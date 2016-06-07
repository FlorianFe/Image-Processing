
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
    this.output = this.createArrayWithNullValues(numberOutputPorts);
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

  public getOutput(index : number)
  {
    return this.output[index];
  }

  public getOutputSize()
  {
    return this.output.length;
  }

  public execute()
  {
    // use input ports for calculations...
    // make something here...
    // Write result into output ports...

    console.log('execute Node "' + this.name + '" ...');

    this.calculate();

    this.finished = true;
  }

  protected calculate()
  {
    /*
    this.getValueFromInputPort(0);

    this.setValueToOutputPort(0, 1);
    this.setValueToOutputPort(1, 2);
    */
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

    if(this.key === 0)
    {
      this.execute();
    }
  }

  public setInputConnection(connection, port)
  {
    this.input[port] = connection;
  }

  public setOutputConnection(connection, port)
  {
    this.output[port] = connection;
  }
}
