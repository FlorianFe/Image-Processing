var ProcessGraphNodePin = (function () {
    function ProcessGraphNodePin(node, port) {
        console.assert(node !== null, "Node Pin cant be created without a Node.");
        console.assert(port >= 0, "Port has to greater or equal to 0.");
        console.assert(port % 1 === 0, "Port has to be a integer.");
        this.node = node;
        this.port = port;
    }
    ProcessGraphNodePin.prototype.getNode = function () {
        return this.node;
    };
    ProcessGraphNodePin.prototype.getPort = function () {
        return this.port;
    };
    return ProcessGraphNodePin;
}());
//# sourceMappingURL=ProcessGraphNodePin.js.map