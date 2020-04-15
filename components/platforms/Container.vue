<template>
  <div class="flex flex-col w-full">
    <div v-for="x in this.user.socialLinks" :key="x.platform">
      <div
        v-if="
          x.privacy == 0 ||
            (x.privacy == 1 && isFriendOfFriend) ||
            (followsBack && (x.privacy == 2 || x.privacy == 1)) ||
            ($store.state.user !== null &&
              user.username === $store.state.user.username)
        "
        class="p-2 border rounded"
      >
        <a
          v-if="getGlobalConfig(x.platform).url && x.username"
          :href="getGlobalConfig(x.platform).url + x.username"
          target="_blank"
          rel="noreferrer"
        >
          <div class="flex flex-row">
            <PlatformLogo
              class="hvr-pulse pl-1 pr-1"
              :platform="x.platform"
              :privacy="x.privacy"
            />
            <div class="flex flex-col">
              <h3 class="text-xs">
                {{ getGlobalConfig(x.platform).handle + x.username }}
              </h3>
              <h3 class="text-sm">
                Privacy Level:
                <span class="text-green-500">
                  {{ translatePrivacy(x.privacy) }}</span
                >
              </h3>
              <h3 class="text-sm">
                Clicks:
              </h3>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
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
    isFriendOfFriend: Boolean
  },
  methods: {
    getGlobalConfig(p) {
      let arr = this.$store.state.platforms;
      let obj = arr.find(o => o.name === p);
      return obj;
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
