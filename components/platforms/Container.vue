<template>
  <section id="PlatformsContainer" class="bg-black">
    <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 p-4">
      <div v-for="x in this.filteredList" :key="x.platform">
        <article
          class="h-24 flex flex-row items-center justify-center items-center border-t bg-white"
        >
          <a :href="getURL(x.platform, x.username)" target="_blank" rel="noreferrer">
            <PlatformLogo :platform="x.platform" />
          </a>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import PlatformLogo from "@/components/platforms/PlatformLogo";

import { mapState } from "vuex";

export default {
  name: "PlatformsContainer",
  components: {
    PlatformLogo
  },
  props: {
    user: Object,
    isFollowing: Boolean,
    followsBack: Boolean,
    isFriendOfFriend: Boolean,
  },
  data() {
    return {
      filteredList: []
    };
  },
  created: function() {
    for (var x in this.$props.user.socialLinks) {
      if (
        this.$props.user.socialLinks[x].privacy == 0 ||
        (this.$props.user.socialLinks[x].privacy == 1 &&
          this.$props.isFriendOfFriend) ||
        (this.$props.followsBack &&
          (this.$props.user.socialLinks[x].privacy == 2 ||
            this.$props.user.socialLinks[x].privacy == 1)) ||
        (this.$store.state.user !== null &&
          this.$props.user.username === this.$store.state.user.username)
      ) {
        this.filteredList.push(this.$props.user.socialLinks[x]);
      }
    }
  },

  methods: {
    getGlobalConfig(p) {
      let arr = this.$store.state.platforms;
      let obj = arr.find(o => o.name === p);
      return obj;
    },
    getURL(platform, username) {
      // store.state.platforms url + username
      let arr = this.$store.state.platforms;
      let obj = arr.find(o => o.name === platform);
      var url = obj.url + username;
      return url;
    },
    translatePrivacy(privacyIndex) {
      switch (privacyIndex) {
        case "0":
          return "Public";
        case "1":
          return "2nd Connects";
        case "2":
          return "Connects Only";
        case "3":
          return "Only You";
        default:
          "na";
      }
    }
  }
};
</script>

<style></style>
