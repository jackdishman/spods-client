<template>
  <div class="w-full h-auto bg-color-light">
    <!-- Logged in users -->
    <section v-if="$store.state.user" class="flex flex-col p-5">
      <!-- View Profile -->
      <nuxt-link
        :to="$store.state.user.username"
        class="border-2 m-2 border-green-500 rounded bg-white p-3 m-5 hvr-grow"
      >
        <h2 class="text-3xl text-center spods text-black">
          {{ $store.state.user.name }}
        </h2>
        <p class="text-md text-center spods text-green-500">
          View your Profile
        </p>
      </nuxt-link>

      <!-- Account Settings -->
      <nuxt-link
        to="/settings"
        class="border-2 m-2 border-green-500 rounded bg-white p-3 m-5 hvr-grow"
      >
        <h3 class="text-3xl text-center spods text-black">Account Settings</h3>
        <p class="text-md text-center spods text-green-500">
          Update account settings
        </p>
      </nuxt-link>

      <!-- Community -->
      <nuxt-link
        to="/community"
        class="border-2 m-2 border-green-500 rounded bg-white p-3 m-5 hvr-grow"
      >
        <h3 class="text-3xl text-center spods text-black">Community</h3>
        <p class="text-md text-center spods text-green-500">
          Explore the community around you through a list of all accounts
        </p>
      </nuxt-link>

      <div class="bg-white">
        <span id="extole_zone_mobile_footer"></span>
      </div>

      <!-- Log Out -->
      <button
        @click="logout()"
        class="text-black bg-red-500 border-2 m-2 border-white rounded p-3 m-5 hvr-grow"
      >
        <h3 class="text-3xl text-center spods text-black">Log Out</h3>
      </button>

      <!-- Search Users -->
      <!-- View Community -->
      <!-- Questionnaire -->
    </section>

    <!-- Logged out / unregistered user -->
    <div v-else>

      <!-- Header Card -->
      <section class="w-full">
          <div class="flex bg-color-light" style="height:600px;">
              <div class="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
                  <div>
                      <h2 class="text-3xl font-semibold text-color-dark md:text-4xl">Your Crypto <span class="text-green-500 spods">Identity</span></h2>
                      <p class="mt-2 text-sm text-gray-500 md:text-base">Integrate social media channels onto the Etherum blockchain in the form of a ERC-721 Non-Fungible Token (NFT)</p>
                      <div class="flex justify-center lg:justify-start mt-6">
                          <nuxt-link to="/auth" class="px-4 py-3 bg-color-dark text-color-light text-xs font-semibold rounded hover:bg-green-400 hover:text-color-dark">Get Started</nuxt-link>
                          <nuxt-link to="/manifesto" class="mx-4 px-4 py-3 bg-green-500 text-color-light text-xs font-semibold rounded hover:bg-green-400 hover:text-color-dark">Learn More</nuxt-link>
                      </div>
                  </div>
              </div>
              <div class="hidden lg:block lg:w-1/2" style="clip-path:polygon(10% 0, 100% 0%, 100% 100%, 0 100%)">
                  <div class="h-full object-cover" style="background-image: url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80)">
                      <div class="h-full bg-black opacity-25"></div>
                  </div>
              </div>
          </div>
      </section>




      

      <section class="max-w-5xl mx-auto py-10">
        <div>
            <div class="flex flex-row">
              <div class="hidden md:flex flex-col items-center">
                  <div class="w-32 py-5 border border-color-dark rounded mr-4 uppercase flex flex-col items-center justify-center bg-white shadow-md">
                    <div class="text-3xl font-black text-color-dark">Step 1</div>
                    <div class="text-green-500 text-sm">Authenticate</div>
                  </div>
                  <div class="h-full border-l-4 border-transparent">
                    <div class="border-l-4 mr-4 h-full border-green-500 border-dashed"></div>
                  </div>
              </div>
              <div class="flex-auto">
                  <div class="flex md:flex-row flex-col items-center">
                    <div class="flex-auto">
                        <div class="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-color-dark"><span class="font-black">Step 1</span> - Authenticate</div>
                        <div class="p-3 text-3xl text-green-500 font spods">Join the spods community</div>
                        <div class="px-3 pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim consequatur nihil ipsum.</div>
                    </div>
                    <div class="md:w-96 w-full p-5">
                      <enterLogo class="w-32 h-32 object-scale-down" />
                    </div>
                  </div>
              </div>
            </div>
            <div class="flex items-start flex-row">
              <div class="border-t-4 border-r-4 border-transparent">
                  <div class="w-16 ml-16 h-16 border-l-4 border-green-500 border-dashed border-b-4 rounded-bl-full"></div>
              </div>
              <div class="border-t-4 border-transparent flex-auto">
                  <div class="h-16 border-b-4 border-green-500 border-dashed"></div>
              </div>
              <div class="w-16 mt-16 mr-16 h-16 border-r-4 border-green-500 border-dashed border-t-4 rounded-tr-full"></div>
            </div>
            <div class="flex flex-row-reverse">
              <div class="hidden md:flex flex-col items-center">
                  <div class="w-32 py-5 border border-color-dark rounded ml-4 uppercase flex flex-col items-center justify-center bg-white shadow-md">
                    <div class="text-3xl font-black text-color-dark">Step 2</div>
                    <div class="text-green-500 text-sm">Personalize</div>
                  </div>
                  <div class="h-full border-r-4 border-transparent">
                    <div class="border-l-4 ml-4 h-full border-green-500 border-dashed"></div>
                  </div>
              </div>
              <div class="flex-auto">
                  <div class="flex md:flex-row flex-col items-center">
                    <div class="flex-auto">
                        <div class="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-color-dark"><span class="font-black">Step 2</span> - Personalize</div>
                        <div class="p-3 text-3xl text-green-500 font spods">Document your online identities</div>
                        <div class="px-3 pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim consequatur nihil ipsum.</div>
                    </div>
                    <div class="md:w-96 w-full p-5">
                      <fingerprintLogo class="w-32 h-32 object-scale-down" />
                    </div>
                  </div>
              </div>
            </div>
            <div class="flex items-start flex-row-reverse">
              <div class="border-t-4 border-l-4 border-transparent">
                  <div class="w-16 mr-16 h-16 border-r-4 border-green-500 border-dashed border-b-4 rounded-br-full"></div>
              </div>
              <div class="border-t-4 border-transparent flex-auto">
                  <div class="h-16 border-b-4 border-green-500 border-dashed"></div>
              </div>
              <div class="w-16 mt-16 ml-16 h-16 border-l-4 border-green-500 border-dashed border-t-4 rounded-tl-full"></div>
            </div>
            <div class="flex flex-row">
              <div class="hidden md:flex flex-col items-center">
                  <div class="w-32 py-5 border border-color-dark rounded mr-4 uppercase flex flex-col items-center justify-center bg-white shadow-md">
                    <div class="text-3xl font-black text-color-dark">Step 3</div>
                    <div class="text-green-500 text-sm">Publish</div>
                  </div>
                  <div class="h-full border-l-4 border-transparent">
                    <div class="border-l-4 mr-4 h-full border-green-500 border-dashed"></div>
                  </div>
              </div>
              <div class="flex-auto">
                  <div class="flex md:flex-row flex-col items-center">
                    <div class="flex-auto">
                        <div class="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-color-dark"><span class="font-black">Step 3</span> - Publish</div>
                        <div class="p-3 text-3xl text-green-500 font spods">Add yourself to the blockchain</div>
                        <div class="px-3 pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim consequatur nihil ipsum.</div>
                    </div>
                    <div class="md:w-96 w-full p-5">
                      <blockchainLogo class="w-32 h-32 object-scale-down" />
                    </div>
                  </div>
              </div>
            </div>
            <div class="flex items-start flex-row">
              <div class="border-t-4 border-r-4 border-transparent">
                  <div class="w-16 ml-16 h-16 border-l-4 border-green-500 border-dashed border-b-4 rounded-bl-full"></div>
              </div>
              <div class="border-t-4 border-transparent flex-auto">
                  <div class="h-16 border-b-4 border-green-500 border-dashed"></div>
              </div>
              <div class="w-16 mt-16 mr-16 h-16 border-r-4 border-green-500 border-dashed border-t-4 rounded-tr-full"></div>
            </div>
            <div class="flex flex-row-reverse">
              <div class="hidden md:flex flex-col items-center">
                  <div class="w-32 py-5 border border-color-dark rounded ml-4 uppercase flex flex-col items-center justify-center bg-white shadow-md">
                    <div class="text-3xl font-black text-color-dark">Step 4</div>
                    <div class="text-green-500 text-sm">Share</div>
                  </div>
              </div>
              <div class="flex-auto">
                  <div class="flex md:flex-row flex-col items-center">
                    <div class="flex-auto">
                        <div class="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-color-dark"><span class="font-black">Step 4</span> - Share</div>
                        <div class="p-3 text-3xl text-green-500 font spods">Spread the spods movement</div>
                        <div class="px-3 pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim consequatur nihil ipsum.</div>
                    </div>
                    <div class="md:w-96 w-full p-5">
                      <networkLogo class="w-32 h-32 object-scale-down" />
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </section>









      <!-- component -->
      <div>
          <div class="bg-gray-100 lg:py-12 lg:flex lg:justify-center">
              <div class="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
                  <div class="lg:w-1/2">
                      <div class="h-64 bg-cover lg:rounded-lg lg:h-full" style="background-image:url('https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80')"></div>
                  </div>
                  <div class="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
                      <h2 class="text-3xl text-gray-800 font-bold">Build Your New <span class="text-indigo-600">Idea</span></h2>
                      <p class="mt-4 text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi reprehenderit vitae exercitationem aliquid dolores ullam temporibus enim expedita aperiam mollitia iure consectetur dicta tenetur, porro consequuntur saepe accusantium consequatur.</p>
                      <div class="mt-8">
                          <a href="#" class="bg-gray-900 text-gray-100 px-5 py-3 font-semibold rounded">Start Now</a>
                      </div>
                  </div>
              </div>
          </div> 
      </div>






    </div>

    <span id="extole_zone_overlay"></span>
  </div>
</template>

<script>
import { mapState } from "vuex";
import UserAuthForm from "@/components/UserAuthForm";
import Search from "@/components/Search";
import UserService from "@/middleware/UserService";
import networkLogo from "@/components/icons/network";
import fingerprintLogo from "@/components/icons/fingerprint";
import blockchainLogo from "@/components/icons/blockchain";
import enterLogo from "@/components/icons/enter";

export default {
  head() {
    return {
      title:
        "spods - social media contact directory platform to organize online profiles",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Explore the spods community by searching for user social media profiles"
        }
      ]
    };
  },
  layout: "external",
  components: {
    UserAuthForm,
    Search,
    networkLogo,
    fingerprintLogo,
    blockchainLogo,
    enterLogo
  },
  async created() {
    if (this.$store.state.user) {
      try {
        await UserService.getUserData(this.$store.state.user.username).then(
          res => {
            this.$store.commit("SETUSER", res.data);
          }
        );
      } catch (err) {
        console.log(err);
      }
    }
  },
  computed: mapState(["user", "isLoggedIn"]),
  methods: {
    logout() {
      this.$axios.setHeader({ Authorization: "" });
      this.$store.commit("SETTOKEN", null);
      this.$store.commit("SETUSER", null);
    }
  },
  mounted() {
    // (function(c,b,f,k,a){c[b]=c[b]||{};for(c[b].q=c[b].q||[];a<k.length;)f(k[a++],c[b])})(window,"extole",function (c,b){b[c]=b[c]||function (){b.q.push([c,arguments])}},["createZone"],0);
    // extole.createZone({
    //     name: "overlay",
    //     element_id: 'extole_zone_overlay',
    //     data: {

    //     }
    // });
    (function(c, b, f, k, a) {
      c[b] = c[b] || {};
      for (c[b].q = c[b].q || []; a < k.length; ) f(k[a++], c[b]);
    })(
      window,
      "extole",
      function(c, b) {
        b[c] =
          b[c] ||
          function() {
            b.q.push([c, arguments]);
          };
      },
      ["createZone"],
      0
    );
    extole.createZone({
      name: "mobile_footer",
      element_id: "extole_zone_mobile_footer",
      data: {}
    });
  }
  // middleware:['index']
};
</script>
