<template>
  <section class="text-green-600">

    <!--  YOUR OWN VIEW -->
    <article v-if="viewingSelf">
      THIS IS YOUR OWN VIEW
    </article>

    <!-- CONNECTION VIEW -->
    <article v-else-if="followsBack">
      Viewing a profile of someone that follows you
    </article>

    <!-- PUBLIC VIEW  -->
    <article v-else>
      Public View
    </article>
  </section>  
</template>

<script>
export default {
  data () {
    return {
      // targetU: this.$route.params._id,
      // actionU,
      // url,
      // heading,
      // subheading,
      // privacy,
      // type,
    }
  },
  props: {
    Title: String,
    viewingSelf: Boolean,
    followsBack: Boolean,

  }
}
</script>