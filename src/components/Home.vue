<template>
  <Headers>
    <h1>Netflix</h1>
  </Headers>
  <Movies/>
</template>

<script>
import Headers from './Headers.vue'
import Movies from './Movies.vue'
export default {
    name: 'Home',
    data(){
      return{
        name: '',
        movies:[],
      }
    },
    components:{
      Headers,
      Movies,
    },
    mounted(){
      let user = localStorage.getItem("user-info");
      if(!user){
        //redirection to SignIn page if user is empty
        this.$router.push({name:'SignIn'});
      }
    },
  
  
}
</script>

<style>
</style>