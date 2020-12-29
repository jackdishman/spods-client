<template>
  <div class="bg-black h-auto min-h-full">
    <!-- Header -->
    <div
      class="w-full h-10 bg-black border-b border-gray-200 flex flex-row justify-between fixed top-0 z-20"
    >
      <div class="m-2">
        <nuxt-link to="/">
          <h2 class="text-white spods text-lg">spods</h2>
        </nuxt-link>
      </div>
      <button
        v-if="$store.state.user !== null"
        class=" mr-2 mt-0 pb-1 bg-black text-white"
        @click="toggleMobileNav()"
      >
        <!-- SPODS Icon -->
        <div class="hvr-icon-spin pt-1" v-if="!isMobileMenuOpen">
          <img
            src="/images/spods-logo.png"
            class="w-6 h-6 bg-white rounded-full hvr-icon"
          />
        </div>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-x-circle"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="15" y1="9" x2="9" y2="15"></line>
          <line x1="9" y1="9" x2="15" y2="15"></line>
        </svg>
      </button>
      <div v-else>
        <nuxt-link to="/"><button class="text-white bg-green-500">Log In</button></nuxt-link>
      </div>
    </div>

    <div
      v-if="isMobileMenuOpen"
      class="w-full h-screen fixed z-40 pt-10"
      @click="toggleMobileNav()"
    >
      <!-- Profile Avatar Icon -->
      <nuxt-link
        :to="$store.state.user.username"
        class="w-full bg-black text-white border-b border-white p-5 flex flex-row"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-user"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
        <h3 class="spods">Visit Profile</h3>
      </nuxt-link>

      <nuxt-link to="/settings" class="w-full bg-black text-white border-b border-white p-5 flex flex-row">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-settings"
        >
          <circle cx="12" cy="12" r="3"></circle>
          <path
            d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
          ></path>
        </svg>
        <h3
          class="spods"
        >
          Account Settings
        </h3>
      </nuxt-link>

      <nuxt-link to="/community" class="w-full bg-black text-white border-b border-white p-5 flex flex-row">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
        <h3
          class="spods"
        >
          Community
        </h3>
      </nuxt-link>

      <div @click="logout()">
        <button
          class="w-full bg-red-500 text-black spods p-5 text-center border-b border-black"
        >
          Log Out
        </button>
      </div>
    </div>
    <div v-else></div>

    <!-- content -->
    <nuxt class="pt-10 pb-12" />
  </div>
</template>

<script>
import Logo from "@/components/Logo";
import Vue from "vue";
import SearchBar from "@/components/Search";
import { mapState } from "vuex";
import { library } from "@fortawesome/fontawesome-svg-core";

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
      this.$store.commit("SETTOKEN", null);
      this.$store.commit("SETUSER", null);
    },
  },
  computed: mapState(["isMobileMenuOpen", "CHANGETAB"]),
  components: {},
};
</script>

<style></style>
