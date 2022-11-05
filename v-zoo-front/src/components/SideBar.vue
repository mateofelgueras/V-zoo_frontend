<template>
  <div id="Contenido_SideBar">
  <div id="titulo">
    <h3>Ultimas Noticias!</h3>
    </div>
    <div class="contenedor_articulos">
      <MenuProduct v-for="(articulo, index) in articulos" v-bind:key="index"
                   v-bind:name="articulo.name"
                   v-bind:image="articulo.image"
                   v-bind:description="articulo.description"
      />
    </div>


  </div>
</template>

<script>
import MenuProduct from "@/components/MenuProduct";
import {beverageProducts} from "@/assets/js/fakeAPI";

export default {
  name: "SideBar",
  components: {MenuProduct},

  data() {
    return {
      articulos: beverageProducts
    }
  },
}
</script>

<style scoped>
#Contenido_SideBar {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: inline-block;
  margin-top: 0;
  margin-left: 10px;
  width: 300px;
  background-color: #eee;
  border: 5px double rgb(109, 55, 55);
  border-radius: 5px;
  text-align: center;
}


</style>