<template>
  <section class="bg-black text-white">

      <button @click="toggle()" class="bg-yellow-500">Embed Content</button>
      
      <article v-if="activeEdit">
        <textarea
        v-model="contentCode"
        class="w-full text-black"
        rows="4"
        placeholder="Paste code here"
      ></textarea>
      <button @click="submitNewContent">Add new Content</button>
      </article>
     
  </section>
</template>

<script>
import PlatformSettings from "@/components/platforms/Settings";
import url from "@/static/server";
import UserService from "@/middleware/UserService";
import { mapState } from "vuex";

export default {
  data() {
    return {
      contentCode: null,
      activeEdit: false
    };
  },
  methods: {
    toggle(){
      this.activeEdit = !this.activeEdit;
    },
    async updateUser() {
      await UserService.getUserData(this.$store.state.user.username).then(
        res => {
          this.$store.commit("SETUSER", res.data);
        }
      );
    },
    async submitNewContent() {
      if (this.contentCode === null) {
        this.$toast.error("NULL code!");
      } else {
        const DNA = this.$store.state.user._id;
        this.$axios.setHeader("Authorization", this.$store.state.token);
        this.$axios.setToken(this.$store.state.token, "Bearer");
        try {
          let contentCode = this.contentCode;
          await this.$axios.post(url + "/api/auth/content", {
            DNA,
            contentCode,
          })
          .then(res => {
            this.updateUser();
            this.$toast.success("Embedded!");
          });
        } catch (err) {
          this.$toast.error(err);
        }
      }
    },
  },
  components: {
    PlatformSettings,
  },
};
</script>