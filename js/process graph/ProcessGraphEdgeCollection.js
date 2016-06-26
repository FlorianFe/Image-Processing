var ProcessGraphEdgeCollection = (function () {
    function ProcessGraphEdgeCollection() {
        this.edges = [];
    }
    ProcessGraphEdgeCollection.prototype.connectNodePins = function (sourcePin, destinationPin) {
        this.edges.push(new ProcessGraphEdge(sourcePin, destinationPin));
    };
    ProcessGraphEdgeCollection.prototype.getInputValuesOfNode = function (node) {
        var inputValues = new Array(node.getInputSize());
        for (var i = 0; i < this.edges.length; i++) {
            var destinationNode = this.edges[i].getDestinationNode();
            if (node === destinationNode) {
                var sourceNode = this.edges[i].getSourceNode();
                var destinationNodeInputPortIndex = this.edges[i].getDestinationNodeInputPortIndex();
                var sourceNodeOutputPortIndex = this.edges[i].getSourceNodeOutputPortIndex();
                inputValues[destinationNodeInputPortIndex] = sourceNode.getResult(sourceNodeOutputPortIndex);
            }
        }
        return inputValues;
    };
    ProcessGraphEdgeCollection.prototype.isNodeReady = function (node) {
        if (node.isFinished())
            return false;
        var values = this.getInputValuesOfNode(node);
        for (var i = 0; i < values.length; i++) {
            if (values[i] === null || values[i] === undefined)
                return false;
        }
        return true;
    };
    return ProcessGraphEdgeCollection;
}());
//# sourceMappingURL=ProcessGraphEdgeCollection.js.map