<template>
  <div class="w-full h-full spods">
    <div v-if="userData">
      <div class="flex flex-col lg:flex-row lg:justify-around">
        <div class="w-full order-2 mb-3 lg:order-first p-3 mt-5">
          <FriendsList :user="userData.data" />
        </div>
        <div class="w-full p-3 order-first mt-5">
          <h1 class="text-4xl text-center spodslg:order-2">
            {{ userData.data.name }}
          </h1>
          <ConnectsContainer
            :user="userData.data"
            :isFollowing="isFollowing()"
            :followsBack="followsBack()"
            class="p-5"
          />
          <PlatformsContainer
            :user="userData.data"
            :isFollowing="isFollowing()"
            :followsBack="followsBack()"
            :isFriendOfFriend="isFriendOfFriend()"
          />
        </div>
        <div class="w-full order-3 h-20 mb-24 mt-5 p-3">
          <Web :user="userData.data" />
        </div>
      </div>
      <div
        class="animated bounceInUp flex w-full flex-row justify-around fixed bottom-0 border-t border-green-500 bg-white"
      ></div>
    </div>
  </div>
</template>

<script>
import PlatformsContainer from "@/components/platforms/Container";
import UserService from "@/middleware/UserService";
import ConnectsContainer from "@/components/connects/Container";
import FriendsList from "@/components/connects/List";
import Web from "@/components/Web";

export default {
  data() {
    return {
      userData: null
    };
  },
  components: {
    PlatformsContainer,
    ConnectsContainer,
    FriendsList,
    Web
  },
  async created() {
    if (this.$auth.LoggedIn) {
      try {
        await UserService.getUserData(this.$auth.user.username).then(res => {
          this.$store.commit("SETUSER", res.data);
        });
      } catch (err) {
        console.log(err);
      }
    }
    try {
      this.userData = await UserService.getUserData(this.$route.params.id);
    } catch (err) {
      console.log(err.message);
    }
  },
  methods: {
    // is actionUser isFollowing targetUser? T/F
    isFollowing() {
      const u = this.$store.state.user.following;
      for (const x in u) {
        if (u[x].username === this.userData.data.username) {
          return true;
        }
      }
      return false;
    },
    // is targetUser following actionUser? T/F
    followsBack() {
      const u = this.userData.data.following;
      for (const x in u) {
        if (u[x].username === this.$store.state.user.username) {
          return true;
        }
      }
      return false;
    },
    // is targetUser following someone who follows actionuser?
    isFriendOfFriend() {
      if (!this.$auth.LoggedIn) return false;
      const u = this.userData.data.following;
      const username = this.$store.state.auth.user.username;
      for (const x in u) {
        let v = u[x].following;
        for (const y in v) {
          if (v[y].username === username) {
            return true;
          }
        }
      }
      return false;
    }
  }
};
</script>
