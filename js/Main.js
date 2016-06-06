document.getElementById("img-upload").addEventListener("change", function () {
    var reader = new FileReader();
    reader.addEventListener("load", function () {
        console.log("Reader loaded!");
        var image = new Image();
        /*
        document.getElementById("source-img").innerHTML = "";
        document.getElementById("source-img").appendChild(image);
        */
        image.addEventListener("load", function () {
            var colorMap = ImageToColorMapParser.parse(this);
            // Graph Node Test START
            var graph = new ProcessGraph();
            var node1 = new ImageLoadingNode(image);
            var node2 = new BoxFilterNode();
            graph.addNode(node1);
            graph.addNode(node2);
            graph.connectNodes(0, 1, 0, 0);
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
            */
        });
        image.src = reader.result;
    });
    reader.readAsDataURL(this.files[0]);
});
//# sourceMappingURL=Main.js.map