export function generateConfig(user) {

    var res = {
        autounselectify: true,
        boxSelectionEnabled: false,
        elements: {
            nodes: [{
                "data": {
                    "id": user.username,
                    "label": user.name,
                    "socialList": user.socialList
                }
            }],
            edges: []
        },
        style: [{
                selector: "node",
                css: {
                    "background-color": "#000000",
                    "width": "15rem",
                    "height": "15rem",
                    "label": "data(label)",
                    "font-size": "8px",
                }
            },
            {
                selector: "edge",
                style: {
                    "line-color": "#48bb78",
                    "width": "1px",

                }
            }
        ],
        layout: {
            name: "cola"
        }
    };

    //generate nodes
    for (var i = 0; i < user.connections.length; i++) {
        res.elements.nodes.push({ "data": { "id": user.connections[i].username, "label": user.connections[i].name, "socialList": user.connections[i].socialList } });
        res.elements.edges.push({ "data": { "id": "e-" + user.connections[i].username, "source": user.connections[i].username, "target": user.username } });
    }
    return res;
}