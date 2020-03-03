
export function generateConfig(user) {

  var res = {
    autounselectify: true,
    boxSelectionEnabled: false,
    elements: {
      nodes: [
        {
          "data": {
            "id": user.id,
            "label": user.name,
            "socialList": user.socialList
          }
        }
      ],
      edges: []
    },
    style: [
      {
        selector: "node",
        css: {
          "background-color": "#abcdef",
          "width": "15px",
          "height": "15px",
          "label": "data(label)",
          "font-size": "8px",
        }
      },
      {
        selector: "edge",
        style: {
          "line-color": "#f92411",
          "width": "2px",

        }
      }
    ],
    layout: { name: "cola" }
  };

  //generate nodes
  console.log(user);
  for (var i = 0; i < user.friendsList.length; i++) {
    console.log(user.friendsList[i].name);
    res.elements.nodes.push({ "data": { "id": user.friendsList[i].id, "label": user.friendsList[i].name, "socialList": user.friendsList[i].socialList } });
    res.elements.edges.push({ "data": { "id": "e-" + user.friendsList[i].id, "source": user.friendsList[i].id, "target": user.id } });
  }
  return res;
}
