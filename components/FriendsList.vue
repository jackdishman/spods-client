<template>
  <div class="border border-green-500 bg-white rounded p-5">
    <h2 class="text-2xl">Friends List</h2>
    <div v-for="x in user.connections" :key="x.id" class="hvr-forward">
      <nuxt-link :to="x.username">
        {{ x.username }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "FriendsList",
  props: {
    user: Object
  },
}
</script>