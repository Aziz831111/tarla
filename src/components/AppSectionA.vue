<template>
    <div id="SecA">
        <div class="wrapper">
            <div class="title">
            <h1 class="title_inner">
                Fresh
            </h1>
            <h2 class="title_cool">
                pastry kits
            </h2>
        </div>
        <div class="text">
            <p class="text_inner">
                Bringing the smells and tastes of your
                favourite patisserie to your home.
                Our kits have everything you need to 
                easily make killer pastries every time. 
                We’ve done the tricky bits so all you need 
                to do is roll, proof and bake!
            </p>
        </div>
        <a href="#">
            <button class="btn">
                Shop pastry kits
            </button>
        </a>
        <div class="carousel">
        <swiper
            :autoplay="{
                delay: 4500,
                disableOnInteraction: false,
            }"
            :navigation="true" 
            :modules="modules" 
            class="mySwiper"
            :slides-per-view="1"
            :space-between="50"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
        >
            <swiper-slide><img src="../assets/images/Rectangle.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../assets/images/Rectangle2.png" alt=""></swiper-slide>
            <swiper-slide><img src="../assets/images/Rectangle3.png" alt=""></swiper-slide>
            <swiper-slide><img src="../assets/images/Rectangle4.png" alt=""></swiper-slide>
        </swiper>
        
        </div>
        </div>
    </div>
</template>


<script>
import { Swiper, SwiperSlide} from 'swiper/vue';
import {  Autoplay, Navigation } from "swiper";

import "swiper/css";
import "./reset.css"

import "swiper/css/navigation";




    export default {
        components: {
            Swiper,
            SwiperSlide,
        },


        setup() {
            return {
                modules: [ Autoplay, Navigation],
            };
        },
    };



</script>



<style scoped>
.wrapper{
    background-color: #FFC3A0;
    width: 100%;
    height: 100vh;
    padding-bottom: 50px;

}
.title_inner{
    margin-top: 30px;
    position: absolute;
    top: 107px;
    margin-left: 16px;
    Width: 189px;
    Height: 90px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 76px;
    line-height: 90px;
    color: black;
}

.title_cool{
    position: absolute;
    top: 197px;
    margin-left: 16px;
    width: 364px;
    height: 90px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 78px;
    line-height: 90px;
    color: black;
}

.text{
    margin-left: 16px;
    top: 320px;
    width: 450px;
    height: 145px;
    position: absolute;
}
.text_inner{
    

    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;

}
.btn{
    cursor: pointer;
    position: absolute;
    height: 58px;
    left: 0%;
    top: 485px;
    width: 310px;
    margin-left: 16px;
    border-radius: 35px;
    background: transparent;
    
}
.carousel img{
    width: 800px;
    height: 550px;
    border-radius: 10px; 
}
.carousel{
    margin-top: 30px;
    position: absolute;
    width: 800px;
    height: 550px;
    right: 0;
    margin-right: 20px;
}

</style>

