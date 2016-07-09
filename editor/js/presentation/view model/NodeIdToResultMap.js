System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var NodeIdToResultMap;
    return {
        setters:[],
        execute: function() {
            NodeIdToResultMap = (function () {
                function NodeIdToResultMap(processGraph) {
                    this.results = [];
                    this.processGraph = processGraph;
                    this.update();
                }
                NodeIdToResultMap.prototype.update = function () {
                    var nodeList = this.processGraph.getNodes();
                    for (var i = 0; i < nodeList.length; i++) {
                        this.addNode(nodeList[i]);
                    }
                };
                NodeIdToResultMap.prototype.addNode = function (node) {
                    this.results[node.getId()] = null;
                };
                NodeIdToResultMap.prototype.getResult = function (id) {
                    return this.results[id];
                };
                NodeIdToResultMap.prototype.setResult = function (id, result) {
                    this.results[id] = result;
                };
                return NodeIdToResultMap;
            }());
            exports_1("NodeIdToResultMap", NodeIdToResultMap);
        }
    }
});
//# sourceMappingURL=NodeIdToResultMap.js.map