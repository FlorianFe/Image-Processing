
class CosinusTransformation
{
  private n : number;
  private baseVectors : Array<Vector>

  constructor(n : number)
  {
    this.n = n;
    this.baseVectors = this.calcBaseVectors(n);
  }

  private calcBaseVectors(n : number)
  {
    let vectors = new Array(n);
    for(let i=0; i<n; i++)
    {
      let vector = vectors[i];
      vector = new Vector(n);
      for(let j=0; j<n; j++)
      {
        let alpha = (i==0) ? Math.sqrt(1/n) : Math.sqrt(2/n);
        vector.setValue(j, alpha * Math.cos(((j + 0.5)*i*Math.PI)/n));
      }
    }

    return vectors;
  }

  public convolute(sourceColorMap : ColorMap) : ColorMap
  {
    let result = new ColorMap(sourceColorMap.getHeight(), sourceColorMap.getHeight());

    for(let x=0; x<sourceColorMap.getWidth(); x++)
    {
      for(let y=0; y<sourceColorMap.getHeight(); y++)
      {
        let sourcePixelR = (<RGBColor>(sourceColorMap.getPixel(x, y))).r;
        // TODO
      }
    }

    return result;
  }
}
