<template>
  <div>
    <!-- Unauthenticated Users -->
    <nuxt-link v-if="$store.state.user === null" to="/">
      <button
        class="flex border border-black rounded bg-green-500 text-white p-2"
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
          class="feather feather-key"
        >
          <path
            d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"
          ></path>
        </svg>
      </button>
    </nuxt-link>
    <!-- Authenticated Users -->
    <!-- if viewing own profile -->
    <div v-else-if="user._id === $store.state.user._id">
      <!-- This is your profile, show nothing -->
    </div>
    <!-- Authenticated, viewing someone else's profile -->
    <button
      v-else-if="this.$props.isFollowing === true"
      @click="removeFriend()"
      class="border border-black rounded bg-red-500 text-white p-2"
    >
      <div class="flex flex-row justify-center">
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
          class="feather feather-user-minus"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="8.5" cy="7" r="4"></circle>
          <line x1="23" y1="11" x2="17" y2="11"></line>
        </svg>
      </div>
    </button>
    <button
      v-else
      @click="addFriend()"
      class="border border-black rounded bg-green-500 text-white p-2"
    >
      <div class="flex flex-row justify-center">
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
          class="feather feather-user-plus"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="8.5" cy="7" r="4"></circle>
          <line x1="20" y1="8" x2="20" y2="14"></line>
          <line x1="23" y1="11" x2="17" y2="11"></line>
        </svg>
      </div>
    </button>
  </div>
</template>

<script>
import UserService from "@/middleware/UserService";
import url from "@/static/server";

export default {
  name: "ConnectsContainer",
  props: {
    user: Object,
    isFollowing: Boolean,
    followsBack: Boolean
  },
  methods: {
    async addFriend() {
      this.setToken();
      const actionUser = this.$store.state.user.username;
      const targetUser = this.user.username;
      try {
        await this.$axios
          .post(url + "/api/auth/connect", {
            actionUser,
            targetUser
          })
          .then(res => {
            this.updateUser();
            this.$toast.success("Connect Added!");
            this.$emit("update", "addFriend");
          });
      } catch (err) {
        this.$toast.error("Couldn't add Connect");
        console.log(err);
      }
    },

    async removeFriend(name, username, id, friendsList, socialList) {
      this.setToken();
      const actionUser = this.$store.state.user.username;
      const targetUser = this.user.username;
      try {
        await this.$axios
          .post(url + "/api/auth/connect/remove", {
            actionUser,
            targetUser
          })
          .then(res => {
            this.updateUser();
            this.$toast.success("Connect Removed");
            this.$emit("update", "removeFriend");
          });
      } catch (err) {
        this.$toast.error("Couldn't remove Connect");
        console.log(err);
      }
    },

    async updateUser() {
      const u = await UserService.getUserData(this.$store.state.user.username);
      this.$store.commit("SETUSER", u.data);
      // this.$router.push(this.$route.params.id);
    },

    setToken() {
      this.$axios.setHeader("Authorization", this.$store.state.token);
      this.$axios.setToken(this.$store.state.token, "Bearer");
    }
  }
};
</script>
