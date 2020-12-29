<template>
  <section class="bg-black text-white">
      <article class="flex justify-center">
        <button @click="toggle()" class="bg-green-500 rounded p-2 text-2xl">Embed Content</button>
      </article>

      <article v-if="activeEdit" class="flex flex-col items-center p-3">
        <textarea
          v-model="contentCode"
          class="w-full text-black p-2 border-2 border-green-500 rounded "
          rows="4"
          placeholder="Paste code here"
        ></textarea>
        <button @click="submitNewContent" class="bg-green-500 rounded p-2 text-xl m-2">Add new Content</button>
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