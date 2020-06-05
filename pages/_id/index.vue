<template>
  <div class="w-full h-full">
    <!-- LOGGED IN -->
    <div v-if="userData">
      <!-- HEADER -->
      <div class="pt-5 pb-5">
        <!-- User Name -->
        <h1 class="text-3xl text-center spods">
          {{ userData.name }}
        </h1>
      </div>

      <!-- Connect / Share -->
      <div class="flex flex-row">
        <span class="w-1/2">
          <div class="w-full">
            <ConnectsContainer
              :user="userData"
              :isFollowing="isFollowing()"
              :followsBack="followsBack()"
              @update="fetchTargetUser"
            />
          </div>
        </span>
        <span class="w-1/2">
          <!-- Share icon -->
          <button
            class="border border-white rounded bg-black text-white p-3 w-full"
          >
            <nuxt-link :to="userData.username + '/share'">
              <div class="flex flex-row justify-center">
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
                  class="feather feather-share"
                >
                  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                  <polyline points="16 6 12 2 8 6"></polyline>
                  <line x1="12" y1="2" x2="12" y2="15"></line>
                </svg>
                <h6 class="text-white spods pl-2 text-base">share</h6>
              </div>
            </nuxt-link>
          </button>
        </span>
      </div>

      <!-- Platforms -->
      <div>
        <PlatformsContainer
          v-if="this.currentContainer === 'platforms'"
          :user="userData"
          :isFollowing="isFollowing()"
          :followsBack="followsBack()"
          :isFriendOfFriend="isFriendOfFriend()"
        />

        <section v-if="this.currentContainer === 'connections'">
          <!-- Connections -->
          <div class="flex w-full bg-black">
            <span
              v-if="connectionTab === 'list'"
              class="w-1/2 bg-green-500 border-2 border-black rounded-lg p-1 text-white px-5 py-2 flex justify-center"
            >
              List
            </span>
            <button
              v-else
              @click="connectionTab = 'list'"
              class="w-1/2 px-5 text-white py-2 flex justify-center"
            >
              List
            </button>
            <span
              v-if="connectionTab === 'web'"
              class="w-1/2 bg-green-500 border-2 border-black rounded-lg p-1 text-white px-5 py-2 flex justify-center"
            >
              Web
            </span>
            <button
              v-else
              @click="connectionTab = 'web'"
              class="w-1/2 px-5 text-white py-2 flex justify-center"
            >
              Web
            </button>
          </div>

          <div
            v-if="connectionTab == 'list'"
            class="w-full flex flex-row mb-3 p-3 mt-5"
          >
            <FriendsList :user="userData" />
          </div>
          <div
            v-if="connectionTab == 'web'"
            class="w-full lg:w-1/2 h-20 mb-24 mt-5 p-3"
          >
            <Web :user="userData" />
          </div>
        </section>
      </div>

      <!-- Lower toggle container bar -->
      <nav class="flex w-full fixed bottom-0 z-50 bg-black">
        <!-- Social Platform -->
        <button
          v-if="this.currentContainer !== 'platforms'"
          class="w-1/2 px-5 text-white py-2 flex justify-center"
          @click="toggleContainer('platforms')"
        >
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
            class="feather feather-circle"
          >
            <circle cx="12" cy="12" r="10"></circle>
          </svg>
        </button>
        <span
          v-else
          class="w-1/2 bg-green-500 border-2 border-black rounded-lg p-1 text-white px-5 py-2 flex justify-center"
        >
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
            class="feather feather-circle"
          >
            <circle cx="12" cy="12" r="10"></circle>
          </svg>
        </span>
        <span class="w-1/2">
          <button
            v-if="this.currentContainer !== 'connections'"
            class="w-full px-5 text-white py-2 flex justify-center"
            @click="toggleContainer('connections')"
          >
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
              class="feather feather-users"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </button>
          <span
            v-else
            class="w-full bg-green-500 border-2 border-black rounded-lg p-1 text-white px-5 py-2 flex justify-center"
          >
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
              class="feather feather-users"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </span>
        </span>
      </nav>
    </div>
  </div>
</template>

<script>
import PlatformsContainer from "@/components/platforms/Container";
import UserService from "@/middleware/UserService";
import ConnectsContainer from "@/components/connects/Container";
import FriendsList from "@/components/connects/List";
import Web from "@/components/Web";

export default {
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
    Web
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
      console.log(tab);
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
