<template>
    <button class="WebButton"> Web </button>
</template>

<script>

export default {
  name: 'WebButton',
  components: {
  },
  props: {}
}
</script>

<style>
.WebButton {
    color:white;
    font-size: 16px;
    border-radius:50%;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    width: 100px;
    height: 100px;
    background: rgb(101, 72, 169);
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    text-align: center;
    bottom: 10px;
}



.WebButton:focus{
    outline: 0;
}
</style>
