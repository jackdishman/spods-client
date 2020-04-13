<template>
  <div class="w-full spods bg-gray-100">
    <!-- Logged in users -->
    <div v-if="$auth.loggedIn">
      <div class="flex flex-col lg:flex-row justify-between items-center pt-10">
        <!-- Left col -->
        <h2 class="order-2 lg:order-first"></h2>
        <!-- Center col -->
        <nuxt-link :to="$auth.user.username">
          <div
            class="border border-green-500 rounded bg-white p-3 hvr-grow order-first lg:order-2"
          >
            <h2 class="text-3xl text-center spods">{{ $auth.user.name }}</h2>
            <p class="text-md text-center spods text-green-500">
              View your Profile
            </p>
          </div>
        </nuxt-link>
        <!-- Right col -->
        <div></div>
      </div>

      <PlatformSettings
        class="mt-10 p-3 animated bounceInUp flex w-full flex-row justify-around lg:fixed bottom-0 border-t border-b border-green-500 bg-white"
        :existingProfileList="$store.state.user.socialLinks"
      />
    </div>

    <!-- Logged out / unregistered user -->
    <div v-else>
      <p class="text-center p-5">
        Linking all your social media accounts for one universal contact web
      </p>
      <div
        class="flex flex-col md:flex-row flex-wrap justify-around items-center"
      >
        <div class="flex flex-col flex-shrink-0 mb-10 lg:mb-0">
          <UserAuthForm />
        </div>
        <div
          class="flex flex-col spods bg-white border-green-500 border rounded p-10 "
        >
          <h3 class="text-xl"><span class="text-3xl">s</span>ocial</h3>
          <h3 class="text-xl"><span class="text-3xl">p</span>latform</h3>
          <h3 class="text-xl"><span class="text-3xl">o</span>rganization</h3>
          <h3 class="text-xl"><span class="text-3xl">d</span>omain</h3>
          <h3 class="text-xl"><span class="text-3xl">s</span>ystem</h3>
        </div>
      </div>

      <div
        class="flex flex-row flex-wrap justify-around items-baseline pt-5 mt-10"
      >
        <div
          class="w-full pt-2 lg:w-1/4 text-center m-2 p-2 lg:p-5 lg:m-0 border border-green-500 bg-white rounded"
        >
          <h2 class="text-2xl pt-1">Privacy</h2>
          <p class="text-md">
            All social media credentials are verified every time you login,
            always using the present-leading technologies of web security
            (oAuth2.0)
          </p>
        </div>
        <div
          class="w-full m-2 lg:w-1/4 text-center lg:m-0 lg:p-5 p-2 border border-green-500 rounded bg-white"
        >
          <h2 class="text-2xl pt-1">About</h2>
          <p class="text-md">
            Spods is a personal collection of all your social media presences
            throughout the web. Spods is intended to give you a place to see
            your digital self in a circular way through graphs and connections
          </p>
        </div>
        <div
          class="w-full pt-2 lg:w-1/4 text-center m-2 p-2 lg:p-5 lg:m-0 border border-green-500 bg-white rounded"
        >
          <h2 class="text-2xl pt-1">Mission Statement</h2>
          <p class="text-md">
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
import PlatformSettings from "@/components/platforms/Settings";
import UserService from "@/middleware/UserService";

export default {
  components: {
    UserAuthForm,
    PlatformSettings
  },
  async created() {
    if (this.$auth.loggedIn) {
      try {
        await UserService.getUserData(this.$auth.user.username).then(res => {
          this.$store.commit("SETUSER", res.data);
        });
      } catch (err) {
        console.log(err);
      }
    }
  },
  computed: mapState(["user", "isLoggedIn"])
  // middleware:['index']
};
</script>
