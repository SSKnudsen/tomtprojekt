<template>

  <div class="home">
    
    <HelloWorld msg="Test. "/>

 <p>
      Her er en oversigt over brugerne der skal vil du se en gennemgang af produkter som du kan ligge i kurven<br>
   <hr>    

<ul>
<h1>Navn: {{Name}} </h1>
 <h1>Fødselsdag:   {{OrderLines}} </h1>

  
</ul>
<hr>

  

  </div>




   </template>
<script>





import axios from 'axios'
export default {
  name: 'Shoppingbasket',
data: function () {
    {
    return {
      Name:null,
      loading: true,
      errored: false
    }}
  },


  mounted () {
    axios
      .get('http://localhost:53264/api/values')
      .then(response => {
        this.info = response.data
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  },
}
</script>



