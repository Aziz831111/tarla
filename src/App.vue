<template>
<AppHeader />
<AppSectionA />
<AppSectionB />
<AppSectionC />
<AppCart />
<AppSectionD />
<AppSectionE />
<AppSectionF />
<AppSectionJ />
<AppSectionFooter />


</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppSectionA from './components/AppSectionA.vue';
import AppSectionB from './components/AppSectionB.vue';
import AppSectionC from './components/AppSectionC.vue';
import AppCart from './components/AppCart.vue';
import AppSectionD from './components/AppSectionD.vue';
import AppSectionE from './components/AppSectionE.vue';
import AppSectionF from './components/AppSectionF.vue';
import AppSectionFooter from './components/AppSectionFooter.vue';
import AppSectionJ from './components/AppSectionJ.vue';




export default {
  name: 'App',
  components: {
    AppHeader,
    AppSectionA,
    AppSectionB,
    AppSectionC,
    AppCart,
    AppSectionD,
    AppSectionE,
    AppSectionF,
    AppSectionJ,
    AppSectionFooter,
}
}
</script>

<style>
#app {
  font-family: 'DM Sans', 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  
}
</style>
