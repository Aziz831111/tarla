<template>
    <div class="catalog">
        <AppHeader />
        <div class="catalog__title">
            <h1 class="catalog__title-text">
                Catalog
            </h1>
        </div>
        <div class="catalog__wrapper">
            
        
        <AppCatalogItem 
            v-for="product in PRODUCTS"
            :key="product.id"
            :product_data ="product"
            @addToCart = "addToCart"
        />
        </div>
        
    </div>
</template>

<script>
import AppHeader from "./AppHeader.vue"
import AppCatalogItem from "./AppCatalogItem.vue"


import { mapActions, mapGetters } from 'vuex'
export default {
    name:'AppCatalog',
    components:{
    AppHeader,
    AppCatalogItem,
    
},
    data () {
        
        return {
            

        }
    },
    computed:{
        ...mapGetters([
            'PRODUCTS',
            'CART'
        ])

    },
    methods:{
        ...mapActions([
            'GET_PRODUCTS_FROM_API',
            'ADD_TO_CART'
        ]),
        addToCart(data){
            this.ADD_TO_CART(data)
        }
    },
    mounted(){
        this.GET_PRODUCTS_FROM_API()
    }
}
</script>

<style lang="scss">
.catalog__wrapper{
    flex-wrap: wrap;
    display: flex;
    justify-content: space-around;
}
.catalog{
    background-color: #F5EDE7;
    &__title-text{
        text-align: center;
        margin: 40px;
        text-transform: uppercase;
    }
}
</style>