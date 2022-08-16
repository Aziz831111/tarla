<template>
    <div>
        
        <BayCart 
        v-if="CART.length"
        :cart_data="CART"
        />

    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import BayCart from './AppVueCart.vue'
export default {
    name: 'AppWrapForCart',
    setup() {
        return {};
    },
    components: { 
        BayCart
    },
    computed:{
        ...mapGetters([
            'CART'
        ])
    }
}
</script>

<style lang="scss">

</style>