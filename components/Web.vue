<template>
  <div class="border-t-4 border-green-500 bg-white">
    <!-- Web -->
    <cytoscape
      :config="generateConfig(user)"
      :preConfig="preConfig"
      :afterCreated="afterCreated"
    ></cytoscape>
  </div>
</template>

<script>
import cola from "cytoscape-cola";
import { generateConfig } from "../assets/js/generateWebData";
import { generateLinksData } from "../assets/js/generateLinksData";
var cytoscape = require("cytoscape");
import { mapState } from "vuex";

export default {
  name: "Web",
  props: {
    user: Object
  },
  methods: {
    preConfig(cytoscape) {
      // cytoscape: this is the cytoscape constructor
      cytoscape.use(cola);
    },
    generateConfig,
    generateLinksData,
    afterCreated(cy) {
      cy.resize();
      cy.userZoomingEnabled(false);
      cy.fit();
    }
  }
};
</script>
