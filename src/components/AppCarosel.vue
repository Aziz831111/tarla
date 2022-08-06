<template>
    <div id="carouselFuter">
        <div class="carousel_title">@tarlabakes</div>
        <div class="fuuterCar">
            <swiper
                :autoplay="{
                    delay: 2500,
                    disableOnInteraction: false,
                }"
                ref="{swiperRef}"
                    :pagination="{
                        clickable: true,
                    }"
                    :slidesPerView="4"
                    :centeredSlides="true"
                    :spaceBetween="20"
                    :navigation="false"
                    :modules="modules"
                    class="mySwiper"
            >
                <swiper-slide><img src="../assets/carousel/image1.png" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/carousel/image2.png" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/carousel/image3.png" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/carousel/image4.png" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/carousel/image5.png" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/carousel/image6.png" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/carousel/image1.png" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/carousel/image2.png" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/carousel/image3.png" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/carousel/image4.png" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/carousel/image5.png" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/carousel/image6.png" alt=""></swiper-slide>
            </swiper>
        </div>

    </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/scss";
import { Autoplay, Pagination} from 'swiper';
export default {

    name:'AppCarousel',
    components: {
            Swiper,
            SwiperSlide,
            
        },
    setup () {
        

        return {
            modules: [Autoplay, Pagination]
        }
    }
}
</script>

<style lang="scss" scoped>
#carouselFuter{
    background-color: #E7D8A5;
    height: 500px;
    margin-top: -87px;
    margin-bottom: 120px;
}

.carousel_title{
    text-align: center;
    padding: 20px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 43px;
    line-height: 60px;
}
.fuuterCar img{
    
        border-radius: 30px;
    
}
</style>