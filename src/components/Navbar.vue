<template>

  <section class="componentes-navbar">
    <nav class="navbar navbar-expand-md navbar-dark bg-info">
      
      <router-link to="/form">
        <a class="navbar-brand" href="#">Formulario</a>
      </router-link>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <!-- opción ruta binding -->
          <li class="nav-item">
            <router-link to="/multiple">
              <a class="nav-link" href="#">Multiple Choice</a>
            </router-link>
          </li>
          <!-- opción ruta estructura -->
          <!-- <li class="nav-item">
            <router-link to="/estructura">
              <a class="nav-link" href="#">Estructura</a>
            </router-link>
          </li> -->
          <!-- opción ruta atributos -->
          <!-- <li class="nav-item">
            <router-link to="/atributos">
              <a class="nav-link" href="#">Atributos</a>
            </router-link>
          </li> -->
          <!-- opción ruta contadores -->
          <!-- <li class="nav-item">
            <router-link to="/contadores">
              <a class="nav-link" href="#">Contadores</a>
            </router-link>
          </li> -->
          <!-- opción ruta formulario -->
          <!-- <li class="nav-item">
            <router-link to="/formulario">
              <a class="nav-link" href="#">Formulario</a>
            </router-link>
          </li> -->
          <!-- opción ruta formularioav -->
          <!-- <li class="nav-item">
            <router-link to="/formularioav">
              <a class="nav-link" href="#">FormularioAv</a>
            </router-link>
          </li> -->
          <!-- opción ruta http -->
          <!-- <li class="nav-item">
            <router-link to="/http">
              <a class="nav-link" href="#">Http</a>
            </router-link>
          </li> -->
        </ul>
      </div>
    </nav>
  </section>

</template>

<script>
export default {
  name: 'componentes-navbar',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
