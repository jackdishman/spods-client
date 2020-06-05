<template>
  <section v-if="$store.state.user !== null" class="bg-black">
    <!-- Step 1: Add platform -->
    <div v-if="step === 0">
      <h2 class="text-center text-green-500 pt-4 bold text-2xl">
        Add Platform:
      </h2>
      <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 p-4">
        <button
          v-for="platform in getUnenrolledPlatforms"
          :key="platform.name"
          class="p-1 border bg-white"
          @click="selectPlatform(platform)"
        >
          <PlatformLogo :platform="platform.name" />
          <h4 class="text-md">{{ platform.name }}</h4>
        </button>
      </div>

      <!-- Remove Platforms -->
      <div>
        <h2 class="text-center pb-2 text-green-500 bold text-2xl">
          Existing Platforms:
        </h2>
        <div class="flex flex-col lg:flex-row flex-wrap justify-center">
          <div
            v-for="platform in this.$store.state.user.socialLinks"
            :key="platform.name"
            class="grid grid-cols-4 bg-gray-100 px-5 py-1 m-1 border border-green-500 rounded justify-between"
          >
            <span>
              <PlatformLogo :platform="platform.platform" />
            </span>
            <h6 class="text-lg">{{ platform.username }}</h6>
            <h6 class="text-lg">
              {{ translatePrivacy(platform.privacy) }}
            </h6>
            <button
              @click="remove(platform.platform, platform.username)"
              class="shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white hover:text-black font-bold py-1 px-2 rounded hvr-grow"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Step 2: Username field, privacy settings, add/rem -->
    <div v-if="step === 1">
      <!-- Back Button -->
      <svg
        @click="handleBack()"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-rotate-ccw"
      >
        <polyline points="1 4 1 10 7 10"></polyline>
        <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
      </svg>

      <h2 class="text-center pb-2">Add your {{ platform.name }} handle:</h2>
      <div
        class="text-lg bg-gray-200 border rounded p-2 text-gray-700 leading-tight border-green-500 m-2"
      >
        <span class="">
          {{ this.platform.handle }}
        </span>
        <input
          class="focus:outline-none bg-gray-200 border-green-500"
          type="text"
          placeholder="username"
          v-model="username"
        />
      </div>
      <div class="inline-block">
        <select
          v-model="privacy"
          class="border border-green-500 bg-gray-200 focus:outline-none"
        >
          <option value="0" selected>Public</option>
          <!-- <option value="1">Friends of Friends</option> -->
          <option value="2">Following List</option>
          <option value="3">Private</option>
        </select>
      </div>
      <a
        v-if="platform.url && username"
        :href="platform.url + username"
        target="_blank"
        rel="noreferrer"
        class="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white hover:text-black font-bold py-2 px-4 rounded hvr-grow"
      >
        Test Link
      </a>
      <button
        @click="login(platform.name, username, privacy)"
        class="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white hover:text-black font-bold py-2 px-4 rounded hvr-grow"
      >
        Add
      </button>
    </div>
    <!-- 2b. Add a new social media section -->
  </section>
</template>

<script>
import PlatformLogo from "@/components/platforms/PlatformLogo";
import UserService from "@/middleware/UserService";
import url from "@/static/server";
import { mapState } from "vuex";

export default {
  name: "PlatformsSettings",
  data() {
    return {
      step: 0,
      platform: "",
      username: "",
      privacy: ""
    };
  },
  components: {
    PlatformLogo
  },
  computed: {
    getUnenrolledPlatforms() {
      var list = [];
      for (var platform in this.$store.state.platforms) {
        if (
          this.platformNotEnrolled(this.$store.state.platforms[platform].name)
        ) {
          list.push(this.$store.state.platforms[platform]);
        }
      }
      return list;
    }
  },
  methods: {
    getGlobalConfig(p) {
      let arr = this.$store.state.platforms;
      let obj = arr.find(o => o.name === p);
      return obj;
    },
    getColor(hex) {
      return "color: " + hex;
    },
    handleBack() {
      this.step = 0;
      this.platform = "";
    },
    platformNotEnrolled(platform) {
      var existingProfileList = this.$store.state.user.socialLinks;
      for (const x in existingProfileList) {
        if (existingProfileList[x].platform === platform) {
          return false;
        }
      }
      return true;
    },
    async login(platform, username, privacy) {
      const DNA = this.$store.state.user._id;
      // Disable authentication until v2.0
      // if(
      //   platform === 'spotify' ||
      //   platform === 'facebook' ||
      //   platform === 'twitter' ||
      //   platform === 'linkedin' ||
      //   platform === 'instagram' ||
      //   platform === 'snapchat'
      // ){
      //   window.location.href = (url + '/api/' + platform);
      // }
      this.$axios.setHeader("Authorization", this.$store.state.token);
      this.$axios.setToken(this.$store.state.token, "Bearer");
      try {
        await this.$axios
          .post(url + "/api/auth/platform", {
            DNA,
            platform,
            username,
            privacy
          })
          .then(res => {
            this.updateUser();
            this.$toast.success("Platform Added!");
            this.step = 0;
            // this.$router.push("/");
          });
      } catch (err) {
        this.$toast.error("Couldn't add Platform");
      }
    },
    async remove(platform, username) {
      const DNA = this.$store.state.user._id;
      this.$axios.setHeader("Authorization", this.$store.state.token);
      this.$axios.setToken(this.$store.state.token, "Bearer");
      try {
        await this.$axios
          .post(url + "/api/auth/platform/delete", {
            DNA,
            platform,
            username
          })
          .then(res => {
            this.updateUser();
            this.$toast.success("Platform removed!");
          });
      } catch (err) {
        this.$toast.error("Couldn't remove Platform");
      }
    },
    selectPlatform(platform) {
      this.platform = platform;
      this.step = 1;
    },
    async updateUser() {
      await UserService.getUserData(this.$store.state.user.username).then(
        res => {
          this.$store.commit("SETUSER", res.data);
        }
      );
    },
    translatePrivacy(num) {
      switch (num) {
        case "0":
          return "Public";
        case "1":
          return "Friends of Friends";
        case "2":
          return "Friends Only";
        case "3":
          return "Only You";
      }
    }
  }
};
</script>
