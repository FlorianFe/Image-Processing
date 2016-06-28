var ProcessGraphNodeKathegory = (function () {
    function ProcessGraphNodeKathegory(name) {
        this.nodeClasses = [];
        this.name = name;
    }
    ProcessGraphNodeKathegory.prototype.addNodeClass = function (nodeClass) {
        this.nodeClasses.push(nodeClass);
    };
    ProcessGraphNodeKathegory.prototype.getNodeClass = function (index) {
        return this.nodeClasses[index];
    };
    return ProcessGraphNodeKathegory;
}());
//# sourceMappingURL=ProcessGraphNodeKathegory.js.map