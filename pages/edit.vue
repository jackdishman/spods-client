<template>
  <section>
    <div v-if="$store.state.user !== null">
      <PlatformSettings />
    </div>
    <div v-else>
      Log In
    </div>
  </section>
</template>

<script>
import PlatformSettings from "@/components/platforms/Settings";

export default {
  components: {
    PlatformSettings
  }
}
</script>