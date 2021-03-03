<template>
  <div class="w-full">
    <!-- Authenticated -->
    <nav v-if="$store.state.user !== null"></nav>
    <!-- Unauthenticated -->
    <nav v-else class="bg-color-dark shadow-lg fixed w-full z-50 bg-opacity-75">
        <div class="md:flex items-center justify-between py-2 px-8 md:px-12">
            <div class="flex justify-between items-center">
               <div class="text-2xl font-bold text-color-light md:text-3xl">
                <nuxt-link to="/" class="flex flex-row">
                  <div class="hvr-icon-spin">
                    <img
                      src="/images/spods-logo.png"
                      class="w-10 h-10 bg-color-light rounded-full hvr-icon border-2 border-black"
                    />
                  </div>
                  <h1 class="spods pl-2 pb-1">spods</h1>
                </nuxt-link>
               </div>
                <div class="md:hidden">
                  <button v-if="this.navOpen !== true" type="button" class="block text-gray-800 hover:text-gray-700 focus:text-gray-700 focus:outline-none" @click="toggleNav()">
                    <!-- Hamburger -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                  </button>
                  <div v-else @click="toggleNav()">
                    <button>
                      <!-- Close button -->
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
                        class="feather feather-x-circle"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="15" y1="9" x2="9" y2="15"></line>
                        <line x1="9" y1="9" x2="15" y2="15"></line>
                      </svg>                    
                    </button>
                    <div class="absolute flex flex-col right-0 w-full h-screen z-40">
                      <nuxt-link to="/manifesto" class="text-color-light bg-color-dark bg-opacity-75 mt-3 spods text-center p-2">Manifesto</nuxt-link>
                      <nuxt-link to="/auth" class="text-color-light bg-color-dark bg-opacity-75 spods text-center p-2">Authenticate</nuxt-link>
                    </div>
                  </div>
                </div>
            </div>
            <div class="flex flex-col md:flex-row hidden md:block -mx-2">
              <span class="animated headShake delay-4s hvr-grow">
                <nuxt-link to="/manifesto" class="text-color-light rounded hover:bg-green-400 hover:text-color-dark hover:font-medium py-2 px-2 md:mx-2 spods">Manifesto</nuxt-link>
              </span>
              <span class="animated headShake delay-5s hvr-grow">
                <nuxt-link to="/auth" class="text-color-light rounded hover:bg-green-400 hover:text-color-dark hover:font-medium py-2 px-2 md:mx-2 spods">Authenticate</nuxt-link>
              </span>
            </div>
        </div>
    </nav>



    <!-- content -->
    <nuxt />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      navOpen: false
    };
  },
  methods: {
    toggleNav() {
      this.navOpen = !this.navOpen
    },
  }
};
</script>
