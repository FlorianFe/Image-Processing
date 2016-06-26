System.register(['angular2/platform/browser', './presentation/components/MainComponent'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, MainComponent_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (MainComponent_1_1) {
                MainComponent_1 = MainComponent_1_1;
            }],
        execute: function() {
            //enableProdMode();
            browser_1.bootstrap(MainComponent_1.MainComponent);
        }
    }
});
//# sourceMappingURL=Main.js.map