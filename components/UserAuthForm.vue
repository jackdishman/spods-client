<template>
  <div
    class="flex flex-col self-center border-4 border-green-500 rounded-lg bg-white p-10 text-center"
  >
    <h2 class="spods text-4xl text-center mb-10 animated pulse delay-1s">
      Authenticate
    </h2>

    <div class="w-full max-w-sm p-1">
      <!-- Page 1 - Who is logging in? -->
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            for="username"
            class="block text-color-med font-bold md:text-right mb-1 md:mb-0 pr-4"
            >spods.app/</label
          >
        </div>
        <div>
          <input
            v-if="this.newUser === null"
            class="bg-color-light appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
            id="username"
            v-model="userInfo.username"
            placeholder="username"
          />
          <span
            v-else
            @click="newUser = null"
            class="bg-gray-200 border border-green-500 rounded w-full py-2 px-4 text-gray-700 leading-tight"
          >
            {{ this.userInfo.username }}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-edit-2 inline ml-1"
            >
              <path
                d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"
              ></path>
            </svg>
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
              class="block text-color-med font-bold md:text-right mb-1 md:mb-0 pr-4"
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

        <!-- Email -->
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              for="email"
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              >Email Address</label
            >
          </div>
          <div class="md:w-2/3">
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
              id="email"
              type="text"
              v-model="userInfo.email"
              placeholder="your@email.com"
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

        <!-- Terms & Privacy -->
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
              <nuxt-link to="/terms" class="underline">Terms of Use</nuxt-link>
              and
              <nuxt-link to="/privacy" class="underline"
                >Privacy Policy</nuxt-link
              >
            </span>
          </label>
        </div>

        <!-- Register Button -->
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
import UserService from "@/middleware/UserService";
import { mapState } from "vuex";
import url from "@/static/server.js";
import axios from "axios";

export default {
  data() {
    return {
      text: "",
      validUsername: false,
      newUser: null,
      legal: false,
      userInfo: {
        username: "",
        email: "",
        name: "",
        password: "",
      },
    };
  },
  methods: {
    async verifyUsername() {
      var letters = /^[a-zA-Z\s\-]*$/;
      var username = this.userInfo.username;
      if (username === "" || !letters.test(username)) {
        this.$toast.error("Only Letters and - allowed!");
        return;
      } else {
        username = username.trim();
        username = username.replace(/ /g, "-");
        username = username.toLowerCase();
        var res = await this.$axios
          .get(url + "/users/isExistingUser/" + username)
          .then((res) => {
            if (res.data) {
              this.newUser = false;
            } else {
              this.newUser = true;
            }
          });
      }
    },
    async submitLogin(userInfo) {
      userInfo.username = userInfo.username.toLowerCase();
      try {
        await this.$axios
          .post(url + "/api/auth/login", {
            username: userInfo.username,
            password: userInfo.password,
          })
          .then((res) => {
            const token = res.data.token.accessToken;
            this.$axios.setHeader("Authorization", "Bearer " + token);
            this.$axios.setToken(token, "Bearer");
            this.$store.commit("SETTOKEN", token);
            this.$store.commit("SETUSER", res.data.user);
            this.$toast.success("Logged In!");
            this.$router.push(res.data.user.username);
          });
      } catch (err) {
        this.$toast.error("Invalid Credentials!");
      }
    },
    async submitRegister(userInfo) {
      userInfo.username = userInfo.username.toLowerCase();
      if (userInfo.password.length < 8) {
        this.$toast.error("Password must be 8 chars long!");
        return;
      }
      if (userInfo.username.length < 3) {
        this.$toast.error("Username must be at least 3 characters!");
        return;
      }
      try {
        await this.$axios
          .post(url + "/api/auth/register", {
            username: userInfo.username,
            email: userInfo.email,
            name: userInfo.name,
            password: userInfo.password,
          })
          .then((res) => {

            this.newUser = false;
            this.$toast.success("Registered!");
            (function (c, b, f, k, a) {
              c[b] = c[b] || {};
              for (c[b].q = c[b].q || []; a < k.length; ) f(k[a++], c[b]);
            })(
              window,
              "extole",
              function (c, b) {
                b[c] =
                  b[c] ||
                  function () {
                    b.q.push([c, arguments]);
                  };
              },
              ["createZone"],
              0
            );
            extole.createZone({
              name: "registered",
              data: {
                email: userInfo.email,
                username: userInfo.username,
                name: userInfo.name,
              },
            });
          });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
