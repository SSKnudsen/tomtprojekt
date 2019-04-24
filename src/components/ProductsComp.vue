<template>
    
    
    
    
    <div id="Shoes">
        <ul>
            <li v-for="ninja in products" v-on:click="ninja.show = !ninja.show">
                <h2>{{ ninja.name }}</h2>
                <h3 v-show="ninja.show">{{ ninja.Description  }}</h3>
                <h3 v-show="ninja.show">{{ ninja.Price  }}</h3>
                <h3 v-show="ninja.show">{{ ninja.Brand  }}</h3>
                <h3 v-show="ninja.show">{{ ninja.Color  }}</h3>
                <h3 v-show="ninja.show">{{ ninja.size  }}</h3>
                <h3 v-show="ninja.show">{{ ninja.Status  }}</h3>
                <h3 v-show="ninja.show">{{ ninja.image  }}</h3>
                <Button v-on:click="">Læg varen i kurven</Button>
                <Button  href="/edit">rediger varen</Button>                
                <Button  href="/Delete">Slet varen</Button>                

            </li>

        </ul>
    </div>

</template>



<script>


export default {
    name: 'Product',
    data(){
        return{
            products: [
                {id: 1, name: 'Redshoe - Addidas', Description: 'Run is always fun',  Price: 1300, Brand: 'Adidas', Color: 'Red', size: '10', Status:'instock',  image: 'logo.png', show: false },
                {id: 2, name: 'Addidas -Yellow', Description: 'Run is always fun',  Price: 1300, Brand: 'Adidas',Color: 'Yellow', size: '10', Status:'instock', show: false},
                {id: 3, name: 'Asics -Yellow', Description: 'Run is always fun',  Price: 1300, Brand: 'Asics',Color: 'Yellow', size: '10', Status:'instock', show: false},
                {id: 4, name: 'asics - Blueshoe', Description: 'Run is always fun',  Price: 1300, Brand: 'Asics', Color:'Blue', size: '10', Status:'instock', show: false},
            ]
        }
    }
}






</script>


<style scoped>
#Shoes{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}
</style>


    