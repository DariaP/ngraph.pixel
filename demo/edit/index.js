var generate = require('ngraph.generators');
var createLegend = require('edgelegend');

var graph = generate.grid(10, 10);
var renderGraph = require('../../');

var renderer = renderGraph(graph, {
  settings: true // request to render settings user interface
});

// we do not need to show these options in the current demo:
renderer.settings().remove(['View Settings', 'Layout Settings']);


createLegend(renderer, 'Groups', [{
  name: 'First',
  color: 0xff0000,
  filter: function (link) { return link.fromId <= 33; }
}, {
  name: 'Second',
  color: 0x00ff00,
  filter: function(link) {
    return 33 < link.fromId && link.fromId <= 66;
  }
},{
  name: 'Third',
  color: 0x0000ff,
  filter: function(link) {
    return 66 < link.fromId;
  }
}
]);
