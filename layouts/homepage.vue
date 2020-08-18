<template>
  <div class="bg-black h-auto min-h-full">
    <nuxt-link to='/' class="flex flex-row pl-4 pt-2">
      <div class="hvr-icon-spin pt-1">
        <img src="/images/spods-logo.png" class="w-10 h-10 bg-white rounded-full hvr-icon" />
      </div>
      <h1 class="spods text-3xl text-center text-green-500 pl-2">spods</h1>
    </nuxt-link>

    <!-- content -->
    <nuxt />
  </div>
</template>

<script>

export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style></style>
