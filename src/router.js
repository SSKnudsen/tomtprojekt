import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Product from './views/Product.vue'
import Userinformation from './views/userinformation.vue'
import shbasket from './views/Shoppingbasket.vue'
import SingleProduct from './views/singlep.vue'
import opret from './views/Create.vue'
import Coin from './components/Coin.vue'
import web from './components/webAPI.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/coin',
      name: 'coin',
      component: Coin
    },

    {
      path: '/WebAPI',
      name: 'webA',
      component: web
    },



    {
      path: '/product',
      name: 'product',
      component: Product      
      
      },




      {

        path: '/userinformation',
        name: 'userinformation',
        component: Userinformation   


      },
      {
      path: '/Shoppingbasket',
      name: 'Shoppingbasket',
      component: shbasket
       }, 
       
       {
        path: '/Create',
        name: 'Create',
        component: opret
         } 
       
     
  ]
})

