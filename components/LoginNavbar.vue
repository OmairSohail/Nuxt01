<template>
<div>
<section class="hero is-default is-fullheight">
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
            <img src="@/images/logo.png" alt="Logo">
          </a>
          <span class="navbar-burger burger" data-target="navbarMenuHeroB">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroB" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item is-active">
              Login
            </a>
            <a class="navbar-item">
              Examples
            </a>
            <a class="navbar-item">
              Documentation
            </a>
            <span class="navbar-item">
              <a class="button is-success ">
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span>
                <span>Download</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </nav>
  </div>
  <hr>
  <div class="hero-body">
    <div class="container">
      <h1 class="title is-1">
        Nest&Cut
      </h1>
      <h2 class="subtitle is-2">
       World's best web-based automatic nesting software!
      </h2>
      <p class="content">
        With just a few clicks, get highly optimized nesting as DXF or DWG output for your cutting machines. Start Optimizing & Saving!
         
      </p>
      <a class="button is-success ">
       <span>SignUp Now...</span>
     </a>
    </div>
  </div>
</section>
</div>
</template>

<script>
export default {
    name:'LoginNavbar'
}
</script>

<style scoped>
.hero-head{
  margin-top:14px;
}
</style>