<template>
    <div class="sec_j">
        <div class="two_prev">
            <div class="solar_dawn">
                <img class="solar_2" src="../assets/sec6/secF3.png" alt="">
            </div>
            <div class="inner_lern_2">
                    <div class="title_lern_2">
                    <p>Legendary Bakes</p>
                </div>
                <div class="text_lern_2">
                    <h4>
                        The inspiration for our brand and 
                        our guiding principles is the Legend of 
                        El Tarlà. A young man who brought joy to the 
                        isolated citizens of Girona during an outbreak of the plague.
                    </h4>
                </div>
                <BtnLern  style="margin-top: 30px"/>
            </div>
            <div class="img_lern_2">
                <img src="../assets/sec6/secF4.png" alt="">
            </div>
        </div>

    </div>
</template>

<script>
import BtnLern from './v-buttonLern.vue'
export default {
    components: { BtnLern },
    name:'AppSectionJ'
}
</script>

<style lang="scss" scoped>
.sec_j{
    height: 100vh;
}
.two_prev{
    display: flex;
    padding-top: 50px;
    height: 400px;
    margin-top: 50px;
}
.inner_lern_2{
    padding-left: 100px;
    z-index: 2;
    padding-top: 150px;
    width: 600px;
    height: 250px;

    .title_lern_2{
        padding-bottom: 30px;
    }

    .text_lern_2{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 40px;
    }
}
.solar_2{
    position: absolute;
    left: 400px;
    padding-top: 295px;
}
.img_lern_2{
        padding-left: 150px;
}
</style>