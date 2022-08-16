<template>
    <div class="cart__imems-wrapp">
        <router-link to="catalog">
            <div class="back__to">
                back to catalog
            </div>
        </router-link>
        <h1>CART</h1>
        <h3 v-if="!cart_data.length">The are no products in cart......</h3>
        <CartItems
            v-for="(item,index) in cart_data" 
            :key="item.id"
            :card_item_data="item"
            @deliteCart="deliteCart(index)"
            @increment="increment(index)"
            @decrement="decrement(index)"
        />
        <div class="cart__total">
            <h2 class="total">total</h2>
            <h2 class="total__item">{{CartTotal}}<span>£</span></h2>
        </div>

    </div>
</template>

<script>
import { mapActions } from 'vuex'
import CartItems from './v-cartItems.vue'

export default {
    name:'BayCart',
    components:{
        CartItems
    },
    props:{
        cart_data:{
            type: Array,
            default(){
                return []
            }
        }
    },
    computed:{
        CartTotal(){
            let result = []
            if(this.cart_data.length){
                for(let item of this.cart_data){
                    result. push(item.price * item.quantity)
                }
                result = result.reduce(function(sum, el){
                    return sum + el
                })
            }            
            return result
        }
    },
    methods:{
        ...mapActions([
            'DELETE_FROM_CART',
            'INCREMENT_ITEM',
            'DECREMENT_ITEM'
        ]),
        deliteCart(index){
            this.DELETE_FROM_CART (index)
        },
        increment(index){
            this.INCREMENT_ITEM (index)
        },
        decrement(index){
            this.DECREMENT_ITEM (index)
        }
    },
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" >
.back__to{
    padding: 5px;
    border: 1px #000 solid;
    margin: 30px;
    width: 150px;
    
}
.cart__imems-wrapp{
    text-align: -webkit-center;
}
.cart__total{
    height: 80px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(2, 73, 34);
    color: #fff;
    display: flex;
    justify-content: center;
    font-size: 22px;
    .total{
        margin: 10px;
        &__item{
            margin: 10px;
            span{
                padding-left: 10px;
            }

        }
    }
}
</style>