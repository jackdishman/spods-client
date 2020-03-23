<template>
  <div class="w-full h-full spods bg-gray-100">
    <div v-if="userData">
      <div class="flex flex-col lg:flex-row lg:justify-around">

        <div class="w-full lg:w-1/3 order-2 mb-3 lg:order-first p-3 mt-5">
          <FriendsList :user="userData.data" />
        </div>

        <div class="w-full lg:w-1/3 p-3 order-first mt-5">
          <div class="  p-5">
            <h1 class="text-4xl text-center spodslg:order-2">
              {{ userData.data.name }}
            </h1>
            <AddFriend :user="userData.data" :status="isFollowing()" />
          </div>
        </div>

        <div class="w-full order-3 lg:w-1/3 h-20 mb-24 mt-5 p-3">
          <Web :user="userData.data" />
        </div>

        <SocialContainer
          class="animated bounceInUp flex w-full flex-row justify-around fixed bottom-0 border-t border-green-500 bg-white"
          :user="userData.data"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SocialContainer from "@/components/SocialContainer";
import UserService from "@/middleware/UserService";
import AddFriend from "@/components/AddFriend";
import FriendsList from "@/components/FriendsList";
import Web from "@/components/Web";

export default {
  data() {
    return {
      userData: null
    };
  },
  async mounted() {
    try {
      this.userData = await UserService.getUserData(this.$route.params.id);
    } catch (err) {
      console.log(err.message);
    }
  },
  components: {
    SocialContainer,
    AddFriend,
    FriendsList,
    Web
  },
  methods: {
    isFollowing() {
      const u = this.$store.state.user.connections;
      for (const x in u) {
        if (u[x].username === this.userData.data.username) {
          this.isFollowing = true;
          return true;
        }
      }
      return false;
    }
  }
};
</script>
