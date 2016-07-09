var ProcessGraphEdge = (function () {
    function ProcessGraphEdge(sourcePin, destinationPin) {
        this.sourcePin = sourcePin;
        this.destinationPin = destinationPin;
    }
    ProcessGraphEdge.prototype.getSourceNode = function () {
        return this.sourcePin.getNode();
    };
    ProcessGraphEdge.prototype.getSourceNodeOutputPortIndex = function () {
        return this.sourcePin.getPort();
    };
    ProcessGraphEdge.prototype.getDestinationNode = function () {
        return this.destinationPin.getNode();
    };
    ProcessGraphEdge.prototype.getDestinationNodeInputPortIndex = function () {
        return this.destinationPin.getPort();
    };
    return ProcessGraphEdge;
}());
//# sourceMappingURL=ProcessGraphEdge.js.map