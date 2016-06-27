
class LaplacianOfGaussianNode extends ProcessGraphNode
{
  constructor()
  {
    super("Laplace of Gaussian Filter", 1, 1);
  }

  protected calculate(values : Array<any>) : Array<any>
  {
    let sourceColorMap = values[0];
    let resultColorMap = (new LaplacianOfGaussianFilter()).convolute(sourceColorMap);

    return [resultColorMap];
  }
}
