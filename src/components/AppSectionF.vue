<template>
    <div class="sec__f">
        <div class="one_prev">
            <div class="img_lern">
                <img src="../assets/sec6/secF1.png" alt="" class="lern_imege">
            </div>
            <div class="inner_txt_lern">
                <div class="title_lern">
                <p>Amazing Ingredients</p>
            </div>
            <div class="text_lern">
                <h4>
                    We like to keep things simple and authentic.
                    We’ve sourced the very best from the very best, 
                    from our Poitou-Charentes butter to our Valrhona chocolate batons.
                </h4>
            </div>
            <BtnLern  style="margin-top: 30px"/>
            </div>
            <div class="solar_up">
                <img class="solar_1" src="../assets/sec6/secF2.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import BtnLern from './v-buttonLern.vue'
export default {
    components: { BtnLern },
    name:'AppSectionF'
}
</script>

<style lang="scss" scoped>

.img_lern{
    padding-left: 90px;
}

.one_prev,.two_prev{
    display: flex;
    padding-top: 50px;
    height: 400px;
}
.title_lern{
    padding-bottom: 20px;
}
.inner_txt_lern{
    z-index: 5;
    padding-top: 80px;
    padding-left: 20px;
    width: 580px;
    height: 250px;
    .text_lern{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 40px;
    }
}
.solar_1{
    z-index: 3;
    position: absolute;
    right: 150px;
}







</style>