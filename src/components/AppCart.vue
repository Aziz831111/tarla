<template>
    <div class="cart">
        <div class="title">
            <h1 class="title_text">
                Shop pastry kits
            </h1>
        </div>

        <div class="cart_grig">
            <swiper
                ref="{swiperRef}"
                :slidesPerView="3"
                :centeredSlides="true"
                :spaceBetween="30"
                :pagination="{
                type: 'fraction',
                }"
                :navigation="true"
                :modules="modules"
                class="mySwiper"
            >
                <swiper-slide>
                    <div class="wrapperCart">
                    <div class="cart_items">
                        <img src="../assets/cartImg/All-butter.png" alt="" class="img_cart">
                        
                        <div class="rating_glo">
                            <div class="cart_title">
                                <h3 class="cart_inner">
                                    All-Butter <br>Croissant
                                </h3>
                            </div>
                            <div class="rating">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star "></span>
                                <span class="fa fa-star "></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </div>
                        </div>
                        
                        <div class="options">
                            <div class="artikul">
                                <p>Kit of 6</p>
                                <span>-</span>
                            </div>
                            <div class="price">
                                <span>£</span>
                                <p>12</p>
                            </div>
                        </div>
                        <div class="like">
                            <img src="../assets/cartImg/like.png" alt="">
                            <img src="../assets/cartImg/dislike.png" alt="">
                        </div>
                        <BtnCart />
                    </div>

                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="wrapperCart">
                        <div class="cart_items">
                            <img src="../assets/cartImg/Almond.png" alt="" class="img_cart">
                            
                            <div class="rating_glo">
                                <div class="cart_title">
                                    <h3 class="cart_inner">
                                        Almond  <br>Croissant
                                    </h3>
                                </div>
                                <div class="rating">
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star "></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                </div>
                            </div>
                            
                            <div class="options">
                                <div class="artikul">
                                    <p>Kit of 6</p>
                                    <span>-</span>
                                </div>
                                <div class="price">
                                    <span>£</span>
                                    <p>13.50</p>
                                </div>
                            </div>
                            <div class="like">
                                <img src="../assets/cartImg/like.png" alt="">
                                <img src="../assets/cartImg/dislike.png" alt="">
                            </div>
                            <BtnCart />
                        </div>

                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="wrapperCart">
                        <div class="cart_items">
                            <img src="../assets/cartImg/Aprihot.png" alt="" class="img_cart">
                            
                            <div class="rating_glo">
                                <div class="cart_title">
                                    <h3 class="cart_inner">
                                        Apricot  <br>Danish
                                    </h3>
                                </div>
                                <div class="rating">
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star "></span>
                                    <span class="fa fa-star "></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                </div>
                            </div>
                            
                            <div class="options">
                                <div class="artikul">
                                    <p>Kit of 6</p>
                                    <span>-</span>
                                </div>
                                <div class="price">
                                    <span>£</span>
                                    <p>12</p>
                                </div>
                            </div>
                            <div class="like">
                                <img src="../assets/cartImg/like.png" alt="">
                                <img src="../assets/cartImg/dislike.png" alt="">
                            </div>
                            <BtnCart />
                        </div>

                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="wrapperCart">
                        <div class="cart_items">
                            <img src="../assets/cartImg/pianAux.png" alt="" class="img_cart">
                            
                            <div class="rating_glo">
                                <div class="cart_title">
                                    <h3 class="cart_inner">
                                        Pain Aux  <br>Raisins
                                    </h3>
                                </div>
                                <div class="rating">
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star "></span>
                                    <span class="fa fa-star "></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                </div>
                            </div>
                            
                            <div class="options">
                                <div class="artikul">
                                    <p>Kit of 6</p>
                                    <span>-</span>
                                </div>
                                <div class="price">
                                    <span>£</span>
                                    <p>12</p>
                                </div>
                            </div>
                            <div class="like">
                                <img src="../assets/cartImg/like.png" alt="">
                                <img src="../assets/cartImg/dislike.png" alt="">
                            </div>
                            <BtnCart />
                        </div>

                    </div>
                </swiper-slide>

                <swiper-slide>
                    <div class="wrapperCart">
                    <div class="cart_items">
                        <img src="../assets/cartImg/pianChoco.png" alt="" class="img_cart">
                        
                        <div class="rating_glo">
                            <div class="cart_title">
                                <h3 class="cart_inner">
                                    Pain Au  <br>Chocolat
                                </h3>
                            </div>
                            <div class="rating">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star "></span>
                                <span class="fa fa-star "></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </div>
                        </div>
                        
                        <div class="options">
                            <div class="artikul">
                                <p>Kit of 6</p>
                                <span>-</span>
                            </div>
                            <div class="price">
                                <span>£</span>
                                <p>12</p>
                            </div>
                        </div>
                        <div class="like">
                            <img src="../assets/cartImg/like.png" alt="">
                            <img src="../assets/cartImg/dislike.png" alt="">
                        </div>
                        <BtnCart />
                    </div>

                    </div>
                </swiper-slide>

                <swiper-slide>
                    <div class="wrapperCart">
                    <div class="cart_items">
                        <img src="../assets/cartImg/Raspberry.png" alt="" class="img_cart">
                        
                        <div class="rating_glo">
                            <div class="cart_title">
                                <h3 class="cart_inner">
                                    Raspberry  <br>Danish
                                </h3>
                            </div>
                            <div class="rating">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star "></span>
                                <span class="fa fa-star "></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </div>
                        </div>
                        
                        <div class="options">
                            <div class="artikul">
                                <p>Kit of 6</p>
                                <span>-</span>
                            </div>
                            <div class="price">
                                <span>£</span>
                                <p>12.50</p>
                            </div>
                        </div>
                        <div class="like">
                            <img src="../assets/cartImg/like.png" alt="">
                            <img src="../assets/cartImg/dislike.png" alt="">
                        </div>
                        <BtnCart />
                </div>

                    </div>
                </swiper-slide>

                <swiper-slide>
                    <div class="wrapperCart">
                    <div class="cart_items">
                        <img src="../assets/cartImg/pianChoco.png" alt="" class="img_cart">
                        
                        <div class="rating_glo">
                            <div class="cart_title">
                                <h3 class="cart_inner">
                                    Pain Au  <br>Chocolat
                                </h3>
                            </div>
                            <div class="rating">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star "></span>
                                <span class="fa fa-star "></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </div>
                        </div>
                        
                        <div class="options">
                            <div class="artikul">
                                <p>Kit of 6</p>
                                <span>-</span>
                            </div>
                            <div class="price">
                                <span>£</span>
                                <p>12</p>
                            </div>
                        </div>
                        <div class="like">
                            <img src="../assets/cartImg/like.png" alt="">
                            <img src="../assets/cartImg/dislike.png" alt="">
                        </div>
                        <BtnCart />
                    </div>

                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/scss";

import "swiper/scss/pagination";
import "swiper/scss/navigation";
import "./cart.scss"

import BtnCart from './v-buttonCart.vue'
    export default {
        name: 'AppCart',
        components: {
            BtnCart,
            Swiper,
            SwiperSlide,
        },
        setup() {   
            return {
                modules: [Pagination, Navigation],
            };
        },    
    }
    
</script>

<style lang="scss" scoped>

.cart{
    
    margin-top: 90px;

    .title{
        text-align: center;
        padding-top: 50px;
    }
        &.title_text{
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 39px;
            line-height: 56px;
            color: #0000;
        }
    
}




</style>