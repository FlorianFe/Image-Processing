
describe("ProcessGraph", function ()
{
  let graph;

  beforeEach(function()
  {
    graph = new ProcessGraph();
  });

  describe("constructor()", function()
  {
    it("should be created with an empty node list", function ()
    {
      expect(graph.nodeList.length).toEqual(0);
    });
  });

  describe(".addNode(node : ProcessGraphNode)", function()
  {
    it("should have a node in node list, when node is added", function()
    {
      let node = new ZeroInOneOutNode();

      graph.addNode(node);

      expect(graph.nodeList.length).toEqual(1);
      expect(graph.nodeList[0] instanceof ProcessGraphNode).toBeTruthy();
    });
  });

  describe(".execute()", function()
  {
    it("should not do anything when a Node with more than 0 input ports was added", function()
    {
      let unfilledNode = new OneInOneOutNode();
      let stateBefore = JSON.stringify(unfilledNode);

      graph.addNode(unfilledNode);
      graph.execute();

      let stateAfter = JSON.stringify(unfilledNode);

      expect(stateBefore).toEqual(stateAfter);
    });

    it("should run, when a Node without input ports was added", function()
    {
      let graph = new ProcessGraph();
      let filledNode = new ZeroInOneOutNode();

      graph.addNode(filledNode);

      expect(filledNode.results.length).toBe(1);
      expect(filledNode.results[0]).toBeNull();
      expect(graph.edgeCollection.isNodeReady(filledNode));

      graph.execute();

      console.log(filledNode);
      expect(filledNode.results[0]).not.toBeNull();
    });

    it("should run, when some Nodes in a runnable configuration were added", function()
    {
      let zeroInOneOutNode = new ZeroInOneOutNode();
      let oneInOneOutNode = new OneInOneOutNode();

      graph.addNode(zeroInOneOutNode);
      graph.addNode(oneInOneOutNode);

      graph.connectNodePins(
        new ProcessGraphNodePin(zeroInOneOutNode, 0),
        new ProcessGraphNodePin(oneInOneOutNode, 0)
      );

      expect(oneInOneOutNode.results.length).toBe(1);

      graph.execute();

      expect(typeof zeroInOneOutNode.results[0]).toEqual("number");
      expect(typeof oneInOneOutNode.results[0]).toEqual("number");
    });
  });

  describe(".reset()", function()
  {
    it("should set values of all Nodes to null, after they were executed", function()
    {
      let zeroInOneOutNode = new ZeroInOneOutNode();
      let oneInOneOutNode = new OneInOneOutNode();

      graph.addNode(zeroInOneOutNode);
      graph.addNode(oneInOneOutNode);

      graph.connectNodePins(
        new ProcessGraphNodePin(zeroInOneOutNode, 0),
        new ProcessGraphNodePin(oneInOneOutNode, 0)
      );

      graph.execute();
      graph.reset();

      for(let i=0; i<graph.nodeList.length; i++)
      {
        let results = graph.nodeList[i].results;
        for(let j=0; j<results.length; j++)
        {
          let result = results[j];
          expect(result).toBeNull();
        }
      }
    });
  });
});
