module.exports = createNodeSettings;

function createNodeSettings(gui, renderer) {
  var nodeSettings = gui.addFolder('Current Node');
  var currentNode = {
    id: '',
    color: 0,
    size: 0,
    isPinned: false
  };

  nodeSettings.add(currentNode, 'id');
  nodeSettings.addColor(currentNode, 'color').onChange(setColor);
  nodeSettings.add(currentNode, 'size', 0, 200).onChange(setSize);
  nodeSettings.add(currentNode, 'isPinned').onChange(setPinned);

  return currentNode;

  function setColor() {
    if (currentNode.id) {
      renderer.nodeColor(currentNode.id, currentNode.color);
      renderer.focus();
    }
  }

  function setSize() {
    if (currentNode.id) {
      renderer.nodeSize(currentNode.id, currentNode.size);
      renderer.focus();
    }
  }

  function setPinned() {
    if (!currentNode.id) return;

    var graph = renderer.graph();
    var layout = renderer.layout();
    var node = graph.getNode(currentNode.id);
    layout.pinNode(node, currentNode.isPinned);
    renderer.focus();
  }
}
