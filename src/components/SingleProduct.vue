<template>
      
        <h1>{{ prod }}</h1>
       
      
   
</template>

<script>
export default {
data(){
    return {
        id: this.$route.params.id, 
        prod
    }
},

 
 created() {
        this.$http.get('http://jsonplaceholder.typicode.com/prod/' + this.id).then(function(data){
            // console.log(data);
            this.prod = data.body;
        });
    }
}
</script>
