//import {ProcessGraphNode} from './Process
var ProcessGraph = (function () {
    function ProcessGraph() {
        this.nodeList = [];
    }
    ProcessGraph.prototype.execute = function () {
        for (var i = 0; i < this.nodeList.length; i++) {
            var node = this.nodeList[i];
            if (node.isReady()) {
                node.execute();
            }
        }
    };
    ProcessGraph.prototype.getNodes = function () {
        return this.nodeList;
    };
    ProcessGraph.prototype.addNode = function (node) {
        this.nodeList.push(node);
    };
    ProcessGraph.prototype.getNode = function (index) {
        return this.nodeList[index];
    };
    ProcessGraph.prototype.connectNodes = function (outputNodeIndex, inputNodeIndex, outputPort, inputPort) {
        var outputNode = this.getNode(outputNodeIndex);
        var inputNode = this.getNode(inputNodeIndex);
        var connection = new ProcessGraphEdge(inputNode);
        outputNode.setOutputConnection(connection, outputPort);
        inputNode.setInputConnection(connection, inputPort);
    };
    return ProcessGraph;
}());
//# sourceMappingURL=ProcessGraph.js.map