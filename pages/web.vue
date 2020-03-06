<template>
  <div v-if="$auth.loggedIn">
    <Web :user="$auth.user" />
  </div>
</template>

<script>
import Web from "@/components/Web";

export default {
  // layout: "web",
  middleware: ["auth"],
  components: { Web }
};
</script>
