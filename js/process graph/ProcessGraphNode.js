var ProcessGraphNode = (function () {
    function ProcessGraphNode(name, numberInputPorts, numberOutputPorts) {
        console.assert(numberInputPorts % 1 === 0, "Number of Input Ports has to be a integer.");
        console.assert(numberOutputPorts % 1 === 0, "Number of Output Ports has to be a integer.");
        this.name = name;
        this.numberInputPorts = numberInputPorts;
        this.numberOutputPorts = numberOutputPorts;
        this.results = this.createArrayWithNullValues(numberOutputPorts);
        this.id = ProcessGraphNode.COUNTER;
        ProcessGraphNode.COUNTER++;
    }
    ProcessGraphNode.prototype.createArrayWithNullValues = function (length) {
        console.assert(length % 1 === 0, "Length of Array has to be a integer.");
        var array = new Array(length);
        for (var i = 0; i < length; i++) {
            array[i] = null;
        }
        return array;
    };
    ProcessGraphNode.prototype.resetResults = function () {
        this.results = this.createArrayWithNullValues(this.numberOutputPorts);
    };
    ProcessGraphNode.prototype.getInputSize = function () {
        return this.numberInputPorts;
    };
    ProcessGraphNode.prototype.getResult = function (index) {
        return this.results[index];
    };
    ProcessGraphNode.prototype.execute = function (values) {
        this.results = this.calculate(values);
    };
    ProcessGraphNode.prototype.isFinished = function () {
        for (var i = 0; i < this.results.length; i++) {
            if (this.results[i] === null || this.results[i] === undefined)
                return false;
        }
        return true;
    };
    ProcessGraphNode.prototype.calculate = function (values) {
        throw Error("'calculate' should be implemented in sub - classes!");
    };
    ProcessGraphNode.prototype.getId = function () {
        return this.id;
    };
    ProcessGraphNode.prototype.getName = function () {
        return this.name;
    };
    ProcessGraphNode.prototype.getOutputSize = function () {
        return this.numberOutputPorts;
    };
    ProcessGraphNode.COUNTER = 0;
    return ProcessGraphNode;
}());
//# sourceMappingURL=ProcessGraphNode.js.map