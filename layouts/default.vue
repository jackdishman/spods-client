<template>
  <div>
    <!-- content -->
    <nuxt />
  </div>
</template>

<script>
import Logo from "@/components/Logo";
import Vue from "vue";
import SearchBar from "@/components/Search";
import { mapState } from "vuex";
import { library } from "@fortawesome/fontawesome-svg-core";

export default {
  data() {
    return {};
  },
  methods: {
    toggleMobileNav() {
      this.$store.commit("TOGGLEMOBILEMENU");
    },
    logout() {
      this.$axios.setHeader({ Authorization: "" });
      this.$store.commit("SETTOKEN", null);
      this.$store.commit("SETUSER", null);
      this.$router.router.push('/');
    },
  },
  computed: mapState(["isMobileMenuOpen", "CHANGETAB"]),
  components: {},
};
</script>

<style></style>
