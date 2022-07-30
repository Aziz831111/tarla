<template>
        
        <button class="btn_cart" >
            <p class="title">
                Add to cart
            </p>

            <span class="cirkul">
                <p>1</p>
            </span>
        </button>

</template>


<script>


export default{
    name: 'BtnCart'
}


</script>




<style lang="scss" scoped>
.btn_cart{
    align-items: center;
    display: flex;
    justify-content: space-around;
    border: 1px solid #0126DE;
    border-radius: 35px;
    color: #0126DE;
    cursor: pointer;
    height: 35px;
    width: 145px;
    background: transparent;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    &:hover{
        color: #fc6006;
    }
    .cirkul{
        height: 20px;
        width: 20px;
        border: 1px solid #0126DE;
        border-radius: 50px;

    }
}

</style>
