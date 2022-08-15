<template>
  <div>
    <!--INÍCIO HEADER-->
  
    <nav class="navbar bg-dark navbar-dark justify-content-center py-3">
        <ul class="nav nav-pills">
          <li class="nav-item">
            <router-link class="nav-link px-5 text-white" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-5 text-white" to="/about">Sobre o Projeto.</router-link>
          </li>
        </ul>
    </nav>
    <!--FIM HEADER-->

    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>
