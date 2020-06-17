<template>
  <div class="text-white spods h-screen">
    <div v-if="this.$store.state.user">
      <h1 class="text-center text-green-500 text-3xl">Account Settings</h1>
      <!-- <ul>
        <li>Change Password</li>
        <li>Change Display Name</li>
        <li>Privacy Settings</li>
      </ul> -->

      <div class="p-5">
        <h3 class="text-red-500 text-xl">Delete Account</h3>
        <p class="">
          By clicking the button below, the account for
          {{ this.$store.state.user.name }} will be permanently deleted and
          cannot be recovered. https://www.spods.app/{{
            this.$store.state.user.username
          }}
          will become available immediately after you press this button.
        </p>
        <button class="bg-red-500 rounded-lg p-2 border-2 border-white" @click="deleteUser()">Delete Account</button>
      </div>
    </div>
  </div>
</template>

<script>
import url from "@/static/server.js";

export default {
  components: {},
  methods: {
    async deleteUser() {
      await this.$axios.delete(url + '/users/'+ this.$store.state.user._id);
      this.$axios.setHeader({ Authorization: "" });
      this.$store.commit("SETTOKEN", null);
      this.$store.commit("SETUSER", null);
      this.$router.push("/");
    }
  }
};
</script>
