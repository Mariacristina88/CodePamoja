function createMap() {

clouds = [
               {"img":"../img/cloud.png", "width":120, "height":120, "x":220, "y":300, "dataP":0.5},
               {"img":"../img/cloud.png", "width":170, "height":170, "x":1000, "y":20, "dataP":0.4},
               {"img":"../img/cloud.png", "width":100, "height":100, "x":190, "y":180, "dataP":0.3},
               {"img":"../img/cloud.png", "width":170, "height":170, "x":-580, "y":180, "dataP":0.3},
               {"img":"../img/cloud.png", "width":120, "height":120, "x":700, "y":400, "dataP":0.2},
               ];

 var width = 2000,
     height = 800;

var svg = d3.select(".container").append("svg")
    .attr("class", "clouds")
    .attr("cursor", "move")
    .attr("width", width)
    .attr("height", height);

var g = svg.append("g");

var sceneParallax = g
                  .attr("id", "scene")
                  .attr("width", width)
                  .attr("height", height);

var clo = sceneParallax.append("g")
                  .attr("transform", "translate(140,210)")
                  .selectAll("image")
                  .data(clouds)
                  .enter()
                  .append("svg:image")
                  .attr("class", "layer")
                  .attr("data-depth", function (d) { return d.dataP; })
                  .attr("xlink:href", function (d) { return d.img; })
                  .attr("width", function (d) { return d.width; })
                  .attr("height", function (d) { return d.height; })
                  .attr("x", function (d) { return d.x; })
                  .attr("y", function (d) { return d.y; })
                  .attr("cursor","pointer")
                  .on("click", function(){
                    var a = d3.select(this);
                    if (a.attr("class") == "layer cloudanim") {         
                          a.attr("class", "layer");
                    } else {
                          a.attr("class", "layer cloudanim");
                          setTimeout(function(){
                              a.attr("class", "layer");
                          },5000);
                          console.log("a");
                    }
                  });


var scene = document.getElementById('scene');
var parallax = new Parallax(scene);
}

createMap();