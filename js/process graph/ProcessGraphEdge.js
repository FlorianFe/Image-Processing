var ProcessGraphEdge = (function () {
    function ProcessGraphEdge(destination) {
        this.value = null;
        this.destination = destination ? destination : null;
    }
    ProcessGraphEdge.prototype.setDestination = function (destination) {
        this.destination = destination;
        console.log(destination);
        if (this.value !== null) {
            // lower the key, when output was already calculated
            this.destination.decrementKey();
        }
    };
    ProcessGraphEdge.prototype.setValue = function (value) {
        var original = this.value;
        this.value = value;
        console.log(this.destination);
        if (original === null && this.destination !== null) {
            // because we only decrement, when Port had no value
            this.destination.decrementKey();
        }
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