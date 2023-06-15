<template>
    <div v-for="item in filteredItems('shoes')" :key="item.id">
        <ProductItemHelper :item="item" @add-to-cart="addToCart" />
    </div>
</template>

<script>
import ProductItemHelperVue from './ProductItemHelper.vue'
export default{
    components:{
        ProductItemHelperVue,
    }
}

</script>