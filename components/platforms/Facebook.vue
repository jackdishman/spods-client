<template>
  <section class="bg-white">
    <h2>{{ this.$props.verified.name }}</h2>
    <img :src="this.$props.verified.picture.data.url" :width="this.$props.verified.picture.data.width" :height="this.$props.verified.picture.data.height" />
    <h3>Friends: {{ this.$props.verified.friends.summary.total_count }}</h3>
    <a class="text-green-500 text-xl" :href="this.$props.verified.link" target="_blank" rel="noreferrer">Visit Profile</a>
  </section>
</template>

<script>
export default {
  props: {
    verified: Object
  }
}
</script>