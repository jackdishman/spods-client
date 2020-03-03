<template>
    <button class="TierButton"> {{ TIER_CLASS }} </button>
</template>

<script>

export default {
  name: 'TierButton',
  components: {
  },
  props: {
      TIER_CLASS: String
  }
}
</script>

<style>
.TierButton {
    color:white;
    font-size: 16px;
    border-radius:4px;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    width: 125px;
    height: 35px;
    background: rgb(169, 72, 164);
    position: absolute;
    top: 30px;
    left: 30px;
}

.TierButton:focus{
    outline: 0;
}
</style>
