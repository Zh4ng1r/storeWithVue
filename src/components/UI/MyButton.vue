<template>
  <button class="add-to-cart-button" @click="addToCart">
  <slot></slot>
  </button>
</template>

<script>
  export default {
    methods: {

    }
  };
</script>

<style scoped>
  .add-to-cart-button{
  background-color: #007bff;
        color: #fff;
        border: none;
        padding: 10px 20px;
        border-radius: 4px;
        cursor: pointer;
      }
</style>
