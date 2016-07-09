
describe("ProcessGraphNode", function ()
{
  describe("constructor()", function()
  {
    it("should create a node with a result list of null-values", function()
    {
      let node = new OneInOneOutNode();

      for(let i=0; i<node.results.length; i++)
      {
        let result = node.results[i];
        expect(result).toBeNull();
      }
    });
  });

  describe("execute(values : Array<any>)", function()
  {
    it("should fill result list, when a 0-in-1-out node is executed", function()
    {
      let node = new ZeroInOneOutNode();

      expect(node.results[0]).toBeNull();

      node.execute();

      expect(typeof node.results[0]).toEqual("number");
    });
  });

  describe("isFinished(values : Array<any>)", function()
  {
    it("should return true, when all result ports are filled", function()
    {
      let node = new OneInOneOutNode();
      node.results[0] = 4;
      expect(node.isFinished()).toBeTruthy();
    });

    it("should return true, when 0-in-1-out node was executed", function()
    {
      let node = new ZeroInOneOutNode();
      node.execute();
      expect(node.isFinished()).toBeTruthy();
    });

    it("should return false, when node wasnt executed", function()
    {
      let zeroInOneOutNode = new ZeroInOneOutNode();
      expect(zeroInOneOutNode.isFinished()).toBeFalsy();

      let oneInOneOutNode = new OneInOneOutNode();
      expect(oneInOneOutNode.isFinished()).toBeFalsy();
    });
  });
});
