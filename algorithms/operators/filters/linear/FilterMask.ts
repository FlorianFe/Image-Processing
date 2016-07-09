
class FilterMask
{
  private matrix : Array<Array<number>>;

  constructor(matrix : Array<Array<number>>)
  {
    this.matrix = matrix;
  }

  public getWidth() : number
  {
    return this.matrix[0].length;
  }

  public getHeight() : number
  {
    return this.matrix.length;
  }

  public getValueOnPos(x, y) : number
  {
    return this.matrix[x][y];
  }

  public normalize()
  {
    let total = 0;

    for(let x=0; x<this.matrix.length; x++)
    {
      for(let y=0; y<this.matrix[x].length; y++)
      {
        total += Math.abs(this.matrix[x][y]);
      }
    }

    for(let x=0; x<this.matrix.length; x++)
    {
      for(let y=0; y<this.matrix[x].length; y++)
      {
        this.matrix[x][y] = this.matrix[x][y]/total;
      }
    }
  }
}
