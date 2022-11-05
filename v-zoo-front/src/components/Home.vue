<template>
  <div id="main-home">
    <div id="selva">
      <h2>Selva</h2>
      <img src="../assets/img/selva.jpg" class="selvapic">
    </div>
    <div id="Tundra">
      <h2>Tundra</h2>
      <img src="../assets/img/tundra.jpg" class="tundrapic">
    </div>
    <div id="Desierto">
      <h2>Desierto</h2>
      <img src="../assets/img/desierto.jpg" class="desiertopic">
    </div>
    <div id="Agua">
      <h2>Oceano</h2>
      <img src="../assets/img/agua.jpg" class="aguapic">
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeComp"
}
</script>

<style scoped>
#main-home {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin-top: 30px;
}


.selvapic{
  width: 300px;
  height: 300px;
  margin-left: 40px;
  margin-right: 40px;

}
.aguapic{
  width: 300px;
  height: 300px;
  margin-left: 40px;
  margin-right: 40px;
}
.desiertopic{
  width: 300px;
  height: 300px;
  margin-left: 40px;
  margin-right: 40px;
}
.tundrapic{
  width: 300px;
  height: 300px;
  margin-left: 40px;
  margin-right: 40px;
}

.main-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.home-img {
  max-width: 350px;
  margin: 0 30px 0 30px;
}
.phrases {
  margin-top: 30px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 20px;
}
.button-box {
  text-align: center;
  color: white;
  background-color: #00bab3;
  width: 350px;
  padding: 20px 0 20px 0;
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 40px;
  cursor: pointer;
}
.home-img:hover {
  opacity: 0.7;
}
.button-box:hover {
  background-color: #3e1c08;
}

</style>