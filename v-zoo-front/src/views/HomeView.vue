<template>
  <div id="homepage">
    <Header/>
  </div>
  <div id="div-SideBar">
    <SideBar/>
  </div>

  <div id="home-container">
    <home/>
  </div>

  <div>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SideBar from "@/components/SideBar";
import Home from "@/components/Home";

export default {
  name: "HomeView",
  components: {
    SideBar,
    Header,
    Footer,
    Home,
  },

  methods: {


  },
}
</script>

<style scoped>
#homepage {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 98vh;
}
#home-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
#div-SideBar {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
</style>