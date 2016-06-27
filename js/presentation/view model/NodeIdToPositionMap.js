System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var NodeIdToPositionMap;
    return {
        setters:[],
        execute: function() {
            NodeIdToPositionMap = (function () {
                function NodeIdToPositionMap(processGraph) {
                    this.positions = [];
                    this.processGraph = processGraph;
                    this.update();
                }
                NodeIdToPositionMap.prototype.update = function () {
                    var nodeList = this.processGraph.getNodes();
                    for (var i = 0; i < nodeList.length; i++) {
                        this.addNode(nodeList[i]);
                    }
                };
                NodeIdToPositionMap.prototype.addNode = function (node) {
                    this.positions[node.getId()] = new Vector2d(0, 0);
                };
                NodeIdToPositionMap.prototype.getPosition = function (id) {
                    return this.positions[id];
                };
                NodeIdToPositionMap.prototype.setPosition = function (id, pos) {
                    this.positions[id] = pos;
                };
                return NodeIdToPositionMap;
            }());
            exports_1("NodeIdToPositionMap", NodeIdToPositionMap);
        }
    }
});
//# sourceMappingURL=NodeIdToPositionMap.js.map