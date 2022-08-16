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
<AppCarosel />
<AppSectionFooter />


</template>

<script>

import AppHeader from './AppHeader.vue';
import AppSectionA from './AppSectionA.vue';
import AppSectionB from './AppSectionB.vue';
import AppSectionC from './AppSectionC.vue';
import AppCart from './AppCart.vue';
import AppSectionD from './AppSectionD.vue';
import AppSectionE from './AppSectionE.vue';
import AppSectionF from './AppSectionF.vue';
import AppSectionFooter from './AppSectionFooter.vue';
import AppSectionJ from './AppSectionJ.vue';
import AppCarosel from './AppCarosel.vue';





export default {
    name: 'AppHome',
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
      AppCarosel,
      AppSectionFooter,
    }
}
</script>

<style>
</style>
