<template>
  <!-- Search User -->
  <div>
    <div v-if="isSearchOpen" class="pt-2 relative mx-auto text-gray-600">
      <input
        class="spods border-2 border-gray-300 bg-white h-10 pl-2 pr-16 rounded-lg text-sm focus:outline-none focus:bg-green-100 focus:border-green-500"
        type="search"
        name="search"
        v-model="target"
        placeholder="Search spods"
      />
      <button
        type="submit"
        class="absolute right-0 top-0 mt-4 mr-4 outline-none focus:shadow-outline "
        @click="searchUser(target)"
      >
        <font-awesome-icon
          :icon="['fa', 'search']"
          size="1x"
          style="color:gray"
        />
      </button>

      <font-awesome-icon
        @click="closeSearchBar"
        :icon="['fas', 'times']"
        size="1x"
        style="color:gray"
      />
    </div>
    <div v-else @click="closeSearchBar">
      <font-awesome-icon
        :icon="['fa', 'search']"
        size="1x"
        style="color:gray"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data: function() {
    return {
      target: "",
      isOpen: false
    };
  },
  methods: {
    searchUser() {
      console.log(this.target);
    }
  },
  computed: mapState(["isSearchOpen"]),
  methods: {
    closeSearchBar() {
      this.$store.commit("TOGGLESEARCHBAR");
    }
  }
};
</script>

<style lang="stylus"></style>
