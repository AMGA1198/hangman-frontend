<template>
  <div id="home">
    <b-container fluid>
      <b-button class="button-start" size="lg" variant="outline-primary">Start Game</b-button>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
#home {
  text-align: center;
  border: 20px solid black;
  background:#273746;
  position:absolute;
  top:0px;
  right:0px;
  bottom:0px;
  left:0px;
  padding-top: 400px;
}

.button-start {
  width: 200px;
  height: 80px;
  margin: 10 auto;
}
</style>
