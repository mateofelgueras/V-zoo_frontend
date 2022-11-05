<template>
  <div id="Contenido_footer">

    <div id="footer-text">
      <p id="brand">{{ nombre }}</p>
      <p>{{ ubicacion }}</p>
      <p>{{ copyRight }}</p>
    </div>

  </div>
</template>

<script>
export default {
  name: "FooterComp",
  data () {
    return {
      nombre: "V-Zoo",
      ubicacion: "En la nube!",
      copyRight: "© Copyright 2022 V-Zoo. Todos los derechos reservados",
    }
  }
}
</script>

<style scoped>
#Contenido_footer {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin-top: auto;
  display: inline;
  background-color: black;
  box-shadow: 0 0 15px darkgrey;
}
#footer-text {
  font-style: italic;
  font-size: 14px;
  padding-top: 10px;
  color: white;
  text-align: center;
}
#brand {
  font-size: 120%;
  font-weight: bold;
  font-family: serif;
  font-style: italic;
}
</style>