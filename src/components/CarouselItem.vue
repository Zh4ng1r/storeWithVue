<template>
    <div class="v-carouselItem">
      <img :src="carousel_data.img" alt="">
      <div class="carouselText">
        <div class="textWrapper">
          <div class="carouselTitleText" :style="{ color: carousel_data.textColor }">{{ carousel_data.title }}</div>
          <router-link class="shopText" to="/productList" :style="{ color: carousel_data.textColor }">Shop Now</router-link>
        </div>
      </div>
    </div>
</template>
  
<script setup>
  import { ref } from 'vue';
  
  const props = defineProps ({
    carousel_data: {
      type: Object,
      required: true
    }
  });
  
  const resolveImage = () => {
    return carousel_data.img;
  };
</script>
  
<style scoped>
.v-carouselItem {
  position: relative;
}

.carouselText {
  position: absolute;
}

.carouselTitleText {
  font-size: 50px;
  font-weight: 900;
  margin-bottom: 20px;
}

.shopText {
  font-weight: 700;
  font-size: 18px;
}

.textWrapper{
    position:absolute;
    width: 420px;
    left: 65px;
    top: -200px;
    bottom: 129px;
}


</style>
  