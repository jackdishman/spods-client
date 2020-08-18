import axios from '@nuxtjs/axios';

export const state = () => ({
    "token": null,
    'user': null,
    'isMobileMenuOpen': false,
    'currentTab': '',
    'pageHistory': [],
    "platforms": [{
        name: "email",
        url: "mailto:",
        color: "#000000",
        handle: "Email:",
        svg: true
    },
    {
        name: "facebook",
        url: "https://facebook.com/",
        color: "#3b5998",
        handle: "facebook.com/"
    },
    {
        name: "twitter",
        url: "https://twitter.com/",
        color: "#00acee",
        handle: "(Case Sensitive) @",
        verified: true
    },
    {
        name: "linkedin",
        // url: "https://linkedin.com/in/",
        // handle: "linkedin.com/in/",
        url: false,
        handle: "Enter Display Name:",
        color: "#0072b1",
        verified: true
    },
    {
        name: "spotify",
        url: "https://open.spotify.com/user/",
        color: "#1db954",
        handle: "open.spotify.com/user/",
        verified: true
    },
    {
        name: "snapchat",
        url: "https://www.snapchat.com/add/",
        color: "#fffc00",
        handle: "snapchat.com/add/",
    },
    {
        name: "instagram",
        url: "https://instagram.com/",
        color: "#3f729b",
        handle: "instagram.com/"
    },
    {
        name: "soundcloud",
        url: "https://soundcloud.com/",
        color: "#ff7700",
        handle: "soundcloud.com/"
    },
    {
        name: "tiktok",
        url: false,
        color: "#69C9D0",
        hanndle: "@",
    },
    {
        name: "venmo",
        url: "https://venmo.com/",
        color: "#3d95ce",
        handle: "@",
        svg: true
    },
    {
        name: "github",
        url: "https://github.com/",
        color: "#6e5494",
        handle: "github.com/"
    },
    {
        name: "quora",
        url: "https://quora.com/profile/",
        color: "#AA2200",
        handle: "quora.com/profile/"
    },
    {
        name: "yelp",
        url: false,
        color: "#c41200",
        handle: "User ID:",
    },
    {
        name: "skype",
        url: false,
        color: "#00aff0",
        handle: "User ID:",
        svg: true
    },
    {
        name: "pinterest",
        url: false,
        color: "#c8232c",
        handle: "@",
    },
    {
        name: "reddit",
        url: "https://reddit.com/user/",
        color: "#FF5700",
        handle: "reddit.com/user/"
    },
    {
        name: "youtube",
        url: "https://youtube.com/user/",
        color: "#c4302b",
        handle: "YouTube.com/user/"
    },
    {
        name: "vsco",
        url: "https://vsco.co/",
        color: "#000000",
        handle: "vsco.co/",
        svg: true
    },
    {
        name: "steam",
        url: "https://steamcommunity.com/id/",
        color: "#171a21",
        handle: "steamcommunity.com/id/"
    },
    {
        name: "twitch",
        url: "https://twitch.tv/",
        color: "#6441a5",
        handle: "twitch.tv/"
    },
    {
        name: "applemusic",
        url: false
    },
    {
        name: "vimeo",
        url: "https://vimeo.com/",
        color: "#86c9ef",
        handle: "vimeo.com/"
    },
    {
        name: "onlyfans",
        url: "https://onlyfans.com/",
        handle: ''
    },
    {
        name: "xbox",
        url: false,
        handle: "Gamertag: "
    },
    {
        url: false,
        name: "playstation",
        handle: "Gamertag: "
    },
    {
        url: "https://poshmark.com/closet/",
        name: "poshmark",
        handle: ''
    }
    ],
    
});

// export const actions = {
//     async loadUser({ commit }) {
//         const user = await axios.get('/api/auth/user')
//         commit("SETUSER", user)
//     }
// }


export const mutations = {
    CHANGETAB(state, tab) {
        state.currentTab = tab
    },
    TOGGLESEARCHBAR(state) {
        state.isSearchOpen = !state.isSearchOpen
    },
    TOGGLEMOBILEMENU(state) {
        state.isMobileMenuOpen = !state.isMobileMenuOpen
    },
    SETTOKEN(state, newToken) {
        state.token = newToken;
    },
    SETUSER(state, list) {
        state.user = list
    }
}