<template>

    <header>
    <nav class="navbar navbar-light">
      <a class="navbar-brand" href="#">
          <img class= "logo" src="../assets/netflixLogo.png" alt="Netflix Logo" >
      </a>
      </nav>
  
    </header>  
    <main>
      
      <form @submit.prevent="handleSubmit">
          <div class="SignIn">
              <div class="bg tile">
                  <div class="tile-container">
                      <h1 class="tile-title"> Sign In</h1>
  
                      <form>
                          <div class="form-field">
                              <div class="input-wrapper">
                                  <input
                                      id="email"
                                      type="email"
                                      required
                                      placeholder="Email"
                                      v-model="email"
                                      :class = "[{ 'input--filed' : email}, 'input']"
                                      >
                                      
                                  
                              </div>
                          </div>
                          <div class="form-field">
                              <div class="input-wrapper">
                                  <input
                                      id="password"
                                      type="password"
                                      required
                                      placeholder="Password"
                                      v-model="password"
                                      :class = "[{ 'input--filed' : password}, 'input']"
                                      >
                                  
                                  
                              </div>
                          </div>
                          <div class="form-btn">
                              <button type="submit" class="btn" @click.prevent="signIn" value="signIn"> Sign In</button>
                          </div>
                      
                          <div class="remember-me">
                          <input type="checkbox" v-model="selected" id="selected" class="form-check-input">
                          <label for="selected" class="form-check-label">Remember Me</label>
                          
                          <div class="help">
                              <p class="help"> Need help?</p> 
                          </div>
                          </div>
                          <div class="signUp">
                          <p>New to Netflix? <span class="signUpNow">Sign up now</span></p>
                          <p> This page is protected by Google reCAPTCHA to ensure you're not a bot.
                              <span class="learnMore">Learn More</span></p>
                          </div>
                      </form>
  
                  </div>
              </div>
          </div>
      </form>
    <router-view/>
    </main>
  </template>
  
  <script> 
  import axios from 'axios'
  export default {
    name:'SignIn',
    data(){
      return{
          email:'',
          password:'',
          selected: true
      
      }
    },
   
    methods: {
      async signIn(e){
        let result = await axios.post("http://localhost:3000/users",{
            email: this.email,
            password: this.password,
        });
          console.log(result);
          if (result.status == 201){
 
            localStorage.setItem("user-info", JSON.stringify(result.data))
            //redirecting to the home page
            this.$router.push({name:'Home'})
          }
     
      }
    }, 
    mounted(){
      let user = localStorage.getItem("user-info");
      if(user){
        //redirecting to the home page
        this.$router.push({name:'Home'})
      }
    }

    }
  
    
    </script>
  
  
    <style>
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
 
  .logo{
    width: 200px;
    height:100px;
    float: left;
  }
  .tile-title{
    color: #fff;
  }
  .SignIn{
  
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 100px auto;
    width: 500px;
    background-color:rgba(0, 0, 0, 0.8);
    color: #fff;
    border-radius: 5px;
    margin-top: 30px;
    text-align: left;
  }
  .tile-container{
  
    justify-content: center;
    padding: 70px;
    width: 100%;
  }
  form{
  
    display: block;
    margin: 0 auto;
    width:100%;
  }
  
  input{
    display:block;
    box-sizing: border-box;
    padding: 15px;
    margin: 10px auto;
    width: 100%;
    border: 10px;
    background-color: #343A40;
    color: #ADB5BD;
    font-size: 18px;
    border-radius: 5px;
    opacity: none;
  
  }
  .btn{
    display:block;
    box-sizing: border-box;
    padding: 15px;
    margin: 40px auto;
    width: 100%;
    border: 10px;
    background-color:#BF0603;
    color: #F8F9FA;
    border-radius: 5px;
    opacity: none;
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
  }
  .remember-me{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 15px;
  }
  
  
  
    </style>