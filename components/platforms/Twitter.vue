<template>
  <section class="bg-white w-64" v-if="this.$props.verified !== undefined">
    <article class="relative">
      <img
        :src="this.$props.verified.profile_banner_url"
        class="w-64 border-2"
        :style="borderColor"
      />
      <img
        class="rounded-full border-2 absolute -mt-6"
        :style="borderColor"
        :src="this.$props.verified.profile_image_url"
      />
      <button
        class="absolute right-0 z-10 text-blue-500 m-2 border rounded-full px-2 py-1 hvr-grow"
        :style="borderColor"
      >
        <a
          :href="'https://www.twitter.com/' + this.$props.verified.screen_name"
          target="_blank"
          rel="noreferrer"
          >View Profile</a
        >
      </button>
    </article>

    <article
      class="pt-6 pl-2 border-l-2 border-r-2"
      :style="borderColor"
    >
      <h2 class="text-xl font-bold inline-block">
        {{ this.$props.verified.name }}
      </h2>

      <!-- Verified SVG -->
      <svg
        v-if="this.$props.verified.verified"
        class="w-4 inline-block -mt-1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
        id="Layer_1"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
        style="enable-background:new 0 0 512 512;"
        xml:space="preserve"
      >
        <style type="text/css">
          .st0 {
            fill: #1da1f2;
          }
        </style>
        <g id="_x3C_Group_x3E_">
          <path
            class="st0"
            d="M512,268c0,17.9-4.3,34.5-12.9,49.7c-8.6,15.2-20.1,27.1-34.6,35.4c0.4,2.7,0.6,6.9,0.6,12.6   c0,27.1-9.1,50.1-27.1,69.1c-18.1,19.1-39.9,28.6-65.4,28.6c-11.4,0-22.3-2.1-32.6-6.3c-8,16.4-19.5,29.6-34.6,39.7   C290.4,507,273.9,512,256,512c-18.3,0-34.9-4.9-49.7-14.9c-14.9-9.9-26.3-23.2-34.3-40c-10.3,4.2-21.1,6.3-32.6,6.3   c-25.5,0-47.4-9.5-65.7-28.6c-18.3-19-27.4-42.1-27.4-69.1c0-3,0.4-7.2,1.1-12.6c-14.5-8.4-26-20.2-34.6-35.4   C4.3,302.5,0,285.9,0,268c0-19,4.8-36.5,14.3-52.3c9.5-15.8,22.3-27.5,38.3-35.1c-4.2-11.4-6.3-22.9-6.3-34.3   c0-27,9.1-50.1,27.4-69.1c18.3-19,40.2-28.6,65.7-28.6c11.4,0,22.3,2.1,32.6,6.3c8-16.4,19.5-29.6,34.6-39.7   C221.6,5.1,238.1,0,256,0c17.9,0,34.4,5.1,49.4,15.1c15,10.1,26.6,23.3,34.6,39.7c10.3-4.2,21.1-6.3,32.6-6.3   c25.5,0,47.3,9.5,65.4,28.6c18.1,19.1,27.1,42.1,27.1,69.1c0,12.6-1.9,24-5.7,34.3c16,7.6,28.8,19.3,38.3,35.1   C507.2,231.5,512,249,512,268z M245.1,345.1l105.7-158.3c2.7-4.2,3.5-8.8,2.6-13.7c-1-4.9-3.5-8.8-7.7-11.4   c-4.2-2.7-8.8-3.6-13.7-2.9c-5,0.8-9,3.2-12,7.4l-93.1,140L184,263.4c-3.8-3.8-8.2-5.6-13.1-5.4c-5,0.2-9.3,2-13.1,5.4   c-3.4,3.4-5.1,7.7-5.1,12.9c0,5.1,1.7,9.4,5.1,12.9l58.9,58.9l2.9,2.3c3.4,2.3,6.9,3.4,10.3,3.4   C236.6,353.7,241.7,350.9,245.1,345.1z"
          />
        </g>
      </svg>
      <!-- Screen Name -->
      <h3 class="text-gray-700">@{{ this.$props.verified.screen_name }}</h3>
      <!-- Description -->
      <h4 class="mt-1">{{ this.$props.verified.description }}</h4>

      <!-- Followers/following -->
      <div>
        <h4>
          <span class="font-bold">{{
            this.$props.verified.followers_count
          }}</span
          ><span class="text-gray-700"> Followers</span>
        </h4>
        <h4>
          <span class="font-bold">{{ this.$props.verified.friends_count }}</span
          ><span class="text-gray-700"> Following</span>
        </h4>
        <h4>
          <span class="font-bold">{{
            this.$props.verified.favourites_count
          }}</span
          ><span class="text-gray-700"> Favorites</span>
        </h4>
        <!-- <h2 class="text-blue-500">Member since: {{ this.$props.verified.created_at }}</h2> -->
      </div>
    </article>

    <article class="flex justify-center border-b-2 border-l-2 border-r-2" :style="borderColor">
      <svg
        id="Logo_FIXED"
        class="h-12 w-12"
        data-name="Logo — FIXED"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 400"
      >
        <defs>
          <style>
            .cls-1 {
              fill: none;
            }
            .cls-2 {
              fill: #1da1f2;
            }
          </style>
        </defs>
        <title>Twitter_Logo_Blue</title>
        <rect class="cls-1" width="400" height="400" />
        <path
          class="cls-2"
          d="M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23"
        />
      </svg>
    </article>
  </section>
</template>

<script>
export default {
  props: {
    verified: Object,
    config: Object
  },
  computed: {
    backgroundColor() {
      return "background-color: " + this.config.color + ";";
    },
    borderColor() {
      return "border-color: " + this.config.color + ";";
    }
  }
};
</script>
