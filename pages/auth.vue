<template>
  <div class="flex flex-row justify-center align-middle bg-gray-100 pt-32">
    <UserAuthForm />

  </div>
</template>

<script>
import UserAuthForm from "@/components/UserAuthForm";
import Logo from "@/components/Logo";

export default {
  name: "Authenticate",
  layout: "external",
  components: {
    Logo,
    UserAuthForm
  }
};
</script>
