<template>
  <div class="border border-green-500 rounded">
    <div class="flex flex-row justify-around">
      <span @click="tab = 'mutual'">Mutual ( {{ mutualList.length }} )</span>
      <span @click="tab = 'following'"
        >Following ( {{ user.following.length }} )</span
      >
      <span @click="tab = 'followers'"
        >Followers ( {{ user.followers.length }} )</span
      >
    </div>
    <div v-if="tab === 'mutual'">
      <h3 class="text-2xl">Mutual</h3>
      <div v-for="x in mutualList" :key="x.id">
        <nuxt-link :to="x.username" class="hvr-forward">
          {{ x.username }}
        </nuxt-link>
      </div>
    </div>
    <div v-if="tab === 'following'">
      <h3 class="text-2xl">Following</h3>
      <div v-for="x in user.following" :key="x.id">
        <nuxt-link :to="x.username" class="hvr-forward">
          {{ x.username }}
        </nuxt-link>
      </div>
    </div>
    <div v-if="tab === 'followers'">
      <h3 class="text-2xl">Followers</h3>
      <div v-for="x in user.followers" :key="x.id">
        <nuxt-link :to="x.username" class="hvr-forward">
          {{ x.username }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConnectsList",
  data() {
    return {
      tab: "mutual",
      mutualList: this.getMutualFollows(
        this.$props.user.followers,
        this.$props.user.following
      )
    };
  },
  props: {
    user: Object
  },
  methods: {
    getMutualFollows(followers, following) {
      let mutualList = [];
      for (const x in followers) {
        for (const y in following) {
          if (followers[x].username === following[y].username)
            mutualList.push(followers[x]);
        }
      }
      return mutualList;
    }
  }
};
</script>
