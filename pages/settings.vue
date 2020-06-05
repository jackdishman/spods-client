<template>
  <div>
    <div v-if="this.$store.state.user">
      <h1>Account Settings</h1>
      <ul>
        <li>Change Password</li>
        <li>Change Display Name</li>
        <li>Change Profile Pic</li>
        <li>Privacy Settings</li>
      </ul>

      <div>
        <h3>Delete Account</h3>
        <p>
          By clicking the button below, the account for
          {{ this.$store.state.user.name }} will be permanently deleted and
          cannot be recovered. https://www.spods.app/{{
            this.$store.state.user.username
          }}
          will become available immediately after you press this button.
        </p>
        <button @click="deleteUser()">Delete Account</button>
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
