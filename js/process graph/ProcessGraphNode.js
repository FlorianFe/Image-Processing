var ProcessGraphNode = (function () {
    function ProcessGraphNode(name, numberInputPorts, numberOutputPorts) {
        this.name = name;
        this.input = this.createArrayWithNullValues(numberInputPorts);
        this.output = this.createArrayWithNullValues(numberOutputPorts);
        this.key = numberInputPorts;
        this.finished = false;
        this.displayElement = null;
    }
    ProcessGraphNode.prototype.createArrayWithNullValues = function (length) {
        var array = new Array(length);
        for (var i = 0; i < array.length; i++) {
            array[i] = null;
        }
        return array;
    };
    ProcessGraphNode.prototype.reset = function () {
        this.finished = false;
        //this.key = this.input.length;
    };
    ProcessGraphNode.prototype.getOutput = function (index) {
        return this.output[index];
    };
    ProcessGraphNode.prototype.getOutputSize = function () {
        return this.output.length;
    };
    ProcessGraphNode.prototype.getInput = function (index) {
        return this.input[index];
    };
    ProcessGraphNode.prototype.getInputSize = function () {
        return this.input.length;
    };
    ProcessGraphNode.prototype.execute = function () {
        // use input ports for calculations...
        // make something here...
        // Write result into output ports...
        console.log('execute Node "' + this.name + '" ...');
        this.calculate();
        this.finished = true;
    };
    ProcessGraphNode.prototype.calculate = function () {
        /*
        this.getValueFromInputPort(0);
    
        this.setValueToOutputPort(0, 1);
        this.setValueToOutputPort(1, 2);
        */
    };
    ProcessGraphNode.prototype.setValueToOutputPort = function (portNumber, value) {
        if (this.output[portNumber] !== null)
            this.output[portNumber].setValue(value);
    };
    ProcessGraphNode.prototype.getValueFromInputPort = function (portNumber) {
        if (this.input[portNumber] !== null) {
            return this.input[portNumber].getValue();
        }
        throw "Fehler: Input Port ist leer!";
    };
    ProcessGraphNode.prototype.isReady = function () {
        return (this.key === 0 && !this.finished);
    };
    ProcessGraphNode.prototype.decrementKey = function () {
        this.key--;
        console.assert(this.key >= 0);
        if (this.key === 0) {
            this.execute();
        }
    };
    ProcessGraphNode.prototype.setInputConnection = function (connection, port) {
        this.input[port] = connection;
    };
    ProcessGraphNode.prototype.setOutputConnection = function (connection, port) {
        this.output[port] = connection;
    };
    return ProcessGraphNode;
}());
//# sourceMappingURL=ProcessGraphNode.js.map