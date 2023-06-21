<template>
    <div class="dialog" v-if="show">
      <div class="dialog__content">
        <span class="close-button" @click="hideDialog">&times;</span>
        <slot></slot>
      </div>
    </div>
</template>
  
<script>
  export default {
    name: 'my-dialog',
    props: {
      show: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      hideDialog() {
        this.$emit('update:show', false)
      }
    }
  }
</script>
  
<style scoped>
  .dialog {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5)
  }
  
  .dialog__content {
    position: fixed;
    top: 35%;
    left: 41%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 28px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
  }
  
  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 24px;
    cursor: pointer;
  }
</style>
  