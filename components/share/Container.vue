<template>

  <section class="w-full bg-white text-center">
    <h6 class="pt-5">Scan this code using your mobile phone camera</h6>
    <QRCode :username="this.$route.params.id" />
    <ExportURL :username="this.$route.params.id" class="flex justify-center" />
  </section>

</template>

<script>
import QRCode from "@/components/share/QRCode";
import ExportURL from "@/components/share/ExportURL";

export default {
  components: {
    QRCode,
    ExportURL
  }
}
</script>