<template>
  <div id="hangman">
    <b-row>
      <b-col cols="4" class="container">
        <h2>Guesses left: :</h2>
        <h2>Wrong guesses</h2>
        <b-card>
          <div>
            <b-form>
              <b-row>
                <b-col>
                  <label
                    class="col-form-label visually-hidden"
                    for="inline-form-input-name"
                    >Name</label
                  >
                  <div class="cols-sm-3">
                    <b-form-input
                      id="inline-form-input-name"
                      class="mb-2 mr-sm-2 mb-sm-0"
                      placeholder="Wrong Guesses"
                    ></b-form-input>
                  </div>
                </b-col>
                >
              </b-row>
            </b-form>
          </div> </b-card
        ><br />
        <div class="col-lg-2">
          <b-button class="button-start" size="lg" variant="outline-primary"
            >New Game</b-button
          >
        </div>
      </b-col>
      <b-col>
        <div id="maskword">
          <MaskWord />
          <b-card class="mt-3">
            <div>
              <b-form>
                <b-row>
                  <b-col>
                    <label
                      class="col-form-label visually-hidden"
                      for="inline-form-input-name"
                      >Enter Guess</label
                    >
                    <div class="cols-sm-3">
                      <b-form-input
                        id="inline-form-input-name"
                        class="mb-2 mr-sm-2 mb-sm-3"
                        placeholder="Enter Guess"
                      ></b-form-input>
                    </div>
                    <b-button size="lg" variant="outline-primary"
                      >Guess!</b-button
                    >
                  </b-col>
                  >
                </b-row>
              </b-form>
            </div>
          </b-card>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import MaskWord from "@/components/MaskWord.vue";
export default {
  name: "HangmanGame",
  components: {
    MaskWord,
  },
};
</script>

<style scoped>
#hangman {
  text-align: center;
  border: 20px solid black;
  background: #273746;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  display: block;
  color: white;
  padding-top: 200px;
}
#maskword {
  margin: 20px;
}
.container {
  margin: 20px;
}
.button-start {
  width: 200px;
  height: 80px;
  margin: 10 auto;
}
</style>
