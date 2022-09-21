<template>
  <h1>Netflix</h1>
</template>

<script>
export default {
    name: 'Home',
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
    color: #fff
}
</style>