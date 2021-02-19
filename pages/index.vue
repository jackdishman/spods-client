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

      <!-- Account Settings -->
      <nuxt-link
        to="/settings"
        class="border-2 m-2 border-green-500 rounded bg-white p-3 m-5 hvr-grow"
      >
        <h3 class="text-3xl text-center spods text-black">Account Settings</h3>
        <p class="text-md text-center spods text-green-500">
          Update account settings
        </p>
      </nuxt-link>

      <!-- Community -->
      <nuxt-link
        to="/community"
        class="border-2 m-2 border-green-500 rounded bg-white p-3 m-5 hvr-grow"
      >
        <h3 class="text-3xl text-center spods text-black">Community</h3>
        <p class="text-md text-center spods text-green-500">
          Explore the community around you through a list of all accounts
        </p>
      </nuxt-link>

      <div class="bg-white">
        <span id="extole_zone_mobile_footer"></span>
      </div>

      <!-- Log Out -->
      <button
        @click="logout()"
        class="text-black bg-red-500 border-2 m-2 border-white rounded p-3 m-5 hvr-grow"
      >
        <h3 class="text-3xl text-center spods text-black">Log Out</h3>
      </button>

      <!-- Search Users -->
      <!-- View Community -->
      <!-- Questionnaire -->
    </section>

    <!-- Logged out / unregistered user -->
    <div v-else>







<div class="w-full">

    <div class="flex bg-white" style="height:600px;">
        <div class="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
            <div>
                <h2 class="text-3xl font-semibold text-gray-800 md:text-4xl">Your Crypto <span class="text-indigo-600">Identity</span></h2>
                <p class="mt-2 text-sm text-gray-500 md:text-base">Integrate social media channels onto the Etherum blockchain in the form of a ERC-721 Non-Fungible Token (NFT)</p>
                <div class="flex justify-center lg:justify-start mt-6">
                    <a class="px-4 py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800" href="#">Get Started</a>
                    <a class="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400" href="#">Learn More</a>
                </div>
            </div>
        </div>
        <div class="hidden lg:block lg:w-1/2" style="clip-path:polygon(10% 0, 100% 0%, 100% 100%, 0 100%)">
            <div class="h-full object-cover" style="background-image: url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80)">
                <div class="h-full bg-black opacity-25"></div>
            </div>
        </div>
    </div>
</div>








      <!-- Header: Title, subheading -->
      <section>
        <h2 class="text-base spods text-center text-white p-5">
          Link all your social media accounts for one universal contact web
        </h2>
      </section>

      <section class="flex flex-col justify-around items-center">
        <article class="flex flex-col flex-shrink-0">
          <UserAuthForm />
        </article>
        <h4
          class="text-xl text-green-500 bg-black text-center m-5 rounded-t pt-2 spods"
        >
          Social Platform Organizational Domain System
        </h4>
      </section>

      <div class="flex flex-row flex-wrap justify-around items-baseline">
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

    <span id="extole_zone_overlay"></span>
  </div>
</template>

<script>
import { mapState } from "vuex";
import UserAuthForm from "@/components/UserAuthForm";
import ExportURL from "@/components/ExportURL";
import Search from "@/components/Search";
import UserService from "@/middleware/UserService";

export default {
  head() {
    return {
      title:
        "spods - social media contact directory platform to organize online profiles",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Explore the spods community by searching for user social media profiles"
        }
      ]
    };
  },
  layout: "external",
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
  },
  mounted() {
    // (function(c,b,f,k,a){c[b]=c[b]||{};for(c[b].q=c[b].q||[];a<k.length;)f(k[a++],c[b])})(window,"extole",function (c,b){b[c]=b[c]||function (){b.q.push([c,arguments])}},["createZone"],0);
    // extole.createZone({
    //     name: "overlay",
    //     element_id: 'extole_zone_overlay',
    //     data: {

    //     }
    // });
    (function(c, b, f, k, a) {
      c[b] = c[b] || {};
      for (c[b].q = c[b].q || []; a < k.length; ) f(k[a++], c[b]);
    })(
      window,
      "extole",
      function(c, b) {
        b[c] =
          b[c] ||
          function() {
            b.q.push([c, arguments]);
          };
      },
      ["createZone"],
      0
    );
    extole.createZone({
      name: "mobile_footer",
      element_id: "extole_zone_mobile_footer",
      data: {}
    });
  }
  // middleware:['index']
};
</script>
