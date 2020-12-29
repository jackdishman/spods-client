<template>
  <section id="PlatformsContainer" class="bg-black">

    <!-- 
      Verified Section
        - Twitter
        - LinkedIn
        - Spotify
     -->

    <article class="flex flex-col md:flex-row justify-around items-center">
      <div v-for="x in this.verifiedPlatforms" :key="x.platform" class="p-2">
        <Spotify v-if="x.platform === 'spotify'" :verified="x.verified" :config="getGlobalConfig('spotify')" />
        <Twitter v-if="x.platform === 'twitter'" :verified="x.verified" :config="getGlobalConfig('twitter')" />
        <Linkedin v-if="x.platform === 'linkedin'" :verified="x.verified" :config="getGlobalConfig('linkedin')" />
        <!-- <Snapchat v-if="x.platform === 'snapchat'" :verified="x.verified" />
        <Facebook v-if="x.platform === 'facebook'" :verified="x.verified" /> -->
        
      </div>
    </article>

    <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
      <div v-for="x in this.filteredList" :key="x.platform">
        <article
          class="h-24 flex flex-row items-center justify-center items-center border-t bg-white"
        >
          <div v-if="!getURL(x.platform, x.username) == false">
            <a :href="getURL(x.platform, x.username)" target="_blank" rel="noreferrer">
              <PlatformLogo :platform="x.platform" class="hvr-grow" />
            </a>
          </div>
          <div v-else class="flex flex-col items-center">
            <PlatformLogo :platform="x.platform" class="hvr-grow" />
            <h4 class="text-center spods text-xs">{{ x.username }}</h4>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import PlatformLogo from "@/components/platforms/PlatformLogo";
import Spotify from "@/components/platforms/Spotify";
import Twitter from "@/components/platforms/Twitter";
import Linkedin from "@/components/platforms/Linkedin";
import Snapchat from "@/components/platforms/Snapchat";
import Facebook from "@/components/platforms/Facebook";
import { mapState } from "vuex";

export default {
  name: "PlatformsContainer",
  components: {
    PlatformLogo,
    Spotify,
    Twitter,
    Linkedin,
    Snapchat,
    Facebook
  },
  props: {
    user: Object,
    isFollowing: Boolean,
    followsBack: Boolean,
    isFriendOfFriend: Boolean,
  },
  data() {
    return {
      // List of privacy-filtered social link data.
      filteredList: [],
      verifiedPlatforms: [],
    };
  },
  created: function() {
    // Populates filteredList in data()
    for (var x in this.$props.user.socialLinks) {
      // Check if privacy of targetUser allows access to actionUser
      let platformObj = this.$props.user.socialLinks[x];
      if (
        platformObj.privacy == 0 ||
        (platformObj.privacy == 1 &&
          this.$props.isFriendOfFriend) ||
        (this.$props.followsBack &&
          (platformObj.privacy == 2 ||
            platformObj.privacy == 1)) ||
        (this.$store.state.user !== null &&
          this.$props.user.username === this.$store.state.user.username)
      ) {
        let platformConfig = this.getGlobalConfig(platformObj.platform);
        if(platformConfig.verified === true){
          this.verifiedPlatforms.push(platformObj);
        }else{
          this.filteredList.push(platformObj);
        }
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
      if(obj.url == false){
        return false;
      }else{
        var url = obj.url + username;
        return url;
      }
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

