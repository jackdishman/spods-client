<template>
  <div class="flex flex-wrap flex-row justify-center p-2">
    <span v-for="x in this.user.socialLinks" :key="x.platform">
      <Spod class="hvr-pulse" :platform="x.platform" :username="x.username" :privacy="x.privacy" />
    </span>
  </div>
</template>

<script>
import Spod from "../components/spod";
import { mapState } from "vuex";

export default {
  name: "SocialContainer",
  components: { 
    Spod
  },
  data() {
    return{
      targetUser: this.user
    }
  },
  props: 
    ['user']
};
</script>

<style>
</style>
