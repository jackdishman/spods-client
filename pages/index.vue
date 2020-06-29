<template>
  <div class="w-full h-auto bg-black">
    <!-- Logged in users -->
    <section v-if="$store.state.user" class="flex flex-col p-5">
      <!-- View Profile -->
      <nuxt-link
        :to="$store.state.user.username"
        class="border-2 m-2 border-green-500 rounded bg-white p-3 m-5 hvr-grow"
      >
        <h2 class="text-3xl text-center spods text-black">
          {{ $store.state.user.name }}
        </h2>
        <p class="text-md text-center spods text-green-500">
          View your Profile
        </p>
      </nuxt-link>

      <!-- Edit Platforms -->
      <nuxt-link
        to="/edit"
        class="border-2 m-2 border-green-500 rounded bg-white p-3 m-5 hvr-grow"
      >
        <h3 class="text-3xl text-center spods text-black">
          Edit Platforms
        </h3>
        <p class="text-md text-center spods text-green-500">
          Add or remove existing social media platforms
        </p>
      </nuxt-link>

      <!-- Account Settings -->
      <nuxt-link
        to="/settings"
        class="border-2 m-2 border-green-500 rounded bg-white p-3 m-5 hvr-grow"
      >
        <h3 class="text-3xl text-center spods text-black">
          Account Settings
        </h3>
        <p class="text-md text-center spods text-green-500">
          Update account settings
        </p>
      </nuxt-link>

      <!-- Community -->
      <nuxt-link
        to="/community"
        class="border-2 m-2 border-green-500 rounded bg-white p-3 m-5 hvr-grow"
      >
        <h3 class="text-3xl text-center spods text-black">
          Community
        </h3>
        <p class="text-md text-center spods text-green-500">
          Explore the community around you through a list of all accounts
        </p>
      </nuxt-link>

      <!-- Log Out -->
      <button
        @click="logout()"
        class="text-black bg-red-500 border-2 m-2 border-white rounded p-3 m-5 hvr-grow"
      >
        <h3 class="text-3xl text-center spods text-black">
          Log Out
        </h3>
      </button>

      <!-- Search Users -->
      <!-- View Community -->
      <!-- Questionnaire -->
    </section>

    <!-- Logged out / unregistered user -->
    <div v-else>
      <!-- Header: Title, subheading -->
      <section>
        <h1 class="spods text-5xl text-center text-green-500">spods</h1>
        <h2 class="text-base spods text-center text-white p-5">
          Link all your social media accounts for one universal contact web
        </h2>
      </section>

      <section
        class="flex flex-col justify-around items-center"
      >
        <article class="flex flex-col flex-shrink-0">
          <UserAuthForm />
        </article>
        <h4
          class="text-xl text-green-500 bg-black text-center m-5 rounded-t pt-2 spods"
        >
          Social Platform Organizational Domain System
        </h4>
      </section>

      <div
        class="flex flex-row flex-wrap justify-around items-baseline"
      >
        <div
          class="w-full pt-2 lg:w-1/4 text-center m-2 p-2 lg:p-5 lg:m-0 border border-green-500 bg-white rounded"
        >
          <h2 class="text-2xl pt-1">Privacy</h2>
          <p class="text-sm text-green-500">
            All social media credentials are verified every time you login,
            always using the present-leading technologies of web security
            (oAuth2.0)
          </p>
        </div>
        <div
          class="w-full m-2 lg:w-1/3 text-center lg:m-0 lg:p-5 p-2 border border-green-500 rounded bg-white"
        >
          <h2 class="text-2xl pt-1">About</h2>
          <p class="text-md text-green-500">
            Spods is a personal collection of all your social media presences
            throughout the web. Spods is intended to give you a place to see
            your digital self in a circular way through graphs and connections
          </p>
        </div>
        <div
          class="w-full pt-2 lg:w-1/4 text-center m-2 p-2 lg:p-5 lg:m-0 border border-green-500 bg-white rounded"
        >
          <h2 class="text-2xl pt-1">Mission Statement</h2>
          <p class="text-md text-green-500">
            This is intended to outlive your human body, store what you want the
            rest of society to know about you. This is your account, do with it
            as you please.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import UserAuthForm from "@/components/UserAuthForm";
import ExportURL from "@/components/ExportURL";
import Search from "@/components/Search";
import UserService from "@/middleware/UserService";

export default {
  layout: "homepage",
  components: {
    UserAuthForm,
    ExportURL,
    Search
  },
  async created() {
    if (this.$store.state.user) {
      try {
        await UserService.getUserData(this.$store.state.user.username).then(
          res => {
            this.$store.commit("SETUSER", res.data);
          }
        );
      } catch (err) {
        console.log(err);
      }
    }
  },
  computed: mapState(["user", "isLoggedIn"]),
  methods: {
    logout() {
      this.$axios.setHeader({ Authorization: "" });
      this.$store.commit("SETTOKEN", null);
      this.$store.commit("SETUSER", null);
    }
  }
  // middleware:['index']
};
</script>
