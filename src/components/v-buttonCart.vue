<template>
        
        <div id="buttonCoun">
            <button @click="add" 
                class="btn_cart" >
                Celect
                <span class="cirkul">
                    <p >{{count}}</p>  
                </span>
            </button>

            <button @click="del"
                class="remuve">
                delete
            </button>
        </div>

</template>


<script>

export default {
    name: "BtnCart",
    methods:{
        add: function(){
            this.count++
        },
        del: function(){
            if (this.count>0) this.count--;
        },
    },
    data() {
        return {
            count: 0
        }
    }
}
</script>




<style lang="scss" scoped>
#buttonCoun{
    display: flex;

}
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
    .cirkul{
        p{
            padding: 2px;
        }
    }
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
.remuve{
    cursor: pointer;
    margin-left: 10px;
    border: 1px solid #0126DE;
    background: transparent;
    border-radius: 40px;
    color: #0126DE;
    &:hover{
        color: #fc6006;
    }
}


</style>
