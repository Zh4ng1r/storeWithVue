<template>
  <div class="container">
    <div class="carousel">
      <div class="carouselInner">
        <div class="column1">
          <Carousel :carousel_data="sliderItems[0]" />
        </div>
      </div>
      <div class="column">
          <div class="carousel-item-wrapper">
            <Carousel :carousel_data="sliderItems[1]" />
          </div>
          <div class="carousel-item-wrapper">
            <Carousel :carousel_data="sliderItems[2]" />
          </div>
        </div>
    </div>
    <CarouselControl />
  </div>
</template>

  
<script>
  import Carousel from '@/components/СarouselItem.vue'
  import CarouselControl from '@/components/CarouselControl.vue';
  
  export default {
    data() {
      return {
        sliderItems: [
          { id: 1, img: '/images/slider1.png', title: "Stylish shoes for Women", textColor: "black"},
          { id: 2, img: '/images/slider2.png', title: "Sports Wear", textColor: "white" },
          { id: 3, img: '/images/slider3.png', title: "Fashion Shoes", textColor: "black" },
        ]
      };
    },
    components: {
      Carousel, CarouselControl
    }
  }
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