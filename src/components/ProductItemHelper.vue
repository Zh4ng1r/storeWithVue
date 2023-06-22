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
  
<script>
import MyButton from './UI/MyButton.vue';
    export default {
        components:{MyButton},
        props: ['item'],
        methods:{
            resolveImage(){
                return this.item.image
            },
             addToCart() {
                this.$emit('add-to-cart', this.item);
            }
        }
    }
</script>

<style scoped>
    .product-list_text{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    img {
        width: 100%px;
        max-width: 300px;
        height: 200px;
        height: auto;
        margin-bottom: 5px;
        object-fit: cover;
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