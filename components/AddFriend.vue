<template>
  <div v-if="$auth.loggedIn && user._id !== $auth.user._id" class="flex flex-row justify-center">
  <button v-if="this.$props.status === true"
      @click="
        removeFriend(
          user.name,
          user.username,
          user._id,
          user.connections,
          user.socialLinks
        )
      "
      class="border border-black rounded bg-red-500 text-white p-3 m-1">
      Remove Connect
    </button>
    <button
      v-else
      @click="
        addFriend(
          user.name,
          user.username,
          user._id,
          user.connections,
          user.socialLinks
        )
      "
      class="border border-black rounded bg-green-500 text-white p-3 m-1"
    >
      Add Connect
    </button>
  </div>
</template>

<script>
import UserService from "@/middleware/UserService";

export default {
  props: {
    user: Object,
    status: Boolean
  },
  methods: {
    async addFriend(name, username, id, friendsList, socialList) {
      const DNA = this.$auth.user._id;
      try {
        await this.$axios
          .post("/api/auth/connect", {
            DNA,
            name,
            username,
            id,
            friendsList,
            socialList
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
      const DNA = this.$auth.user._id;
      try {
        await this.$axios.post("/api/auth/connect/remove",{
          DNA,
          name,
          username,
          id,
          friendsList, 
          socialList
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
    async updateUser(){
      const u = await UserService.getUserData(this.$auth.user.username);
      this.$store.commit("SETUSER", u.data);
    }
  }
};
</script>
