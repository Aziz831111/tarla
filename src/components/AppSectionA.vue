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
            
                <button class="btn">
                    Shop pastry kits
                </button>
            
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



<style lang="scss">
.wrapper{
    background-color: #FFC3A0;
    width: 100%;
    height: 100vh;
    padding-bottom: 50px;
    @media (max-width: 768px) {
        height: 55vh;
    };
    @media (max-width: 425px) {
        height: 115vh;
    };
    @media (max-width: 390px) {
        height: 105vh;
    };
    
    

}
.title_inner{
    margin-top: 30px;
    position: absolute;
    top: 107px;
    margin-left: 16px;
    width: 189px;
    height: 90px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 76px;
    line-height: 90px;
    color: black;
    @media (max-width: 768px) {
        font-size: 50px;
        top: 60px;
    };
    @media (max-width: 320px){
        font-size: 30px;
    }
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
    @media (max-width: 768px) {
        font-size: 50px;
        top: 135px;
    };
    @media (max-width: 320px){
        font-size: 30px;
        width: 244px;

    }
}

.text{
    margin-left: 16px;
    top: 320px;
    width: 450px;
    height: 145px;
    position: absolute;
    @media (max-width: 768px) {
        top: 225px;
        width: 377px;
    };
    @media (max-width: 375px){
        width: 324px;
    }
    @media (max-width: 390px){
        width: 350px;
    }
    @media (max-width: 320px){
        width: 287px;
    }
}

.text_inner{
    

    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    @media (max-width: 768px) {
        font-size: 14px;
    };
    

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
    @media (max-width: 768px) {
        height: 32px;
        top: 340px;
        width: 196px;
    };
    @media (max-width: 375px){
        top: 368px;
    }
    @media (max-width: 390px){
        top: 369px;
        margin-left: 88px;
    }
    @media (max-width: 320px){
        top: 413px;
        margin-left: 60px;
    }
    
}
.carousel img{
    width: 800px;
    height: 550px;
    border-radius: 10px; 
    @media (max-width: 1024px) {
        width: 506px;
        height: 423px;
    };
    @media (max-width: 768px) {
        width: 355px;
        height: 238px;
    };
    @media (max-width: 390px) {
        width: 348px;
        height: 180px;
        
    }
    @media (max-width: 320px) {
        width: 278px;
        height: 133px;
    }
}
.carousel{
    margin-top: 30px;
    position: absolute;
    width: 800px;
    height: 550px;
    right: 0;
    margin-right: 20px;

    @media (max-width: 1024px) {
        width: 506px;
        height: auto;
    };
    @media (max-width: 768px) {
        width: 355px;
        height: auto;
    };
    @media (max-width: 425px) {
        top: 375px;
        height: 238px;
        margin: 35px;
    };
    @media (max-width: 375px){
        margin: 15px;
        top: 390px;
        width: 345px;
    }
    @media (max-width: 390px) {
        width: 348px;
        height: 180px;
        margin: 20px;
        top: 392px;
    }
    @media (max-width: 320px) {
        width: 278px;
        height: 133px;
        margin: 20px;
        top: 451px;
    }
}

</style>

