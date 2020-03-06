<template>
  <div class="w-full spods bg-gray-100 pt-20">
    <div v-if="userData">
      <div class="flex flex-row justify-center">
        <div class="border border-green-500 rounded bg-white p-5">
          <h1 class="text-4xl text-center spods p-5">{{ userData.data.name }}</h1>
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

export default {
  data() {
    return {
      userData: null
    };
  },
  async created() {
    try {
      this.userData = await UserService.getUserData(this.$route.params.id);
    } catch (err) {
      console.log(err.message);
    }
  },
  components: {
    SocialContainer
  }
};
</script>
