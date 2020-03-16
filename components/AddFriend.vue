<template>
  <div v-if="$auth.loggedIn">
      <button
        v-if="user._id !== $auth.user._id"
        @click="
          addFriend(
            user.name,
            user.username,
            user._id,
            user.connections,
            user.socialLinks
          )
        "
        class="border border-green-500 rounded bg-white p-3"
      >
        Add Friend
      </button>
  </div>
</template>

<script>
export default {
  props: {
    user: Object
  },
  methods: {
    async addFriend(name, username, id, friendsList, socialList) {
      const DNA = this.$auth.user._id;
      console.log(username);
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
            const u = this.$auth.user;
            this.$store.commit("SETUSER", u);
            this.$toast.success("Friend Added!");
            this.$router.push("/");
          });
      } catch (err) {
        this.$toast.error("Couldn't add Friend");
        console.log(err);
      }
    }
  }
};
</script>
