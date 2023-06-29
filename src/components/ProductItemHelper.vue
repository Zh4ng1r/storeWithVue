<template>
    <div class="item">
      <img :src="resolveImage()" alt="">
      <div class="product-list_text">
        <h5>{{ item.title }}</h5>
        <h6>{{ item.price }}</h6>
        <my-button @click="$router.push(`/productList/${item.id}`)">Open Card</my-button>
        <my-button class="button" @click="addToCart">Add to Cart</my-button>
      </div>
    </div>
</template>
  
<script setup>
import { defineEmits } from 'vue';
import MyButton from './UI/MyButton.vue';

const emit = defineEmits(['add-to-cart'])
const props = defineProps({
    item: {
        type: Object,
        required: true
    }
})

const addToCart = () =>{
    emit('add-to-cart', item);
}

const resolveImage = () => {
    return props.item.image
}
</script>

<style scoped>
    .product-list_text{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    img {
        width: 300px;
        height: 300px;
        object-fit: cover;
        margin-bottom: 5px;
    }

    h5,h6{
        margin-bottom: 10px;
        text-align: center;
    }

    .button {
        background-color: #4caf50;
        color: #fff;
        border: none;
        cursor: pointer;
        margin-top: 10px;
    }    

    .item{
        text-align: center;
    }
</style>