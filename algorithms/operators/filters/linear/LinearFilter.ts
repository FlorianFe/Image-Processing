
class LinearFilter implements Filter
{
  private filterMask : FilterMask;

  constructor(filterMask)
  {
    this.filterMask = filterMask;
  }

  public convolute(sourceColorMap : ColorMap) : ColorMap
  {
    let sourceWidth = sourceColorMap.getWidth();
    let sourceHeight = sourceColorMap.getHeight();
    let resultColorMap = new ColorMap(sourceWidth, sourceHeight);

    for(let x=0; x<sourceColorMap.getWidth(); x++)
    {
      for(let y=0; y<sourceColorMap.getHeight(); y++)
      {
        let sourcePixel = sourceColorMap.getPixel(x, y);
        let resultPixel = this.convoluteForPixel(x, y, sourceColorMap);

        resultColorMap.setPixel(x, y, resultPixel);
      }
    }

    return resultColorMap;
  }

  private convoluteForPixel(x, y, colorMap) : Color
  {
    let startIndexX = x + ((this.filterMask.getHeight() - 1) / 2);
    let startIndexY = y + ((this.filterMask.getWidth() - 1) / 2);

    let result = new RGBColor(0, 0, 0);

    for(let x=0; x<this.filterMask.getHeight(); x++)
    {
      for(let y=0; y<this.filterMask.getWidth(); y++)
      {
        let sourcePixel = colorMap.getPixel(startIndexX - x, startIndexY - y);
        // Maske ist andersrum definiert, deshalb x und y hier vertauscht
        result = result.add(sourcePixel.multiply(this.filterMask.getValueOnPos(y, x)));
      }
    }

    return result;
  }
}
