<template>
  <section>

    <!-- Add Embed Content Container -->
    <article v-if="isViewingSelf">
      <AddContent />
    </article>

    <article v-if="content.length > 0" class="text-white">
      <div v-for="x in content" :key="x.contentCode">
        <DisplayContent :html="x.contentCode" />
        <button v-if="isViewingSelf" class="bg-red-500" @click="removeContent(x.contentCode)">
          Remove Content
        </button>
      </div>
    </article>


  </section>
</template>

<script>
import DisplayContent from "@/components/content/DisplayContent";
import AddContent from "@/components/content/AddContent";
import url from "@/static/server";
import UserService from "@/middleware/UserService";

export default {
  components: {
    DisplayContent,
    AddContent
  },
  props: {
    content: Array,
    isViewingSelf: {
      type: Boolean,
      default: false
    },
  },
  methods: {
    async updateUser() {
      await UserService.getUserData(this.$store.state.user.username).then(
        res => {
          this.$store.commit("SETUSER", res.data);
        }
      );
    },
    async removeContent(html){
      const DNA = this.$store.state.user._id;
      this.$axios.setHeader("Authorization", this.$store.state.token);
      this.$axios.setToken(this.$store.state.token, "Bearer");
      try{
        await this.$axios.post(url + "/api/auth/content/delete", {
          DNA,
          html
        }).then(res => {
          this.updateUser();
          this.$toast.success("Content removed!");
        })
      }catch(err){
        this.$toast.error(err);
      }
    }
  }
}
</script>