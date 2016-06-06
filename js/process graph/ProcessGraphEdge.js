var ProcessGraphEdge = (function () {
    function ProcessGraphEdge(destination) {
        this.value = null;
        this.destination = destination;
    }
    ProcessGraphEdge.prototype.setValue = function (value) {
        this.value = value;
        this.destination.decrementKey();
    };
    ProcessGraphEdge.prototype.getValue = function () {
        return this.value;
    };
    ProcessGraphEdge.prototype.getDestination = function () {
        return this.destination;
    };
    return ProcessGraphEdge;
}());
//# sourceMappingURL=ProcessGraphEdge.js.map