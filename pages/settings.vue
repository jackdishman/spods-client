<template>
  <div class="bg-gray-100">
    <div class="flex flex-row justify-center m-10 ">
      <SocialSettings :existingProfileList="$auth.user.socialLinks" />
    </div>
  </div>
</template>

<script>
import SocialSettings from "../components/SocialSettings";

export default {
  middleware: ["auth"],
  components: {
    SocialSettings
  }
};
</script>
