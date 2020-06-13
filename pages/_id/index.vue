<template>
  <div class="w-full h-full">
    <!-- LOGGED IN -->
    <div v-if="userData">
      <!-- HEADER -->
      <div class="pt-5 pb-5 sticky top-0">
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
      </div>

      <!-- MAIN CONTAINER -->
      <div>
        <!-- Platforms  -->
        <PlatformsContainer
          v-if="this.currentContainer === 'platforms'"
          class="h-auto bg-black"
          :user="userData"
          :isFollowing="isFollowing()"
          :followsBack="followsBack()"
          :isFriendOfFriend="isFriendOfFriend()"
        />
        <!-- Connections -->
        <section v-if="this.currentContainer === 'connections'">
          <FriendsList v-if="connectionTab == 'list'" :user="userData" />
          <Web v-if="connectionTab == 'web'" :user="userData" />
        </section>
        <!-- Share -->
        <section v-if="this.currentContainer === 'share'">
          <div class="flex justify-center pt-5 pb-10">
            <QRCode :username="this.$route.params.id" />
          </div>
          <div class="bg-white">
            <ExportURL :username="this.$route.params.id" class="p-2" />
          </div>
        </section>
      </div>

      <!-- Lower toggle container bar -->
      <nav class="flex flex-col w-full fixed bottom-0 z-50 bg-black">
        <!-- Toggle Graph / List -->
        <div v-if="this.currentContainer === 'connections'" class="flex w-full">
          <span
            v-if="connectionTab === 'list'"
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
              class="feather feather-list"
            >
              <line x1="8" y1="6" x2="21" y2="6"></line>
              <line x1="8" y1="12" x2="21" y2="12"></line>
              <line x1="8" y1="18" x2="21" y2="18"></line>
              <line x1="3" y1="6" x2="3.01" y2="6"></line>
              <line x1="3" y1="12" x2="3.01" y2="12"></line>
              <line x1="3" y1="18" x2="3.01" y2="18"></line>
            </svg>
          </span>
          <button
            v-else
            @click="connectionTab = 'list'"
            class="w-1/2 px-5 text-white py-2 flex justify-center"
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
              class="feather feather-list"
            >
              <line x1="8" y1="6" x2="21" y2="6"></line>
              <line x1="8" y1="12" x2="21" y2="12"></line>
              <line x1="8" y1="18" x2="21" y2="18"></line>
              <line x1="3" y1="6" x2="3.01" y2="6"></line>
              <line x1="3" y1="12" x2="3.01" y2="12"></line>
              <line x1="3" y1="18" x2="3.01" y2="18"></line>
            </svg>
          </button>
          <span
            v-if="connectionTab === 'web'"
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
              class="feather feather-share-2"
            >
              <circle cx="18" cy="5" r="3"></circle>
              <circle cx="6" cy="12" r="3"></circle>
              <circle cx="18" cy="19" r="3"></circle>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
            </svg>
          </span>
          <button
            v-else
            @click="connectionTab = 'web'"
            class="w-1/2 px-5 text-white py-2 flex justify-center"
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
              class="feather feather-share-2"
            >
              <circle cx="18" cy="5" r="3"></circle>
              <circle cx="6" cy="12" r="3"></circle>
              <circle cx="18" cy="19" r="3"></circle>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
            </svg>
          </button>
        </div>

        <!-- TOGGLE PROFILE VIEW
          Platform
          Connections
          Share
        -->
        <div class="flex">
          <!-- Platform 4 Square Logo -->
          <button
            v-if="this.currentContainer !== 'platforms'"
            class="w-1/3 px-5 text-white py-2 flex justify-center"
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
              class="feather feather-grid"
            >
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
          </button>
          <span
            v-else
            class="w-1/3 bg-green-500 border-2 border-black rounded-lg p-1 text-white px-5 py-2 flex justify-center"
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
              class="feather feather-grid"
            >
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
          </span>
          <!-- User Icon -->
          <span class="w-1/3">
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
          <!-- Share Icon -->
          <span class="w-1/3">
            <button
              v-if="this.currentContainer !== 'share'"
              class="w-full px-5 text-white py-2 flex justify-center"
              @click="toggleContainer('share')"
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
                class="feather feather-share"
              >
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                <polyline points="16 6 12 2 8 6"></polyline>
                <line x1="12" y1="2" x2="12" y2="15"></line>
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
                class="feather feather-share"
              >
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                <polyline points="16 6 12 2 8 6"></polyline>
                <line x1="12" y1="2" x2="12" y2="15"></line>
              </svg>
            </span>
          </span>
        </div>
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
import QRCode from "@/components/QRCode";
import ExportURL from "@/components/ExportURL";

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
    Web,
    QRCode,
    ExportURL
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
