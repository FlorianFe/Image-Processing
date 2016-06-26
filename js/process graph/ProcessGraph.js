var ProcessGraph = (function () {
    function ProcessGraph() {
        this.nodeList = [];
        this.edgeCollection = new ProcessGraphEdgeCollection();
    }
    ProcessGraph.prototype.reset = function () {
        for (var i = 0; i < this.nodeList.length; i++) {
            var node = this.nodeList[i];
            node.resetResults();
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
    ProcessGraph.prototype.addNode = function (node) {
        this.nodeList.push(node);
    };
    ProcessGraph.prototype.connectNodePins = function (outputNodePin, inputNodePin) {
        console.assert(this.isNodeInNodeList(outputNodePin.getNode()));
        console.assert(this.isNodeInNodeList(inputNodePin.getNode()));
        this.edgeCollection.connectNodePins(outputNodePin, inputNodePin);
    };
    ProcessGraph.prototype.isNodeInNodeList = function (node) {
        for (var i = 0; i < this.nodeList.length; i++) {
            if (node === this.nodeList[i])
                return true;
        }
        return false;
    };
    ProcessGraph.prototype.getNodes = function () {
        return this.nodeList;
    };
    return ProcessGraph;
}());
//# sourceMappingURL=ProcessGraph.js.map