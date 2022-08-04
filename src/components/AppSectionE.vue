<template>
    <div class="Sec_e">
        <div class="card_wrapp">
            <div class="img">
                <img src="../assets/sec5/card1.png" alt="" class="card_imrge">
            </div>
            <div class="title_card">
                <h2 class="title_card_text">
                    Better than <br> the bakery
                </h2>
            </div>
            <div class="inner_txt">
                <p class="inner_card_txt">
                    You’ll soon be making pastries to rival 
                    the best bakeries in town. We use only
                    the best ingredients for generous pastries
                    that taste and smell amazing. So good, that you’ll take all the 
                    credit.
                </p>
            </div>
        </div>
        <div class="card_wrapp">
            <div class="img">
                <img src="../assets/sec5/card2.png" alt="" class="card_imrge">
            </div>
            <div class="title_card">
                <h2 class="title_card_text">
                    Planet-friendly <br> packaging
                </h2>
            </div>
            <div class="inner_txt">
                <p class="inner_card_txt">
                    We’ve done everything we can to make sure 
                    our packaging has the lightest footprint on
                    the planet as possible. We’ve made sure 
                    everything is recyclable,
                    and use as little packaging as we can.
                </p>
            </div>
        </div>
        <div class="card_wrapp">
            <div class="img">
                <img src="../assets/sec5/card3.png" alt="" class="card_imrge">
            </div>
            <div class="title_card">
                <h2 class="title_card_text">
                    Simple to bake<br> at home
                </h2>
            </div>
            <div class="inner_txt">
                <p class="inner_card_txt">
                    We’ve done the hard work, so you don’t 
                    have to. Every pastry is easy to make 
                    with our 3-step instructions and doesn’t 
                    require any special tools – just an oven!
                </p>
            </div>
        </div>

    </div>
</template>

<script>

import "./infoCard.scss"


export default {

    name:'AppSectionE',
}
</script>

<style lang="scss" scoped>

.Sec_e{
    padding-top: 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 20px;
    grid-row-gap: px;
}

</style>