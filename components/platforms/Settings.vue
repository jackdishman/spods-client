<template>
  <section v-if="$store.state.user !== null">
    <!-- Step 1: Add platform -->
    <div v-if="step === 0">
      <h2 class="text-center text-green-500 pt-4 bold text-2xl">
        Add Platform:
      </h2>
      <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 p-4">
        <span
          v-for="platform in getUnenrolledPlatforms"
          :key="platform.name"
          class="p-1 border bg-white flex flex-col items-center"
        >
          <PlatformLogo :platform="platform.name" />
          <h4 class="text-md">{{ platform.name }}</h4>
          <button
            @click="selectPlatform(platform)"
            class="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white rounded hvr-grow"
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
              class="feather feather-plus-square"
            >
              <title>Add {{ platform.name }} Button</title>
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="12" y1="8" x2="12" y2="16"></line>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
          </button>
        </span>
      </div>

      <!-- Remove Platforms -->
      <div>
        <h2 class="text-center pb-2 text-green-500 bold text-2xl">
          Existing Platforms:
        </h2>




        <div class="">
          <div
            v-for="platform in this.$store.state.user.socialLinks"
            :key="platform.name"
            class="bg-gray-100 pl-5 py-1 m-2 border border-green-500 rounded grid grid-cols-3"
          >
            <span>
              <PlatformLogo :platform="platform.platform" />
            </span>
            <span>
              <h6 class="text-lg">{{ platform.username }}</h6>
              <h6 class="text-lg">
                {{ translatePrivacy(platform.privacy) }}
              </h6>
            </span>
            <span class="p-5">
              <button
                @click="remove(platform.platform, platform.username)"
                class="float-right shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white rounded hvr-grow"
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
                  class="feather feather-x-square"
                >
                  <title>Remove Platform</title>
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="9" y1="9" x2="15" y2="15"></line>
                  <line x1="15" y1="9" x2="9" y2="15"></line>
                </svg>
              </button>
            </span>
          </div>
        </div>





        
      </div>
    </div>

    <!-- Step 2: Username field, privacy settings, add/rem -->
    <section
      v-if="step === 1"
      class="bg-white py-5 border-b-4 border-t-4 border-green-500"
    >
      <PlatformLogo :platform="platform.name" class="items-center" />

      <!-- Add new Platform Form -->
      <article class="">
        <form class="mt-2">
          <label for="handle" >
            <h5 class="pb-2 text-green-500 text-center">
              Add your {{ platform.name }} account
            </h5>
          </label>
          <section class="flex justify-center">
            <div class="text-lg bg-gray-200 border rounded p-2 text-gray-700 leading-tight border-green-500 mx-5">
              <span class="text-sm sm:text-base">
                {{ this.platform.handle }}
              </span>
              <input
                id="handle"
                class="focus:outline-none bg-gray-200 border-green-500 w-48"
                type="text"
                placeholder="username"
                v-model="username"
              />
            </div>
          </section>

          <!-- 

            Place where I would implement the URL instead of display name
            
            <label v-if="platform.name === 'linkedin'" for="displayName">
            Add your {{ platform.name }} Display Name:
          </label>
          <div
            v-if="platform.name === 'linkedin'"
            class="text-lg bg-gray-200 border rounded p-2 text-gray-700 leading-tight border-green-500 mx-5"
          >
            <input
              id="displayName"
              class="focus:outline-none bg-gray-200 border-green-500 w-32"
              type="text"
              placeholder="Display Name"
              v-model="displayName"
            />
          </div> -->
        </form>
      </article>

      <!-- SELECT PRIVACY TIER -->
      <article class=" my-5">
        <p class="text-center text-green-500">
          Who would you like this visible to?
        </p>
        <div class="flex justify-center items-center">
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
            class="feather feather-eye mr-3"
          >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          <select
            v-model="privacy"
            class="border spods p-2 border-green-500 bg-gray-200 focus:outline-none rounded"
          >
            <option value="" disabled selected>Select Privacy</option>
            <option value="0" selected>Public</option>
            <!-- <option value="1">Friends of Friends</option> -->
            <option value="2">Following List</option>
            <option value="3">Private</option>
          </select>
        </div>
        <div class="flex flex-row flex-wrap">
          <table class="m-5">
            <tr class="border-b border-green-500">
              <td class="border-r border-green-500 spods">Public</td>
              <td class="p-2">
                Everyone who visits spods.app/{{ $store.state.user.username }}
              </td>
            </tr>
            <tr class="border-b border-green-500">
              <td td class="border-r border-green-500 spods">Following List</td>
              <td class="p-2">Only people you follow on spods.app</td>
            </tr>
            <tr>
              <td td class="border-r border-green-500 spods">Private</td>
              <td class="p-2">This is only visible to you</td>
            </tr>
          </table>



        </div>
      </article>
      <!-- BOTTOM ACTIONS BAR -->
      <div class="flex flex-row justify-around">
        <!-- Back Button -->
        <button
          @click="handleBack()"
          class="shadow bg-black hover:bg-gray-500 focus:shadow-outline focus:outline-none text-white hover:text-black font-bold py-2 px-4 rounded hvr-grow"
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
            class="feather feather-rotate-ccw"
          >
            <title>Back button to Edit Platforms</title>
            <polyline points="1 4 1 10 7 10"></polyline>
            <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
          </svg>
        </button>
        <a
          v-if="platform.url && username"
          :href="platform.url + username"
          target="_blank"
          rel="noreferrer"
          class="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white hover:text-black font-bold py-2 px-4 rounded hvr-grow w-32"
        >
          Test Link
        </a>
        <button
          v-else-if="platform.url"
          class="opacity-50 cursor-not-allowed shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white hover:text-black font-bold py-2 px-4 rounded w-32"
        >
          Test Link
        </button>
        <button
          @click="login(platform.name, username, privacy)"
          class="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white hover:text-black font-bold py-2 px-4 rounded hvr-grow w-32"
        >
          Add
        </button>
      </div>
    </section>
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
      privacy: "",
      displayName: ""
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
      if (username === "") {
        this.$toast.error("Username contains Invalid Characters!");
        return;
      } else if (privacy === "") {
        this.$toast.error("Select Privacy Level!");
        return;
      } else {
        const DNA = this.$store.state.user._id;
        if (
          platform === "spotify" ||
          platform === "twitter" ||
          platform === "linkedin"
          // platform === 'facebook' ||
          // platform === 'snapchat' ||
          // platform === 'instagram' || invalid callback?
          // platform === 'pinterest' application pending
        ) {
          // oAuth happens
          window.location.href = url + "/api/" + platform;
        }
        this.$axios.setHeader("Authorization", this.$store.state.token);
        this.$axios.setToken(this.$store.state.token, "Bearer");
        try {
          await this.$axios
            .post(url + "/api/auth/platform", {
              DNA,
              platform,
              username,
              privacy,
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
