<template>

 <div id="Shoes">
 <form>
   <label>Sko titel:</label>
        <input type="text"  /> <br>
           <label>Beskrivelse:</label>
        <input type="text"  /><br>
        <label>Pris:</label>
        <input type="text"  /><br>
           <label>Farve:</label>
        <input type="text"  /><br>
           <label>Størrelse:</label>
        <input type="text"  /><br>
           <label>varestatus:</label>
        <input type="text"  /><br>
    <Button  href="/edit">Opret varen</Button>     
 </form>

</div>

     
</template>

<script>




export default {
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


    



