<template>
    <div class="container">
        <NavBar />
        <div class="what_container">
            <div class="right">
                <swiper
                    :slides-per-view="1"
                    @swiper="onSwiper"
                    @slideChange="onSlideChange"
                >
                        <swiper-slide>Slide 1</swiper-slide>
                        <swiper-slide>Slide 2</swiper-slide>
                        <swiper-slide>Slide 3</swiper-slide>
                </swiper>
            </div>
            <div class="left">
                <p class="head_1">CORE COMPETENCIES</p>
                <p>
                    Here are the skills or languages that i acquired during my
                    working experiences and also in my free time studying
                </p>
            </div>
        </div>
    </div>
</template>
<script>
import NavBar from "@/components/header/NavBar.vue";
import { SwiperSlide } from "swiper/vue";
import "swiper/css";
export default {
    components: {
        NavBar,
        SwiperSlide,
    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log("slide change");
        };
        return {
            onSwiper,
            onSlideChange,
        };
    },
};
</script>
<style lang="scss" scoped>
.container {
    background-image: url("../assets/images/what-first.png");
    background-repeat: no-repeat;
    background-size: cover;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    min-height: 100vh;
    .what_container {
        display: flex;
    }
}
</style>
