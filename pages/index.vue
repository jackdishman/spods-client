<template>
  <div class="w-full spods bg-gray-100">
    <!-- Logged in users -->
    <div v-if="$auth.loggedIn">
      <div class="flex flex-row justify-center pt-10">
        <!-- Left col -->
        <h2>Add Content</h2>

        <!-- Center col -->
        <nuxt-link :to="$auth.user[0].username">
          <div class="border border-green-500 rounded bg-white p-5">
            <h2 class="text-4xl text-center spods">{{ $auth.user[0].name }}</h2>
          </div>
        </nuxt-link>

        <!-- Right col -->
        <h2>Add Social Link</h2>
      </div>

      <SocialContainer
        class="animated bounceInUp flex w-full flex-row justify-around fixed bottom-0 border-t border-green-500 bg-white"
        :user="$auth.user[0]"
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
import UserAuthForm from "../components/UserAuthForm";
import Logo from "../components/Logo";
import Search from "@/components/Search";
import SocialContainer from "../components/SocialContainer";

export default {
  data() {
    return {
      userId: ""
    };
  },
  components: {
    SocialContainer,
    Logo,
    UserAuthForm,
    Search
  },
  computed: mapState(["user", "isLoggedIn"])
  // middleware:['index']
};
</script>

<style>
.spods {
  /* font-family: 'Orbitron', sans-serif; */
  font-family: "Comfortaa", cursive;
}
.facebook {
  color: #3b5998;
}
.twitter {
  color: #00acee;
}
.linkedin {
  color: #0072b1;
}
.spotify {
  color: #1db954;
}
.snapchat {
  color: #fffc00;
}
.instagram {
  color: #3f729b;
}
.soundcloud {
  color: #ff7700;
}
.github {
  color: #6e5494;
}
.quora {
  color: #aa2200;
}
.reddit {
  color: #ff5700;
}
.steam {
  color: #171a21;
}
.vimeo {
  color: #86c9ef;
}
.xbox {
  color: #0e7a0d;
}
.playstation {
  color: #003791;
}
</style>
