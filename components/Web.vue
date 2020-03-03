<template>
  <div class="w-100 h-100">
    <div class="flex flex-row">
      <!-- Left sidebar -->
      <div class="md:w-1/4 bg-green-100"></div>

      <!-- Web -->
      <div class="border w-full md:w-1/2">
        <cytoscape
          :config="generateLinksData(user)"
          :preConfig="preConfig"
          :afterCreated="afterCreated"
        ></cytoscape>
      </div>
      <!-- Right sidebar -->
      <div class="md:w-1/4 bg-blue-100"></div>
    </div>

    <div class="flex flex-row justify-center w-full">
      <button class="border rounded p-5 w-1/2 md:w-1/4">Social Links</button>
      <button class="border rounded p-5 w-1/2 md:w-1/4">Friends</button>
    </div>
  </div>
</template>

<script>
import MenuIcon from "vue-material-design-icons/Menu.vue";
import cola from "cytoscape-cola";
import { generateConfig } from "../assets/js/generateWebData";
import { generateLinksData } from "../assets/js/generateLinksData";
var cytoscape = require("cytoscape");
import { mapState } from "vuex";

export default {
  name: "Web",
  components: {
    MenuIcon
  },
  props: {
    user: Object
  },
  // computed: mapState(["user"]),
  methods: {
    preConfig(cytoscape) {
      // cytoscape: this is the cytoscape constructor
      cytoscape.use(cola);
    },
    generateLinksData,
    afterCreated(cy) {
      cy.resize();
      cy.fit();
    }
  }
};
</script>

<style>
#web {
  position: absolute;
  margin: auto;
  text-align: center;
}
</style>
