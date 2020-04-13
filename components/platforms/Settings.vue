<template>
  <div>
    <div class="">
      <!-- Header -->
      <div class="flex flex-row justify-between">
        <font-awesome-icon
          v-if="step !== 0"
          class="m-2"
          :icon="['fas', 'undo']"
          style="color:black"
          @click="handleBack()"
        />
        <div v-else></div>
        <h1 class="text-2xl text-center spods p-5">Update your Profile</h1>
        <div></div>
      </div>
      <!-- Step 1: Choose platform -->
      <div v-if="step === 0">
        <h2 class="text-center pb-2 text-green-500 bold text-2xl">
          Add Platform:
        </h2>
        <div class="flex flex-row flex-wrap justify-center p-3">
          <!-- Dynamic -->
          <div
            v-for="platform in this.$store.state.platforms"
            :key="platform.name"
            @click="selectPlatform(platform)"
            class="p-1"
          >
            <span v-if="platformNotEnrolled(platform.name)">
              <PlatformLogo :platform="platform.name" />
              <h4 class="text-md">{{ platform.name }}</h4>
            </span>
          </div>
        </div>
        <div>
          <h2 class="text-center pb-2 text-green-500 bold text-2xl">
            Existing Platforms:
          </h2>
          <div class="flex flex-col lg:flex-row flex-wrap justify-center">
            <div
              v-for="platform in this.$store.state.user.socialLinks"
              :key="platform.name"
              class="flex flex-row lg:flex-col bg-gray-100 p-1 m-1 border border-green-500 rounded justify-between"
            >
              <h6 class="text-xs text-center">{{ platform.platform }}</h6>
              <h6 class="text-xs">{{ platform.username }}</h6>
              <h6 class="text-xs text-center">[ {{ platform.privacy }} ]</h6>
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
            <option value="1">Friends of Friends</option>
            <option value="2">Friends Only</option>
            <option value="3">Private</option>
          </select>
        </div>
        <button
          @click="login(platform.name, username, privacy)"
          class="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white hover:text-black font-bold py-2 px-4 rounded hvr-grow"
        >
          Add
        </button>
      </div>
    </div>

    <!-- 2b. Add a new social media section -->
  </div>
</template>

<script>
import PlatformLogo from "@/components/platforms/PlatformLogo";
import UserService from "@/middleware/UserService";
import url from "@/static/server";

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
  props: {
    existingProfileList: Array
  },
  methods: {
    getColor(hex) {
      return "color: " + hex;
    },
    handleBack() {
      this.step = 0;
      this.platform = "";
    },
    platformNotEnrolled(platform) {
      for (const x in this.existingProfileList) {
        if (this.existingProfileList[x].platform === platform) {
          return false;
        }
      }
      return true;
    },
    async login(platform, username, privacy) {
      const DNA = this.$auth.user._id;
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
      try {
        await this.$axios
          .post("/api/auth/platform", {
            DNA,
            platform,
            username,
            privacy
          })
          .then(res => {
            this.updateUser();
            this.$toast.success("Platform Added!");
            this.step = 0;
            this.$router.push("/");
          });
      } catch (err) {
        this.$toast.error("Couldn't add Platform");
      }
    },
    async remove(platform, username) {
      const DNA = this.$auth.user._id;
      try {
        await this.$axios
          .post("/api/auth/platform/delete", {
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
      await UserService.getUserData(this.$auth.user.username).then(res => {
        this.$store.commit("SETUSER", res.data);
      });
    }
  }
};
</script>
