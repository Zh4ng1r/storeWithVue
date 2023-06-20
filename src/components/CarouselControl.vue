<template>
    <div class="carousel-indicator">
        <button class="carousel-indicator-item active"></button>
        <button class="carousel-indicator-item"></button>
        <button class="carousel-indicator-item"></button>
        <button class="carousel-indicator-item"></button>
        <button class="carousel-indicator-item"></button>
    </div>
</template>

<script>
export default{

}
</script>

<style scoped>
.carousel-indicator{
    position: absolute;
    transform: translateX(-46%);
    left: 51%;
    z-index: 2;
}

.carousel-indicator-item{
    width: 15px;
    height: 15px;
    border: none;
    margin: 0.2em;
    border-radius: 50%;
    cursor: pointer;
}

.active{
    background: #999;
}
</style>