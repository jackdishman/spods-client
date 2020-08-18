<template>
  <section class="w-64 bg-white border-2" :style="borderColor">

    <article class="border-b-2" :style="borderColor">
      <img :src="this.$props.verified.photos[2].value" />
    </article>

    <article>
      <h2 class="font-bold text-2xl text-center">{{ this.$props.verified.displayName }}</h2>
    </article>

    <article class="flex justify-center p-2">
      <img class="w-10" src="@/static/images/brands/linkedin.png" />
    </article>

  </section>
</template>

<script>
export default {
  props: {
    verified: Object,
    config: Object
  },
  computed: {
    borderColor() {
      return "border-color: " + this.config.color + ";";
    },
    backgroundColor() {
      return "background-color: " + this.config.color + ";";
    }
  }
}
</script>