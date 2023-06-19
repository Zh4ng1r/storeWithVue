<template>
    <div class="container">
        <div class="product-list_text">
            <h3>Featured Products</h3>
            <p>View all</p>
        </div>
        <ProductItem/>
    </div>
</template>

<script>
import ProductItem from './ProductItem.vue';
export default {
    components:{
        ProductItem,
    }
    
}
</script>

<style scoped>
.product-list_text{
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 70px;
}

.product-list_text h3{
    text-transform: uppercase;
    font-size: 28px;
    font-weight: 700;
}

.product-list_text p{
    font-size: 18px;
    font-weight: 700;
}

.jackets{
    padding-top: 100px;
    align-items: center;
}
</style>