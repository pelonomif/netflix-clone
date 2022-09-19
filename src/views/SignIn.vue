<template>
    <div class="card">
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
                            <button type="submit" class="btn"> Sign In</button>
                        </div>
                        <div class="checkbox">
                            <input
                            id="rememberMe"
                            type="checkbox"
                            class="checkboxInput"
                            v-model="rememberMe">
                            <span class="checkboxText">Remember Me</span>
                        </div>

                    </form>













                </div>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
    name:'SignIn',
    data(){
        return{
            email:'',
            password:''
        }
    }
}
</script>

<style>
.card{
    
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 100px auto;
    width: 500px;
    background-color:rgba(0, 0, 0, 0.8);
    color: #fff;
    border-radius: 5px;
}
form{
   
    display: block;
    margin: 0 auto;
    width:100%;
}
.SignIn{
    margin-top: 30px;
    text-align: left;
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
</style>
      

