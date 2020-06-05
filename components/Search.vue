<template>
  <div>
    <input id="searchInput" type="text" class="border shadow rounded border-0 p-3" placeholder="Search..." @keyup="">
    <button @click="searchUser" class="p-3 border bg-green-500 rounded border">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
    </button>
  </div>
</template>

<script>
import url from "@/static/server.js";

export default {
  name: 'SearchBar',
  methods: {
    async searchUser() {
      var letters = /^[a-zA-Z\s\-]*$/;
      var username = document.getElementById('searchInput').value; 
      if (
        username === "" ||
        !letters.test(username)
      ) {
        this.$toast.error("Only Letters and - allowed!");
        return;
      } else {
        username = username.trim();
        username = username.replace(/ /g, "-");
        username = username.toLowerCase();
        var res = await this.$axios
          .get(url + "/users/isExistingUser/" + username)
          .then(res => {
            console.log(res);
          });
      }
    }
  },
};
</script>
