<template>
  <Headers>
    <h1>Netflix</h1>
  </Headers>
</template>

<script>
import Headers from './Headers.vue'

export default {
    name: 'Home',
    components:{
      Headers
    },
    mounted(){
      let user = localStorage.getItem("user-info");
      if(!user){
        //redirection to SignIn page if user is empty
        this.$router.push({name:'SignIn'});
      }
    } 

}
</script>

<style>
h1{
    color: salmon
}
</style>