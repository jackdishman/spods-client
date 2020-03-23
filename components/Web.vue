<template>
  <div class="border border-green-500 rounded">
    <!-- Web -->
      <cytoscape
        v-if="toggle"
        :config="generateLinksData(user)"
        :preConfig="preConfig"
        :afterCreated="afterCreated"
      ></cytoscape>
      <cytoscape
        v-else
        :config="generateConfig(user)"
        :preConfig="preConfig"
        :afterCreated="afterCreated"
      ></cytoscape>
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
    MenuIcon,
  },
  props: {
    user: Object,
  },
  data (){
    return {
      toggle: false,
    }
  },
  // computed: mapState(["user"]),
  methods: {
    preConfig(cytoscape) {
      // cytoscape: this is the cytoscape constructor
      cytoscape.use(cola);
    },
    generateConfig,
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
