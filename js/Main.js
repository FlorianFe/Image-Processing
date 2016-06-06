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
            browser_1.bootstrap(MainComponent_1.MainComponent);
        }
    }
});
/*
document.getElementById("img-upload").addEventListener("change", function()
{
  var reader = new FileReader();

  reader.addEventListener("load", function ()
  {
    console.log("Reader loaded!");
    var image  = new Image();

    /*
    document.getElementById("source-img").innerHTML = "";
    document.getElementById("source-img").appendChild(image);


    image.addEventListener("load", function ()
    {
      let colorMap = ImageToColorMapParser.parse(this);

      // Graph Node Test START
      let graph = new ProcessGraph();
      let node1 = new ImageLoadingNode(image);
      let node2 = new BoxFilterNode();

      graph.addNode(node1);
      graph.addNode(node2);

      graph.connectNodes(0, 1,  0, 0);

      graph.execute();

      document.body.appendChild(graph.getNode(0).display());
      document.body.appendChild(graph.getNode(1).display());

      // Graph Node Test ENDE

      /*
      let structuringElement = new StructuringElement(
      [
        [true, true, true],
        [true, true, true],
        [true, true, true]
      ]);


      let contourX = (new SobelXFilter()).convolute(colorMap);
      contourX = (new Dilation(structuringElement)).convolute(contourX);

      let contourY = (new SobelYFilter()).convolute(colorMap);
      contourY = (new Dilation(structuringElement)).convolute(contourY);

      colorMap = (new Subtraction()).convolute([colorMap, contourX, contourY]);

      let image = ColorMapToImageParser.parse(colorMap, function()
      {
        document.getElementById("result-img").innerHTML = "";
        document.getElementById("result-img").appendChild(image);
      });

    });

    image.src = reader.result;
  });

  reader.readAsDataURL(this.files[0]);
});*/
//# sourceMappingURL=Main.js.map