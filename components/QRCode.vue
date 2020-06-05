<template>
  <div :id="'QRContainer-' + this.$props.username">
    <vue-qr
      :text="'https://www.spods.app/' + this.$props.username"
      :qid="'QR-' + this.$props.username"
    />
  </div>
</template>

<script>
import VueQr from "vue-qr";
export default {
  props: {
    username: String
  },
  components: {
    VueQr
  }
};
</script>
