<template>
  <div
    class="flex flex-col self-center border border-green-500 rounded bg-white p-10 text-center"
  >
    <div class="flex flex-row justify-between">
      <font-awesome-icon
        class="mt-5"
        :icon="['fas', 'undo']"
        style="color:black"
        v-if="newUser !== null"
        @click="newUser = null"
      />
      <div v-else></div>
      <h2 class="spods text-4xl text-center mb-10 animated pulse delay-1s">
        Authenticate
      </h2>
      <div></div>
    </div>

    <div class="w-full max-w-sm p-1">
      <!-- Page 1 - Who is logging in? -->
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            for="username"
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            >spods.app/</label
          >
        </div>
        <div>
          <input
            v-if="this.newUser === null"
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
            id="username"
            v-model="userInfo.username"
            placeholder="username"
          />
          <span
            v-else
            class="bg-gray-200 border border-green-500 rounded w-full py-2 px-4 text-gray-700 leading-tight"
          >
            {{ this.userInfo.username }}
          </span>
        </div>
      </div>
      <div class="md:flex md:items-center">
        <div class="w-full">
          <button
            v-if="this.newUser === null"
            class="w-full shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded hvr-grow"
            type="button"
            @click="verifyUsername()"
          >
            Verify
          </button>
        </div>
      </div>

      <!-- Page 2a - Log In -->
      <div v-if="this.newUser === false">
        <!-- Password -->
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="password"
              >Password</label
            >
          </div>
          <div class="md:w-2/3">
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
              id="password"
              type="password"
              v-model="userInfo.password"
              placeholder="******************"
            />
          </div>
        </div>
        <div class="md:flex md:items-center">
          <div class="w-full">
            <button
              class="w-full shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
              @click="submitLogin(userInfo)"
            >
              Log In
            </button>
          </div>
        </div>
      </div>

      <!-- Page 2b - Register -->
      <div v-if="this.newUser">
        <!-- Name -->
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              for="name"
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              >Full Name</label
            >
          </div>
          <div class="md:w-2/3">
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
              id="name"
              type="text"
              v-model="userInfo.name"
              placeholder="Bruce Springsteen"
            />
          </div>
        </div>

        <!-- Password -->
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-username"
              >Password</label
            >
          </div>
          <div class="md:w-2/3">
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
              id="inline-username"
              type="password"
              v-model="userInfo.password"
              placeholder="******************"
            />
          </div>
        </div>

        <div class="md:flex md:items-center mb-6">
          <label class="w-full block text-gray-500 font-bold">
            <input
              v-model="legal"
              class="mr-2 leading-tight"
              type="checkbox"
              id="legal"
            />
            <span class="text-sm">
              Accept our
              <nuxt-link to="/legal" class="underline"
                >Terms & Conditions</nuxt-link
              >
            </span>
          </label>
        </div>
        <div class="md:flex md:items-center">
          <div class="w-full">
            <button
              class="w-full shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
              @click="submitRegister(userInfo)"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthService from "@/middleware/AuthService";
import { mapState } from "vuex";

export default {
  data() {
    return {
      text: "",
      validUsername: false,
      newUser: null,
      legal: false,
      userInfo: {
        username: "",
        name: "",
        phone: "",
        password: ""
      }
    };
  },
  methods: {
    async verifyUsername() {
      var letters = /^[a-zA-Z\s]*$/;
      if (
        this.userInfo.username === "" ||
        !letters.test(this.userInfo.username)
      ) {
        this.$toast.error("Only Letters and - allowed!");
        return;
      } else {
        this.userInfo.username = this.userInfo.username.replace(/ /g, "-");
        var res = await AuthService.isExistingUser(this.userInfo.username);
        if (res.data.length === 0) {
          this.newUser = true;
        } else {
          this.newUser = false;
        }
      }
    },

    async submitLogin(userInfo) {
      this.$auth
        .loginWith("local", {
          data: {
            username: userInfo.username,
            password: userInfo.password
          }
        })
        .then((res) => {
          const u = this.$auth.user;
          this.$store.commit("SETUSER", u);
          this.$toast.success("Logged In!");
        });
    },

    async submitRegister(userInfo) {
      if (userInfo.password.length < 8) {
        this.$toast.error("Password must be 8 chars long!");
        return;
      } else {
        let res = await AuthService.register(
          userInfo.username,
          userInfo.name,
          userInfo.password
        );
        this.newUser = false;
        this.$toast.success("Registered!");
      }
    }
  }
};
</script>
