<template>
<div id="app">
  <h1>Bitcoin Price Index 1 API TEST</h1>

  <section v-if="errored">
    <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
  </section>

  <section v-else>
    <div v-if="loading">Loading...</div>

    <div
      v-else
      v-for="currency in info"
      class="currency"
    >
      {{ currency.description }}:
      <span class="lighten">
        <span v-html="currency.symbol"></span>{{ currency.rate_float | currencydecimal }}
      </span>
    </div>

  </section>
</div>
</template>


<script>
import axios from 'axios'
export default {
  name: 'product',
data: function () {
    {
    return {
      info:null,
      loading: true,
      errored: false
    }}
  },
 // filters: {
  //  currencydecimal (value) {
    //  return value.toFixed(2)
   // }
  //},
  mounted () {
    axios
      .get('http://localhost:53264/api/values')
      .then(response => {
        this.info = response.data.bpi
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  },
}
</script>

