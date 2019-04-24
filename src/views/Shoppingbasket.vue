<template>
  <div class="home">
    
    <HelloWorld msg="Velkommen til løbdigglad.dk - klik på linksne i toppen af hjemmesiden for at komme nedtil den ønskede funktionalitet. "/>
  </div>
</template>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/ShopbasketComp.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
