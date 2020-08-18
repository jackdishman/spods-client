<template>
  <section class="bg-white">
    <h2>{{ this.$props.verified.me.displayName }}</h2>
    <img :src="this.$props.verified.me.bitmoji.avatar" alt="">
  </section>
</template>

<script>
export default {
  props: {
    verified: Object
  }
}
</script>