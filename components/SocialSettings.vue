<template>
  <div>
    <div class="border border-green-500 rounded bg-white p-5">
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
        <div>
          <font-awesome-icon
            v-if="platform !== ''"
            :icon="['fab', platform.name]"
            size="2x"
            :style="getColor(platform.color)"
            class=""
            @click="selectPlatform(platform)"
          />
        </div>
      </div>
      <!-- Step 1: Choose platform -->
      <div v-if="step === 0">
        <h2 class="text-center pb-2">
          Choose the platform you wish to modify:
        </h2>
        <div class="flex flex-row flex-wrap justify-center p-3">
          <!-- Dynamic -->
          <div
            v-for="platform in this.$store.state.platforms"
            :key="platform.name"
          >
            <font-awesome-icon
              :icon="['fab', platform.name]"
              size="3x"
              :style="getColor(platform.color)"
              class="mr-5 hvr-pulse"
              @click="selectPlatform(platform)"
            />
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
          Login
        </button>
        <button
          @click="remove(platform.name, username)"
          class="shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white hover:text-black font-bold py-2 px-4 rounded hvr-grow"
        >
          Remove
        </button>
      </div>
    </div>

    <!-- 2b. Add a new social media section -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      step: 0,
      platform: "",
      username: "",
      privacy: ""
    };
  },
  methods: {
    getColor(hex) {
      return "color: " + hex;
    },
    handleBack() {
      this.step = 0;
      this.platform = "";
    },
    login(platform, username, privacy) {
      const DNA = this.$auth.user._id;
      this.$axios.post("/api/auth/platform", {
        DNA,
        platform,
        username,
        privacy
      });
    },
    remove(platform, username) {
      const DNA = this.$auth.user._id;
      this.$axios.post("/api/auth/platform/delete", {
        DNA,
        platform,
        username
      });
    },
    selectPlatform(platform) {
      this.platform = platform;
      this.step = 1;
    }
  }
};
</script>
