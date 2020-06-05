<template>
  <div class=" w-full border border-green-500 rounded">
    <!-- Selector bar -->
    <div class="flex flex-row justify-around">
      <span v-if="tab == 'following'" class="text-green-500 text-bold text-xl"
        >Following ( {{ user.following.length }} )</span
      >
      <span v-else @click="tab = 'following'">Following</span>
      <span v-if="tab == 'mutual'" class="text-green-500 text-bold text-xl"
        >Mutual ( {{ mutualList.length }} )</span
      >
      <span v-else @click="tab = 'mutual'">Mutual</span>
      <span v-if="tab == 'followers'" class="text-green-500 text-bold text-xl"
        >Followers ( {{ user.followers.length }} )</span
      >
      <span v-else @click="tab = 'followers'">Followers </span>
    </div>

    <!-- List -->
    <div v-if="tab === 'mutual'" class="pl-1">
      <div v-for="x in mutualList" :key="x">
        <nuxt-link :to="x" class="hvr-forward">
          {{ x }}
        </nuxt-link>
      </div>
    </div>
    <div v-if="tab === 'following'" class="pl-1">
      <div v-for="x in user.following" :key="x">
        <nuxt-link :to="x" class="hvr-forward">
          {{ x }}
        </nuxt-link>
      </div>
    </div>
    <div v-if="tab === 'followers'" class="pl-1">
      <div v-for="x in user.followers" :key="x">
        <nuxt-link :to="x" class="hvr-forward">
          {{ x }}
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
      if(followers.length > following.length){
        for(let x in following){
          if(followers.includes(following[x])){
            mutualList.push(following[x])
          }
        }
      }
      else{
        for(let x in followers){
          if(following.includes(followers[x])){
            mutualList.push(followers[x]);
          }
        }
      }
      return mutualList;
    }
  }
};
</script>
