var EXAMPLE_IMAGE = new Image();
EXAMPLE_IMAGE.src = "res/img/dices.gif";
EXAMPLE_IMAGE.onload = function()
{
  describe("ProcessGraph", function ()
  {
    describe("constructor()", function()
    {
      it("should be created with an empty node list", function ()
      {
        let graph = new ProcessGraph();

        expect(graph.nodeList.length).toEqual(0);
      });
    });

    describe("+ addNode(ProcessGraphNode node)", function()
    {
      it("should have a node in node list, when node is added", function()
      {
        let graph = new ProcessGraph();
        let node = new AdditionNode();

        graph.addNode(node);

        expect(graph.nodeList.length).toEqual(1);
        expect(graph.nodeList[0] instanceof ProcessGraphNode).toBeTruthy();
      });
    });

    describe("+ getNode(int index)", function()
    {
      it("should return a Node, when a Node was added and the correct Index has been used", function()
      {
        let graph = new ProcessGraph();
        let node = new AdditionNode();

        graph.addNode(node);

        expect(graph.getNode(0) instanceof ProcessGraphNode).toBeTruthy();
      });

      it("should throw an Error, when we try to access an Node, when no Nodes were added", function()
      {
        let graph = new ProcessGraph();

        let test = function()
        {
          graph.getNode(0)
        }

        expect(test).toThrowError();
      });

      it("should throw an Error, when we try to access an Node by wrong index range", function()
      {
        let graph = new ProcessGraph();
        let node = new AdditionNode();

        graph.addNode(node);

        let test1 = function()
        {
          graph.getNode(1)
        }

        let test2 = function()
        {
          graph.getNode(-1)
        }

        let test3 = function()
        {
          graph.getNode(0)
        }

        expect(test1).toThrowError();
        expect(test2).toThrowError();
        expect(test3).not.toThrowError();
      });
    });

    describe("+ execute()", function()
    {
      it("should not do anything when no Nodes were added", function()
      {
        let graph = new ProcessGraph();

        graph.execute();
      });

      it("should not do anything when no a unfilled Nodes was added", function()
      {
        let graph = new ProcessGraph();
        let unfilledNode = new AdditionNode();
        let stateBefore = JSON.stringify(unfilledNode);

        graph.addNode(unfilledNode);
        graph.execute();

        let stateAfter = JSON.stringify(unfilledNode);

        expect(stateBefore).toEqual(stateAfter);
      });

      it("should run, when a no input-port Node was added", function()
      {
        let graph = new ProcessGraph();
        let filledNode = new ImageLoadingNode(EXAMPLE_IMAGE);

        graph.addNode(filledNode);

        expect(filledNode.results.length).toBe(1);
        expect(filledNode.results[0]).toBeNull();

        graph.execute();

        expect(filledNode.results[0]).not.toBeNull();
      });

    });
  });
}
