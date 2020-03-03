<template>
    <button class="CreditButton"> {{ CREDIT_BALANCE }} Credits </button>
</template>

<script>

export default {
  name: 'CreditButton',
  components: {
  },
  props: {
      CREDIT_BALANCE: Number
  }
}
</script>

<style>
.CreditButton {
    color:white;
    font-size: 16px;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    border-radius:4px;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    width: 125px;
    height: 35px;
    background: rgb(28, 184, 65);
    position: absolute;
    top: 30px;
    right: 30px;
}

.CreditButton:focus{
    outline: 0;
}
</style>
