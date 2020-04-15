<template>
  <div class="relative m-0 p-0 h-screen flex flex-col flex-grow">
    <!-- SPODS BRAND HEADER -->
    <div class="z-50 w-full fixed top-0 border-b border-green-500 bg-white">
      <!-- Logged In -->
      <div v-if="$store.state.user !== null" class="">
        <div class="flex lg:flex-row justify-between">
          <nuxt-link to="/" class="spods text-center text-4xl hvr-forward pl-3">
            spods
          </nuxt-link>
          <font-awesome-icon
            v-if="!isMobileMenuOpen"
            class="m-5 lg:hidden"
            :icon="['fas', 'bars']"
            style="color:black"
            @click="toggleMobileNav()"
          />
          <font-awesome-icon
            v-else
            class="m-5 lg:hidden"
            :icon="['fas', 'times']"
            style="color:black"
            @click="toggleMobileNav()"
          />
          <div class="hidden lg:block">
            <nuxt-link
              to="/community"
              class="spods text-lg pr-2 hvr-hang text-green-500"
            >
              Community
            </nuxt-link>
            <!-- <nuxt-link
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
            </nuxt-link> -->
            <button
              @click="logout()"
              class="hvr-grow bg-red-600 text-white font-bold border border-black rounded p-2 m-2 active:bg-red-600 hover:bg-red-400 hover:text-black focus:outline-none"
            >
              Log Out
            </button>
          </div>
        </div>

        <div>
          <div
            v-if="isMobileMenuOpen"
            class="flex flex-col lg:hidden animated bounceInDown bg-transparent border border-gray-500"
            @click="toggleMobileNav()"
          >
            <nuxt-link
              to="/community"
              class="w-full spods text-lg text-center p-5 hvr-hang bg-green-500 border-b border-gray-100 font-bold"
            >
              Community
            </nuxt-link>
            <!-- <nuxt-link
              to="/web"
              class="w-full spods text-lg text-center p-5 hvr-hang bg-green-500 border-b border-gray-100 font-bold"
            >
              Web
            </nuxt-link>
            <nuxt-link
              to="/settings"
              class="w-full spods text-lg text-center p-5 hvr-hang bg-green-500 border-b border-gray-100 font-bold"
            >
              Settings
            </nuxt-link> -->
            <button
              @click="logout()"
              class="w-full spods bg-red-600 text-white text-center p-5 font-bold border border-black"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>

      <!-- Logged Out -->
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
import {
  faSearch,
  faTimes,
  faUndo,
  faBars
} from "@fortawesome/free-solid-svg-icons";
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
  faPlaystation,
  faYoutube
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
  faPlaystation,
  faBars,
  faYoutube
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
    },
    logout() {
      this.$axios.setHeader({ Authorization: "" });
      this.$store.commit("SETUSER", null);
    }
  },
  computed: mapState(["isMobileMenuOpen", "CHANGETAB"]),
  components: {
    Logo,
    SearchBar
  }
};
</script>

<style></style>
