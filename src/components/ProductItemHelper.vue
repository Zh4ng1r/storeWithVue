<template>
    <div class="item">
      <img :src="resolveImage()" alt="" @click="$router.push(`/productList/${item.id}`)">
      <div class="product-list_text">
        <h5>{{ props.item.title }}</h5>
        <h6>{{ props.item.price }}</h6>
        <my-button class="button" @click="addToCart">Add to Cart</my-button>
      </div>
    </div>
</template>
  
<script setup lang="ts">
import jsonData from '@/interface/jsonData';
import MyButton from '../UI/MyButton.vue';

const emit = defineEmits(['add-to-cart'])
const props = defineProps({
    item: {
        type: Object,
        required: true
    },
})

const addToCart = ():void =>{
  emit('add-to-cart', props.item);
}

const resolveImage = ():string => {
  return props.item.image;
};

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
        cursor: pointer;
        padding: 10px;
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
        padding: 10px;
        text-align: center;
        transition: all 0.3s ease;
    }

    .item:hover{
        scale: 1.05;
        box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    }
</style>