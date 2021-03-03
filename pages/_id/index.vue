<template>
  <div class="">












<script defer src="https://use.fontawesome.com/releases/v5.14.0/js/all.js"></script>


<section v-if="userData" class="h-screen w-screen bg-gray-200 flex flex-col-reverse sm:flex-row min-h-0 min-w-0 overflow-hidden">
  <!-- sidebar nav -->
  <aside class="sm:h-full sm:w-16 w-full h-12 bg-gray-800 text-gray-200">
    <ul class="text-center flex flex-row sm:flex-col w-full">
      <li class="h-14 border-b border-gray-900 hidden sm:block">
        <a id="page-icon" href="/" class="h-full w-full hover:bg-color-dark block p-3">
          <div class="hvr-icon-spin">
            <img
              src="/images/spods-logo.png"
              class="object-contain w-full h-full bg-color-light rounded-full hvr-icon border-2 border-black"
            />
          </div>
        </a>
      </li>
      <!-- Platforms -->
      <li class="sm:border-b border-gray-900 flex-1 sm:w-full" title="Platforms">
        <button v-if="this.currentContainer !== 'platforms'" @click="toggleContainer('platforms')" class="h-full w-full hover:bg-green-500 block p-3">
          <platformSquaresLogo class="inline" />
        </button>
        <button v-else class="h-full w-full bg-green-500 block p-3">
          <platformSquaresLogo class="inline" />
        </button>
      </li>
      <!-- Connections -->
      <li class="sm:border-b border-gray-900 flex-1 sm:w-full" title="Connections">
        <button v-if="this.currentContainer !== 'connections'" @click="toggleContainer('connections')" class="h-full w-full hover:bg-green-500 block p-3">
          <userIconLogo class="inline" />
        </button>
        <button v-else class="h-full w-full bg-green-500 block p-3">
          <userIconLogo class="inline" />
        </button>
      </li>
      <!-- Share -->
      <li class="sm:border-b border-gray-900 flex-1 sm:w-full" title="Share">
        <button v-if="this.currentContainer !== 'share'" @click="toggleContainer('share')" class="h-full w-full hover:bg-green-500 block p-3">
          <shareLogo class="inline" />
        </button>
        <button v-else class="h-full w-full bg-green-500 block p-3">
          <shareLogo class="inline" />
        </button>
      </li>
      <!-- Edit (logged in) -->
      <li v-if="isViewingSelf()" class="sm:border-b border-gray-900 flex-1 sm:w-full" title="Edit">
        <button v-if="this.currentContainer !== 'edit'" @click="toggleContainer('edit')" class="h-full w-full hover:bg-green-500 block p-3">
          <editLogo class="inline" />
        </button>
        <button v-else class="h-full w-full bg-green-500 block p-3">
          <editLogo class="inline" />
        </button>
      </li>  
    </ul>
  </aside>
  <main class="sm:h-full flex-1 flex flex-col min-h-0 min-w-0 overflow-auto">
    <nav class="border-b bg-white px-6 py-2 flex items-center min-w-0 h-14">
      <h1 class="font-semibold text-lg"></h1>
      <span class="flex-1"></span>
      <!-- search bar -->
      <span class="mr-2">
        <input type="text" placeholder="Search"
          class="w-full border-2 px-2 py-1 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-gray-300 focus:bg-gray-100" />
      </span>
      <!-- Profile Icon -->
      <button
        class="ml-auto border rounded-full ml-2 w-10 h-10 text-center leading-none text-gray-200 bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
        <i class="fas fa-user fill-current"></i>
      </button>
    </nav>
    <section class="flex-1 pt-3 md:p-6 lg:mb-0 lg:min-h-0 lg:min-w-0">
      <div class="flex flex-col lg:flex-row h-full w-full">
        
        <div class="border pb-2 lg:pb-0 w-full lg:max-w-sm px-3 flex flex-row lg:flex-col flex-wrap lg:flex-nowrap">
        
          <!-- control content left USERNAME -->
          <div class="bg-red-200 w-full h-24 min-h-0 min-w-0 mb-4">
            {{ userData.name }}
          </div>
          <div class="bg-red-200 w-full h-24 min-h-0 min-w-0 mb-4">
            <nuxt-link v-if="isViewingSelf()" :to="$route.params.id+'/edit'">
              <button class="bg-white border rounded-full px-2 py-1">Edit</button>
              </nuxt-link>
            <!-- Connect / Share -->
            <ConnectsContainer
              :user="userData"
              :isFollowing="isFollowing()"
              :followsBack="followsBack()"
              @update="fetchTargetUser"
            />
          </div>

        </div>
        
        <div class="border h-full w-full lg:flex-1 px-3 min-h-0 min-w-0">

          <!-- overflow content right -->
          <div class="w-full h-full min-h-0 min-w-0 overflow-auto">
            <!-- <div class="bg-pink-600 w-screen h-64">{{ this.currentContainer }}</div> -->
            <div class="w-full">

              <ShareContainer v-if="this.currentContainer === 'share'" />
              <PlatformSettings v-if="isViewingSelf() && this.currentContainer === 'edit'" />
              <Web v-if="this.currentContainer === 'connections'" :user="userData" />
              <article v-if="this.currentContainer === 'platforms'" class="bg-black">
                <PlatformsContainer
                  :user="userData"
                  :isFollowing="isFollowing()"
                  :followsBack="followsBack()"
                  :isFriendOfFriend="isFriendOfFriend()"
                />
                <ContentContainer :content="userData.content" :isViewingSelf="isViewingSelf()" />
              </article>
            </div>
            <!-- <div class="bg-purple-600 w-screen h-64"></div> -->
            <!-- <div class="bg-red-600 w-full h-64"></div> -->
            <!-- <div class="bg-yellow-600 w-screen h-64"></div> -->
            <!-- <div class="bg-green-600 w-full h-64"></div> -->
          </div>

        </div>

      </div>
    </section>
    <footer class="px-6 py-3 border-t flex w-full items-end">
      <p class="text-gray-600">spods 2021 to the moon 🛸 </p> 
      <div class="flex-1"></div>
      <button
        class="shadow-md ml-auto border rounded-full ml-2 w-14 h-14 text-center leading-none text-green-200 bg-green-600 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
        <i class="fas fa-question fill-current"></i>
      </button>
    </footer>
  </main>
</section>






















    <!-- 
    <div v-if="userData">
  
      <div>

        <article v-if="this.currentContainer === 'platforms'">
          <PlatformsContainer
            :user="userData"
            :isFollowing="isFollowing()"
            :followsBack="followsBack()"
            :isFriendOfFriend="isFriendOfFriend()"
          />
          <ContentContainer :content="userData.content" :isViewingSelf="isViewingSelf()" />
        </article>


        <section v-if="this.currentContainer === 'connections'">
          <FriendsList v-if="connectionTab == 'list'" :user="userData" />
          <Web v-if="connectionTab == 'web'" :user="userData" />
        </section>


      <nav class="flex flex-col w-full fixed bottom-0 z-50 bg-black">

        <div v-if="this.currentContainer === 'connections'" class="flex w-full">
          <span
            v-if="connectionTab === 'list'"
            class="w-1/2 bg-green-500 border-2 border-black rounded-lg p-1 text-white px-5 py-2 flex justify-center"
          >
            <listLogo />
          </span>
          <button
            v-else
            @click="connectionTab = 'list'"
            class="w-1/2 px-5 text-white py-2 flex justify-center focus:outline-none"
          >
            <listLogo />
          </button>
          <span
            v-if="connectionTab === 'web'"
            class="w-1/2 bg-green-500 border-2 border-black rounded-lg p-1 text-white px-5 py-2 flex justify-center"
          >
            <webLogo />
          </span>
          <button
            v-else
            @click="connectionTab = 'web'"
            class="w-1/2 px-5 text-white py-2 flex justify-center focus:outline-none"
          >
            <webLogo />
          </button>
        </div>

      </nav>
    
    </div> -->


  </div>
</template>

<script>
import PlatformsContainer from "@/components/platforms/Container";
import UserService from "@/middleware/UserService";
import ConnectsContainer from "@/components/connects/Container";
import FriendsList from "@/components/connects/List";
import Web from "@/components/Web";
import Tunnel from "@/components/Tunnel";
import ContentContainer from "@/components/content/Container";
import platformSquaresLogo from "@/components/icons/platformSquares";
import userIconLogo from "@/components/icons/userIcon";
import shareLogo from "@/components/icons/share";
import webLogo from "@/components/icons/web";
import listLogo from "@/components/icons/list";
import editLogo from "@/components/icons/edit";
import PlatformSettings from "@/components/platforms/Settings";
import AddContent from "@/components/content/AddContent";
import ShareContainer from "@/components/share/Container";

export default {
  head () {
    let user = this.$route.params.id
    return {
      title: `spods/${user}`,
      meta: [
        { hid: 'description', name: 'description', content: 'Explore the spods community by searching for user social media profiles' }
      ]
    }
  },
  data() {
    return {
      userData: null,
      connectionTab: "web",
      currentContainer: "platforms"
    };
  },
  // layout: "profile",
  components: {
    PlatformsContainer,
    ConnectsContainer,
    FriendsList,
    Web,
    Tunnel,
    ContentContainer,
    platformSquaresLogo,
    userIconLogo,
    shareLogo,
    editLogo,
    webLogo,
    listLogo,
    PlatformSettings,
    AddContent,
    ShareContainer
  },
  async created() {
    // Refresh Main User
    if (this.$store.state.user !== null) {
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
    try {
      await UserService.getUserData(this.$route.params.id).then(res => {
        this.userData = res.data;
      });
    } catch (err) {
      console.log(err.message);
    }
  },
  methods: {
    isViewingSelf(){
      if(this.$store.state.user === null) return false
      else if(this.$store.state.user.username === this.userData.username) return true
      else return false
    },
    // is actionUser isFollowing targetUser? T/F
    isFollowing() {
      if (this.$store.state.user !== null) {
        const u = this.$store.state.user.following;
        for (const x in u) {
          if (u[x] === this.userData.username) {
            return true;
          }
        }
      }
      return false;
    },
    // is targetUser following actionUser? T/F
    followsBack() {
      if (this.$store.state.user !== null) {
        const u = this.userData.following;
        for (const x in u) {
          if (u[x] === this.$store.state.user.username) {
            return true;
          }
        }
      }
      return false;
    },
    // is targetUser following someone who follows actionuser?
    isFriendOfFriend() {
      // if (this.$store.state.user !== null) {
      //   const u = this.userData.following;
      //   const username = this.$store.state.user.username;
      //   for (const x in u) {
      //     let v = u[x].following;
      //     for (const y in v) {
      //       if (v[y].username === username) {
      //         return true;
      //       }
      //     }
      //   }
      // }
      return false;
    },
    toggleContainer(tab) {
      this.currentContainer = tab;
    },
    fetchTargetUser(update) {
      if (update === "addFriend") {
        this.userData.followers.push(this.$store.state.user.username);
      } else if (update === "removeFriend") {
        this.userData.followers.pop(this.$store.state.user.username);
      }
    }
  }
};
</script>


<style>
  @import url("https://fonts.googleapis.com/css2?family=Nunito&display=swap");

body {
  font-family: "Nunito", sans-serif;
}

main {
  font-size: clamp(0.9rem, 3vw, 1rem);
}

#page-icon img {
  -webkit-animation: cssfilter 3s infinite;
}


@-webkit-keyframes cssfilter {
  0%, 100%  {  
    filter: invert(75%) drop-shadow(0px 0px 2px blue) 
  }
  
  50% { 
    filter: invert(0%) drop-shadow(0px 0px 1px teal); 
  }
}
</style>
