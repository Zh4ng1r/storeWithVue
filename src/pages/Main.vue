<template>
  <div class="container">
    <div class="carousel">
      <div class="carouselInner">
        <div class="column1">
          <Carousel :carousel_data="carouselItems[activeIndex]" />
        </div>
      </div>
      <div class="column">
        <div class="carousel-item-wrapper">
          <Carousel :carousel_data="carouselItems[activeIndex + 1]" />
        </div>
        <div class="carousel-item-wrapper">
          <Carousel :carousel_data="carouselItems[activeIndex + 2]" />
        </div>
      </div>
    </div>
    <CarouselControl @next="nextSlide" @prev="prevSlide" />
  </div>
</template>

<script lang="ts">
import Carousel from '@/components/CarouselItem.vue';
import CarouselControl from '@/components/CarouselControl.vue';
import { useItemStore } from '@/stores/ItemStores.js';

export default {
  setup() {
    const itemStore = useItemStore();
    const carouselItems = itemStore.items;
    let activeIndex:number = 0;

    const nextSlide = () => {
      activeIndex = (activeIndex + 1) % (carouselItems.length - 2);
    };

    const prevSlide = () => {
      activeIndex = (activeIndex - 1 + carouselItems.length - 2) % (carouselItems.length - 2);
    };

    return {
      carouselItems,
      activeIndex,
      nextSlide,
      prevSlide,
    };
  },

  components: {
    Carousel,
    CarouselControl,
  },
};
</script>

<style scoped>
.container {
  height: 842px;
}

.carousel {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 64px;
  align-items: center;
  margin-bottom: 51px;
}

.column1 {
  grid-column: 1;
}

.column {
  grid-column: 2;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  row-gap: 50px;
}

.carousel-item-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>