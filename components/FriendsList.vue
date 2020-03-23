<template>
  <div class="">
    <h2 class="text-2xl">Friends List</h2>
    <div v-for="x in user.connections" :key="x.id">
      <nuxt-link :to="x.username" class="hvr-forward">
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