<template>
  <section class="h-screen bg-black">
    <div v-if="$store.state.user !== null">

      <nuxt-link :to="$route.params" class="text-white">Back</nuxt-link>
      
      <button @click="toggle('platforms')" class="bg-yellow-500">Social Profiles</button>
      <button @click="toggle('content')" class="bg-yellow-500">Embed Content</button>

      <article v-if="this.activeType === 'content'">
        <AddContent />
      </article>

      <article v-if="this.activeType === 'platforms'">
        <PlatformSettings />
      </article>

    </div>
    <div v-else>
      Log In
    </div>
  </section>
</template>

<script>
import PlatformSettings from "@/components/platforms/Settings";
import AddContent from "@/components/content/AddContent";

export default {
  data () {
    return {
      activeType: null,
    }
  },
  components: {
    PlatformSettings,
    AddContent
  },
  methods: {
    toggle(type) {
      this.activeType = type;
    },
  }
}
</script>