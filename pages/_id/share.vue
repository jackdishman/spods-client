<template>
  <div class="bg-black">
    <h1 class="text-white text-4xl text-center spods pt-5">
      {{ this.$route.params.id }}
    </h1>

    <div class="flex justify-center pt-5 pb-10">
      <QRCode :username="this.$route.params.id" />
    </div>

    <div class="bg-white">
      <ExportURL :username="this.$route.params.id" class="p-2" />
    </div>

    <div class="flex justify-center pt-10">
      <nuxt-link :to="'/' + this.$route.params.id">
        <h4 class="text-white text-3xl text-center w-40 border border-white rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="inline feather feather-chevron-left"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>

          Back

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="inline feather feather-chevron-left"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </h4>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import QRCode from "@/components/share/QRCode";
import ExportURL from "@/components/share/ExportURL";

export default {
  
  components: {
    QRCode,
    ExportURL
  }
};
</script>
