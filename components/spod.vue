<template>
  <div>
    <a v-if="platformConfig.url" :href="link" target="_blank" rel="noreferrer" >
      <font-awesome-icon :icon="['fab', this.platform]" size="3x" :class="platform" />
    </a>
    <div v-else>
      <font-awesome-icon :icon="['fab', this.platform]" size="3x" :class="platform" />
      <h2>{{ username }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    platform: String,
    username: String,
    privacy: String,
  },
  data() {
    return {
      platformConfig: this.getGlobalConfig(),
      link: this.getGlobalConfig().url + this.username,
      color: this.getColor()
    }
  },
  methods: {
    getColor(){
      for(var p in this.$store.state["platforms"]){
        if(p.name === this.platform){
          this.color = p.color;
        }
      }
    },
    getGlobalConfig(){
      let arr = this.$store.state.platforms;
      let obj = arr.find(o => o.name === this.platform);
      return obj;
    }
  }
};
</script>