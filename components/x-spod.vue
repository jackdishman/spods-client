<template>
  <v-container>
      <!-- Logged In -->
      <div v-if="userInfo">
        <font-awesome-icon
          :icon="['fab', ]"
          size="3x"
          style= "color: getBrandColor(platform)"
          @click="toggleInfo"
        />
        <div v-bind:class="{ hidden: showInfo }" class="{{platform}} expand">
          <h2>{{ this.userInfo.displayName }}</h2>
          <h2 v-if="this.userInfo">{{ this.userInfo.displayName }}</h2>
          <h3>{{ this.userInfo.followers }} Followers</h3>
          <h3>
            <a v-bind:href="userInfo.profileUrl"
              >Visit {{ userInfo.provider }}</a
            >
          </h3>
        </div>
      </div>

      <!-- Not Logged In -->
      <div v-else>
        <nuxt-link to="/auth/spotify">
          <font-awesome-icon
            id="spotifyIcon"
            :icon="['fab', 'spotify']"
            size="3x"
            style="color:gray"
            @click="spotifyLogin"
          />
        </nuxt-link>
      </div>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import {
  faSpotify,
  faFacebook,
  faInstagram,
  faLinkedin,
  faSnapchat,
  faTwitter,
  faSoundcloud
} from "@fortawesome/free-brands-svg-icons";
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText
} from "@fortawesome/vue-fontawesome";

library.add(
  faSpotify,
  faFacebook,
  faInstagram,
  faLinkedin,
  faSnapchat,
  faTwitter,
  faSoundcloud
);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("font-awesome-layers", FontAwesomeLayers);
Vue.component("font-awesome-layers-text", FontAwesomeLayersText);

export default {
  name: "Spotify",
  data: function() {
    return {
      showInfo: true,
      userInfo: null,
      isLoggedIn: true
    };
  },
  asyncData(context) {
    return this.$axios.get('/auth/spotify').then((res) => {
      userInfo = res.data
    })
  },
  props: {
    platform: String,
    userData: {
      type: Object,
      default() {
        return null;
      }
    }
  },
  methods: {
    spotifyLogin: function() {},
    toggleInfo: function() {
      this.showInfo = !this.showInfo;
    },
    getBrandColor(platform){
      switch(platform){
        case 'facebook':
          return "blue"
        case 'twitter':
          return 'lightblue'
        default:
          return 'black'
      }
    }
  },
  mounted() {
    this.$axios.get("https://api.spotify.com/v1/users/"+this.user.socialLinks.spotify.id)
    .then((response) => {
      console.log(response);
      userInfo = response;
    }); 
  },
  computed: mapState(["user"])
};
</script>

<style>
.hidden {
  display: none;
}
.spotify {
  background-color: #1db954;
}

#spotifyIcon:hover {
  background-color: #1db954;
}
</style>
