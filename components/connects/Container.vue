<template>
  <div>
    <!-- Unauthenticated Users -->
    <div v-if="$store.state.user === null" class="flex justify-center">
      <nuxt-link
        to="/"
        class="border border-black rounded bg-green-500 text-white p-2 w-full"
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
          class="feather feather-log-in inline"
        >
          <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
          <polyline points="10 17 15 12 10 7"></polyline>
          <line x1="15" y1="12" x2="3" y2="12"></line>
        </svg>
        <h6 class="text-white spods pl-1 text-base inline">login</h6>
      </nuxt-link>
    </div>
    <!-- Authenticated Users -->
    <div v-else>
      <!-- if viewing own profile -->
      <div v-if="user._id === $store.state.user._id">
        <!-- This is your profile -->
      </div>
      <!-- Authenticated, viewing someone else's profile -->
      <div v-else>
        <button
          v-if="this.$props.isFollowing === true"
          @click="removeFriend()"
          class="border border-black rounded bg-red-500 text-white p-3 w-full"
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
            <h6 class="text-white spods pl-2 text-base inline">remove</h6>
          </div>
        </button>
        <button
          v-else
          @click="addFriend()"
          class="border border-black rounded bg-green-500 text-white p-3 w-full"
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
            <h6 class="text-white spods pl-2 text-base">add</h6>
          </div>
        </button>
      </div>
    </div>
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
