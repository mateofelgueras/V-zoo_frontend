<template>
  <div id="subscription-main">
    <Header v-bind:show-button="false"/>
  </div>
  <div class="boxes">
    <div class="firstbox">
      <img src="../assets/img/coyote.jpg" class="animal1">
      <h2>{{title1}}</h2>
      <h4>Habitat:{{Habitat1}}</h4>
      <h4>Nombre cientifico:{{nombrecientifico1}}</h4>
      <h4>Dieta:{{dieta1}}</h4>
      <h4>Esperanza de vida:{{esperanzadevida1}}</h4>
      <audio controls>
        <source src="" type="audio/mp3">
      </audio>

    </div>
    <div class="secondbox">
      <img src="../assets/img/camello.jpg" class="animal2">
      <h2>{{title2}}</h2>
      <h4>Habitat:{{Habitat2}}</h4>
      <h4>Nombre cientifico:{{nombrecientifico2}}</h4>
      <h4>Dieta:{{dieta2}}</h4>
      <h4>Esperanza de vida:{{esperanzadevida2}}</h4>
      <audio controls>
        <source src="" type="audio/mp3">
      </audio>

    </div>
  </div>
  <Footer/>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "DesiertoComp",
  components: {
    Header,
    Footer
  },
  data(){
    return{
      title1:"COYOTE",
      habitat1:"",
      vidapromedio1: "",
      nombrecientifico1:"",
      dieta1:"",
      esperanzadevida1:"",
      title2:"CAMELLO",
      habitat2:"",
      vidapromedio2: "",
      nombrecientifico2:"",
      dieta2:"",
      esperanzadevida2:"",



    }

  }
}
</script>

<style scoped>
.boxes{
  display: flex;
  flex-direction: column;
}
.firstbox{
  display: inline;

}
.secondbox{
  display: inline;
}
</style>