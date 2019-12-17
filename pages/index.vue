<template>
<div >
  <LoginNavbar/>
  <hr>
  <div class="loginpanel">
    <section class="logincontent">
      <h1 class="title is-3">
        Login Now If You Have A Account.....
      </h1>
      <h1>
         <p class="content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis culpa veniam dolorum accusamus magnam ea consequatur nam a, maiores quas recusandae voluptatem excepturi molestias doloremque consequuntur laboriosam? Saepe perspiciatis earum quibusdam nihil consequatur dolore maxime assumenda fugit suscipit, voluptatem, tempora laboriosam! Odio voluptates, voluptatum quia maiores deserunt nostrum numquam nesciunt?</p>
      </h1>
    </section>
    <section class="container max-width logincard">
      <form v-on:submit.prevent="submit">
        <b-field label="Email" v-bind:type="(validation.hasError('email'))?'is-danger':'is-success'" v-bind:message="(validation.hasError('email'))?validation.firstError('email'):''">
            <b-input type="email" v-model="email" maxlength="30"></b-input>
        </b-field>

        <b-field label="Password" v-bind:type="(validation.hasError('password'))?'is-danger':'is-success'" v-bind:message="(validation.hasError('password'))?validation.firstError('password'):''">
            <b-input type="password" class="is-success" v-model="password" password-reveal></b-input>
        </b-field>
        <b-field>
        <b-checkbox v-model="remember_me" type="is-success">Remember Password</b-checkbox>
        </b-field> 
        <b-field><button class="button is-success w-100 is-fullwidth" type="submit" v-bind:class="{ 'is-loading': form.loading }">Login</button></b-field>
         <b-field class="has-text-centered">
                            <nuxt-link class="is-size-7 has-text-black" to="/forgot-password">Forgot Password?</nuxt-link>
        </b-field>
      </form>
    </section>
  </div>
  <hr>
  <Loginfooter/>
</div>
</template>

<script>
import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)

import {auth} from '~/plugins/firebase.js'
import SimpleVueValidation from "simple-vue-validator"
import LoginNavbar from '../components/LoginNavbar'
import Loginfooter from '../components/Loginfooter'

const Validator = SimpleVueValidation.Validator;
export default {
  components:{
     LoginNavbar,
     Loginfooter
  },
        data() {
    return {
      form: {
        suc: "",
        err: "",
        loading: false
      },
      email: "",
      password: "",
      remember_me: true
    };
  },
  validators: {
    email: function(value) {
      return Validator.value(value)
        .required()
        .email();
    },
    password: function(value) {
      return Validator.value(value)
        .required()
        .maxLength(35);
    }
  },
  methods: {
    submit() {
      const self = this;
      self.form.err = "";
      self.form.suc = "";

      self.form.loading = true;
      self.$validate().then(function(success) {
        if (success) {
          auth
            .signInWithEmailAndPassword(self.email, self.password)
            .then(() => {
              self.form.suc = "Successfully Login!";
              setTimeout(() => {
                self.form.loading = false;
                self.$router.push("/Success");
              }, 1500);
            })
            .catch(function(error) {
              var errorCode = error.code;
              self.form.err = error.message;
              self.form.loading = false;
            });
        } else {
          self.form.loading = false;
        }
      });
    }
  }
}
</script>

<style scoped>
.logincard{
  margin-top:2rem;
  width: 300px;
  height:inherit;
  display:flex;
  justify-content: center;
  align-items: center;
}
.logincontent{
  padding-left: 10rem;
  max-width:500px;
}
.loginpanel{
  width:100%;
  height:700px;
  display:flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>