<template>
   <h1>My First Main Page</h1>
</template>

<script>
import headerBlock from '@/components/HeaderComponent.vue'
export default{
    components:{headerBlock}
}
</script>

<style scoped>
h1{
    display: flex;
    justify-content: center;
}
</style>