export function generateLinksData(user) {
    const u = user;
    var res = {
        autounselectify: true,
        boxSelectionEnabled: false,
        elements: {
            nodes: [{
                "data": {
                    "id": u._id,
                    "label": u.username,
                    "linksList": user.socialList
                }
            }],
            edges: []
        },
        style: [{
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
    // console.log(u.socialLinks)

    for (var i = 0; i < u.socialLinks.length; i++) {

        var key = Object.keys(u.socialLinks[i])[0]
        var value = u.socialLinks[i][key]
        console.log(key + " " + value)

        var backgroundColor, label;
        switch (key) {
            case "facebook":
                backgroundColor = "#3b5998";
                break;
            case "twitter":
                backgroundColor = "#00acee";
                break;
            case "instagram":
                backgroundColor = "#3f729b";
                break;
            case "spotify":
                backgroundColor = "#1DB954";
                break;
            case "soundcloud":
                backgroundColor = "#ff7700";
                break;
            case "snapchat":
                backgroundColor = "#fffc00";
            default:
                backgroundColor = "#000000";
        }
        res.elements.nodes.push({ "data": { "id": key + '-' + value, "label": value }, "css": { "background-color": backgroundColor } });
        res.elements.edges.push({ "data": { "id": "e-" + key + '-' + value, "source": key + '-' + value, "target": u._id } });
    }
    return res;
}