var ProcessGraphEdge = (function () {
    function ProcessGraphEdge(sn, snopi, dn, dnipi) {
        this.sourceNode = sn;
        this.sourceNodeOutputPortIndex = snopi;
        this.destinationNode = dn;
        this.destinationNodeInputPortIndex = dnipi;
    }
    ProcessGraphEdge.prototype.getSourceNode = function () {
        return this.sourceNode;
    };
    ProcessGraphEdge.prototype.getDestinationNode = function () {
        return this.destinationNode;
    };
    ProcessGraphEdge.prototype.getDestinationNodeInputPortIndex = function () {
        return this.destinationNodeInputPortIndex;
    };
    ProcessGraphEdge.prototype.getSourceNodeOutputPortIndex = function () {
        return this.sourceNodeOutputPortIndex;
    };
    return ProcessGraphEdge;
}());
//# sourceMappingURL=ProcessGraphEdge.js.map