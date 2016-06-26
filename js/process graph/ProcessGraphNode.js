var ProcessGraphNode = (function () {
    function ProcessGraphNode(name, numberInputPorts, numberOutputPorts) {
        this.name = name;
        this.numberInputPorts = numberInputPorts;
        this.numberOutputPorts = numberOutputPorts;
        this.results = this.createArrayWithNullValues(numberOutputPorts);
    }
    ProcessGraphNode.prototype.createArrayWithNullValues = function (length) {
        var array = new Array(length);
        for (var i = 0; i < length; i++) {
            array[i] = null;
        }
        return array;
    };
    ProcessGraphNode.prototype.setResult = function (index, value) {
        this.results[index] = value;
    };
    ProcessGraphNode.prototype.resetResult = function () {
        this.results = new Array(this.numberOutputPorts);
    };
    ProcessGraphNode.prototype.getInputSize = function () {
        return this.numberInputPorts;
    };
    ProcessGraphNode.prototype.getResult = function (index) {
        return this.results;
    };
    ProcessGraphNode.prototype.execute = function (values) {
        this.calculate(values);
    };
    ProcessGraphNode.prototype.calculate = function (values) {
        throw Error("'calculate' should be implemented in sub - classes!");
    };
    return ProcessGraphNode;
}());
//# sourceMappingURL=ProcessGraphNode.js.map