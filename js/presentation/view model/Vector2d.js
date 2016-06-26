System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Vector2d;
    return {
        setters:[],
        execute: function() {
            Vector2d = (function () {
                function Vector2d(x, y) {
                    this.x = x;
                    this.y = y;
                }
                Vector2d.prototype.getX = function () {
                    return this.x;
                };
                Vector2d.prototype.getY = function () {
                    return this.y;
                };
                return Vector2d;
            }());
            exports_1("Vector2d", Vector2d);
        }
    }
});
//# sourceMappingURL=Vector2d.js.map