<template>
  <div class="p-10 h-screen h-auto ">
    <div
      class="m-1 p-1 text-center"
      v-for="(user, index) in users"
      v-bind:item="user"
      v-bind:index="index"
      v-bind:key="user._id"
      v-on:dblclick="deleteUser(user._id)"
    >
      <nuxt-link :to="user.username" class='text-lg text-green-500'>
        {{ user.name }}
      </nuxt-link>
    </div>
    <h3 v-if="error">{{ error }}</h3>
  </div>
</template>

<script>
import UserService from "@/middleware/UserService";
export default {
  data() {
    return {
      users: [],
      error: null
    };
  },
  async created() {
    try {
      this.users = await UserService.getUsers();
    } catch (err) {
      this.error = err.message;
    }
  },
  methods: {
    async deleteUser(id) {
      await UserService.deleteUser(id);
      this.users = await UserService.getUsers();
    }
  }
};
</script>
