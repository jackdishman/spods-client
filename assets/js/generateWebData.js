export function generateConfig(user) {
    var res = {
        autounselectify: true,
        boxSelectionEnabled: false,
        elements: {
            nodes: [{
                "data": {
                    "type": "targetUser",
                    "id": user.username,
                    "label": user.name,
                    // "socialList": user.socialList
                }
            }],
            edges: []
        },
        style: [
            {
                selector: 'node[type="mutual"]',
                css: {
                    "background-color": "#48bb78",
                    "width": "15rem",
                    "height": "15rem",
                    "label": "data(label)",
                    "font-size": "10px"
                }
            },
            {
                selector: "node[type='following']",
                css: {
                    "background-color": "#ecc94b",
                    "width": "15rem",
                    "height": "15rem",
                    "label": "data(label)",
                    "font-size": "8px",
                }
            },
            {
                selector: 'node[type="followers"]',
                css: {
                    "background-color": "#f56565",
                    "width": "5rem",
                    "height": "5rem",
                    "label": "data(label)",
                    "font-size": "5px",
                }
            },
            {
                selector: 'node[type="targetUser"]',
                css: {
                    "background-color": "#000000",
                    "width": "20rem",
                    "height": "20rem",
                    "label": "data(label)",
                    "font-size": "12px"
                }
            },
            {
                selector: 'edge[type="mutual"]',
                css: {
                    "line-color": "#48bb78",
                    "width": "2px"
                }
            },
            {
                selector: "edge[type='following']",
                style: {
                    "line-color": "#ecc94b",
                    "width": "1px",
                }
            },
            {
                selector: "edge[type='followers']",
                style: {
                    "line-color": "#f56565",
                    "width": "1px"
                }
            }
        ],
        layout: {
            name: "cola"
        }
    };

    //generate nodes
    // Mutual
    for (const x in user.following) {
        for (const y in user.followers) {
            if (user.following[x].username === user.followers[y].username) {
                res.elements.nodes.push({ "data": { "type": "mutual", "id": user.following[x], "label": user.following[x], "socialList": user.following[x] } });
                res.elements.edges.push({ "data": { "type": "mutual", "id": "e-" + user.following[x], "source": user.following[x], "target": user.username } });
            }
        }
    }
    for (var i = 0; i < user.following.length; i++) {
        res.elements.nodes.push({ "data": { "type": "following", "id": user.following[i], "label": user.following[i], "socialList": user.following[i] } });
        res.elements.edges.push({ "data": { "type": "following", "id": "e-" + user.following[i], "source": user.following[i], "target": user.username } });
    }
    for (var j = 0; j < user.followers.length; j++) {
        res.elements.nodes.push({ "data": { "type": "followers", "id": user.followers[j], "label": user.followers[j] } });
        res.elements.edges.push({ "data": { "type": "followers", "id": "e-" + user.followers[j], "source": user.followers[j], "target": user.username } });
    }
    return res;
}