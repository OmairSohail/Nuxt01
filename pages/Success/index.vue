<template>
     <div class="container">
       <AppNavbar/>
       
    </div>
</template>

<script>
import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import AppNavbar from '~/components/AppNavBar'

Vue.use(Buefy) 
export default {
    components:{
        AppNavbar
    }
}
</script>