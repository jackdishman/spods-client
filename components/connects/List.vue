<template>
  <div class=" w-full border-t-4 border-green-500 rounded">
    <!-- Selector bar -->
    <div
      class="flex flex-row bg-black text-white spods text-center items-center"
    >
      <span
        v-if="tab == 'following'"
        class="bg-green-500 rounded-br-lg w-1/3 py-2"
      >
        <h3 class="text-bold text-xl">Following</h3>
        <h6 class="text-base">( {{ user.following.length }} )</h6>
      </span>
      <button
        v-else
        @click="tab = 'following'"
        class="w-1/3 text-lg focus:outline-none"
      >
        Following
      </button>
      <span
        v-if="tab == 'mutual'"
        class="bg-green-500 rounded-b-lg w-1/3 py-2"
      >
        <h3 class="text-bold text-xl">Mutual</h3>
        <h6 class="text-base">( {{ mutualList.length }} )</h6></span
      >
      <button
        v-else
        @click="tab = 'mutual'"
        class="w-1/3 text-lg focus:outline-none"
      >
        Mutual
      </button>
      <span
        v-if="tab == 'followers'"
        class="bg-green-500 rounded-bl-lg w-1/3 py-2"
      >
        <h3 class="text-bold text-xl">Followers</h3>
        <h6 class="text-base">( {{ user.followers.length }} )</h6></span
      >
      <button
        v-else
        @click="tab = 'followers'"
        class="w-1/3 text-lg focus:outline-none"
      >
        Followers
      </button>
    </div>

    <!-- List -->
    <article class="text-center text-xl spods text-green-500 pt-2">
    <div v-if="tab === 'mutual'" >
      <div v-for="x in mutualList" :key="x">
        <nuxt-link :to="x" class="hvr-forward">
          {{ x }}
        </nuxt-link>
      </div>
    </div>
    <div v-if="tab === 'following'" >
      <div v-for="x in user.following" :key="x">
        <nuxt-link :to="x" class="hvr-forward">
          {{ x }}
        </nuxt-link>
      </div>
    </div>
    <div v-if="tab === 'followers'">
      <div v-for="x in user.followers" :key="x">
        <nuxt-link :to="x" class="hvr-forward">
          {{ x }}
        </nuxt-link>
      </div>
    </div>
    </article>
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
      if (followers.length > following.length) {
        for (let x in following) {
          if (followers.includes(following[x])) {
            mutualList.push(following[x]);
          }
        }
      } else {
        for (let x in followers) {
          if (following.includes(followers[x])) {
            mutualList.push(followers[x]);
          }
        }
      }
      return mutualList;
    }
  }
};
</script>
