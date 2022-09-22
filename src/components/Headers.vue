<template>
  <header>
    <nav class="navbar navbar-light">
      
        <a class="navbar-brand" href="#">
            <img class= "nt-logo" src="../assets/netflixLogo.png" alt="Netflix Logo" >
        </a>

        <button type="submit" @click.prevent="logout" class="logOutBtn">Logout</button>
      
      </nav>

  
    </header>
</template>

<script>
export default {
    name: 'Header',
    methods: {
      logout(e){
        localStorage.clear();
        this.$router.push({name: 'SignIn'})

      }
    }

}
</script>

<style>
  nav.a{
    float: left;
    width: 100%;
    display: inline-flex;
    border: blue dotted 3px;
  }
  .nt-logo{
    width: 250px;
    float: left;
  }
  .logOutBtn{
    float: right;
    padding: 15px;
    margin: 50px;
    width: 100px;
    border: 10px;
    background-color:#BF0603;
    color: #F8F9FA;
    border-radius: 5px;
    opacity: none;
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
  }
</style>