<template>
  <div id="homepage">
    <Header/>

    <div id="home-container">
      <div id="div-SideBar">
        <SideBar/>
      </div>
      <div id="div-Home">
        <HomeComp/>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SideBar from "@/components/SideBar";
import HomeComp from "@/components/Home";


export default {
  name: "HomeView",
  components: {
    HomeComp,
    SideBar,
    Header,
    Footer,
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
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
}
#div-SideBar {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}


</style>