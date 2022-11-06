<template>
  <div id="Contenido_Total">
    <div>
      <img src="@/assets/img/Logofinal.png" alt="logo_pagina">
    </div>

    <div id="Medio_Del_Header">
    <h1 id="NombrePagina">{{ Nombre }}</h1>
    <h4 id="Eslogan">{{ Eslogan }}</h4>
    </div>

    <div class="Derecha_del_Header">
        <div style="width: 145px">
          <div id="menu-container" v-if="showButton">
            {{ Boton }}
          </div>
        </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComp",
  props: {
    showButton: {
      type: Boolean,
      default: true
    }
  },



  data() {
    return {
      Nombre:"V-Zoo",
      Eslogan:"Un zoologico sin rejas",
      Boton: "Registrarme",
    }
  }
}
</script>

<style scoped>

#Contenido_Total {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background: #f6f4ef;
  border-bottom: 2px solid gray;
  padding: 10px;
  box-shadow: 0 4px darkgrey;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
}

img {
  max-width: 420px;
  border-radius: 50%;
}

#Medio_Del_Header {
  text-align: center;
}

#NombrePagina {
  font-family: "Freestyle Script";
  font-style: italic;
  font-size: 500%;
}

#Eslogan {
  font-style: italic;
  font-size: 12px;
}

#menu-container {
  align-self: center;
  padding: 15px 25px;
  border-radius: 5px;
  background: #c7a17a;
  border: 2px solid #493a2b;
}

#menu-container:hover{
  background-color: #DBB186;
}

.Derecha_del_Header {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
}

</style>