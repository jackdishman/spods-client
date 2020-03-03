<template>
  <div class="bg-gray-100">
    <div class="flex flex-row justify-center m-10 ">
      <SocialSettings />
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
