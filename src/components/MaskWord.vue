<template>
  <div>
    <b-button variant="primary" size="md" class="letters" v-for="item in guessedWord" v-bind:key="item.index">{{item}}</b-button>
  </div> 

</template>

<script>
export default {
  name: 'MaskWord',
  props: {
    letters: String 
  },
  data() { 
    return {
      fails: 0,
      guessedWord: "al__r_",
      secretWord: "",
      foundLetters: "",
      usedLetters: "", 
    } 
  }
}
</script>

<style scoped>
button {
  font-family: Consolas, 'Courier New', Courier, monospace;
  margin-left: 4px; 
  pointer-events: none;
}
</style>