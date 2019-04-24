<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/about">Omkring løbesko shoppen</router-link> |
       <router-link to="/product">se hvilke løbesko vi har på lager</router-link> | 
       <router-link to="/userinformation"> Brugerinformation</router-link> | 
       <router-link to="/Shoppingbasket"> varekurv</router-link> | 
       <router-link to="/Create"> Opret vare</router-link> |
      <router-link to="/Coin">About</router-link>
   <router-link to="/product">About</router-link>
   
   
   
   
   
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
