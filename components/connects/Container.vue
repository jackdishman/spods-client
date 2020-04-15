<template>
  <div class="flex flex-row justify-center">
    <!-- Unauthenticated Users -->
    <div v-if="$store.state.user === null">
      <nuxt-link
        to="/"
        class="border border-black rounded bg-green-500 text-white p-3 m-1"
        >Authenticate</nuxt-link
      >
      <button></button>
    </div>
    <!-- Authenticated Users -->
    <div v-else>
      <!-- if viewing own profile -->
      <div v-if="user._id === $store.state.user._id">
        This is your profile
      </div>
      <!-- Authenticated, viewing someone else's profile -->
      <div v-else class="flex flex-row justify-center">
        <button
          v-if="this.$props.isFollowing === true"
          @click="removeFriend()"
          class="border border-black rounded bg-red-500 text-white p-3 m-1"
        >
          Remove Connect
        </button>
        <button
          v-else
          @click="addFriend()"
          class="border border-black rounded bg-green-500 text-white p-3 m-1"
        >
          Add Connect
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import UserService from "@/middleware/UserService";

export default {
  name: "ConnectsContainer",
  props: {
    user: Object,
    isFollowing: Boolean,
    followsBack: Boolean
  },
  methods: {
    async addFriend() {
      const actionUser = this.$store.state.user;
      const targetUser = this.user;
      try {
        await this.$axios
          .post("/api/auth/connect", {
            actionUser,
            targetUser
          })
          .then(res => {
            this.updateUser();
            this.$toast.success("Connect Added!");
            this.$router.push("/");
          });
      } catch (err) {
        this.$toast.error("Couldn't add Connect");
        console.log(err);
      }
    },
    async removeFriend(name, username, id, friendsList, socialList) {
      const actionUser = this.$store.state.user;
      const targetUser = this.user;
      try {
        await this.$axios
          .post("/api/auth/connect/remove", {
            actionUser,
            targetUser
          })
          .then(res => {
            this.updateUser();
            this.$toast.success("Connect Removed");
            this.$router.push("/");
          });
      } catch (err) {
        this.$toast.error("Couldn't remove Connect");
        console.log(err);
      }
    },
    async updateUser() {
      const u = await UserService.getUserData(this.$store.state.user.username);
      this.$store.commit("SETUSER", u.data);
    }
  }
};
</script>
