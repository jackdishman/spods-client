<template>
  <div class="m-0 p-0 h-screen flex flex-col flex-grow">
    <!-- SPODS BRAND HEADER -->
    <div class="z-50 w-full border-b border-green-500 fixed top-0 bg-white">
      <div v-if="$auth.loggedIn" class="flex flex-row justify-between">
        <nuxt-link to="/" class="spods text-center text-4xl hvr-forward pl-3">
          spods
        </nuxt-link>
        <div>
          <nuxt-link
            to="/community"
            class="spods text-lg pr-2 hvr-hang text-green-500"
          >
            Community
          </nuxt-link>
          <nuxt-link
            to="/web"
            class="spods text-lg pr-2 hvr-hang text-green-500"
          >
            Web
          </nuxt-link>
          <nuxt-link
            to="/settings"
            class="spods text-lg pr-2 hvr-hang text-green-500"
          >
            Settings
          </nuxt-link>
          <button
            @click="$auth.logout()"
            class="hvr-grow bg-red-600 text-white font-bold border border-black rounded p-2 m-2 active:bg-red-600 hover:bg-red-400 hover:text-black focus:outline-none"
          >
            Log Out
          </button>
        </div>
      </div>
      <div v-else>
        <div></div>
        <nuxt-link to="/" class="spods text-center">
          <h2 class="text-4xl">spods</h2>
        </nuxt-link>
        <div></div>
      </div>
    </div>

    <!-- Content -->
    <nuxt class="mt-12 pt-2 flex-grow" />
  </div>
</template>

<script>
import Logo from "@/components/Logo";
import Vue from "vue";
import SearchBar from "@/components/Search";
import { mapState } from "vuex";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faTimes, faUndo } from "@fortawesome/free-solid-svg-icons";
import {
  faSpotify,
  faFacebook,
  faInstagram,
  faLinkedin,
  faSnapchat,
  faTwitter,
  faSoundcloud,
  faGithub,
  faQuora,
  faReddit,
  faSteam,
  faTwitch,
  faVimeo,
  faXbox,
  faPlaystation
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
  faSoundcloud,
  faSearch,
  faTimes,
  faUndo,
  faGithub,
  faQuora,
  faReddit,
  faSteam,
  faTwitch,
  faVimeo,
  faXbox,
  faPlaystation
);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("font-awesome-layers", FontAwesomeLayers);
Vue.component("font-awesome-layers-text", FontAwesomeLayersText);

export default {
  data() {
    return {};
  },
  methods: {
    toggleMobileNav() {
      this.$store.commit("TOGGLEMOBILEMENU");
    }
  },
  computed: mapState(["isMobileMenuOpen"]),
  components: {
    Logo,
    SearchBar
  }
};
</script>

<style>
.spods {
  /* font-family: "Comfortaa", cursive; */
}
</style>
