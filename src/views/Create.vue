<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/Forest.gif">
    
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>

</template>


<script>
// @ is an alias to /src
import HelloWorld from '@/components/CreateComponent.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
