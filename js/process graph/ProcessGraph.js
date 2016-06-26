var ProcessGraph = (function () {
    function ProcessGraph() {
        this.nodeList = [];
        this.edgeCollection = new ProcessGraphEdgeCollection();
    }
    ProcessGraph.prototype.reset = function () {
        for (var i = 0; i < this.nodeList.length; i++) {
            var node = this.nodeList[i];
            node.resetResult();
        }
    };
    ProcessGraph.prototype.execute = function () {
        for (var i = 0; i < this.nodeList.length; i++) {
            var node = this.nodeList[i];
            if (this.edgeCollection.isNodeReady(node)) {
                var values = this.edgeCollection.getInputValuesOfNode(node);
                node.execute(values);
                i = 0;
            }
        }
    };
    ProcessGraph.prototype.getNode = function (index) {
        if (index < 0)
            throw new UnableToAccessException();
        if (index >= this.nodeList.length)
            throw new UnableToAccessException();
        return this.nodeList[index];
    };
    ProcessGraph.prototype.addNode = function (node) {
        this.nodeList.push(node);
    };
    ProcessGraph.prototype.connectNodes = function (outputNodeIndex, inputNodeIndex, outputPort, inputPort) {
        this.edgeCollection.connectNodes(this.getNode(outputNodeIndex), this.getNode(inputNodeIndex), outputPort, inputPort);
    };
    return ProcessGraph;
}());
//# sourceMappingURL=ProcessGraph.js.map