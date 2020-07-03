<template>
  <v-container>
    <h1>Votre espace personnel</h1>
    <h2>Ajouter un relevé journalier</h2>
    <v-form ref="form" v-model="valid" lazy-validation  class="mb-10">
      <v-row>
        <v-menu
          v-model="showDatePicker"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field v-model="date" label="Date" readonly v-bind="attrs" v-on="on"></v-text-field>
          </template>
          <v-date-picker locale="FR" v-model="date" @input="showDatePicker = false"></v-date-picker>
        </v-menu>
      </v-row>
      <v-text-field
        v-model="sport"
        :counter="30"
        label="Sport"
        :rules="[v => !!v || 'Champ requis']"
        required
      ></v-text-field>

      <v-text-field
        v-model="duration"
        label="Durée en minutes"
        :rules="[v => !!v || 'Champ requis']"
        type="number"
        required
      ></v-text-field>
      <v-select
        v-model="intensity"
        :items="intensityTab"
        :rules="[v => !!v || 'Champ requis']"
        label="Intensité"
        required
      ></v-select>
      <v-select
        v-model="breakfast"
        :items="lunchWeight"
        :rules="[v => !!v || 'Champ requis']"
        label="Petit déjeuner"
        required
      ></v-select>
      <v-select
        v-model="lunch"
        :items="lunchWeight"
        :rules="[v => !!v || 'Champ requis']"
        label="Déjeuner"
        required
      ></v-select>
      <v-select
        v-model="dinner"
        :items="lunchWeight"
        :rules="[v => !!v || 'Champ requis']"
        label="Diner"
        required
      ></v-select>

      <v-checkbox v-model="snack" label="Collation" required></v-checkbox>
      <v-text-field v-model="weight" label="Poid" type="number" required></v-text-field>
      <v-select
        v-model="mood"
        :items="moodList"
        :rules="[v => !!v || 'Champ requis']"
        label="Humeur"
        required
      ></v-select>

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Valider</v-btn>

      <v-btn color="error" class="mr-4" @click="reset">Annuler</v-btn>
    </v-form>
    <h2>Message du coach</h2>

    <v-row>
      <ul>
        <li v-for="(message,index) in $store.state.users.user.message" :key="index">
          Date:{{ message.date }} - Message:{{ message.text }} 
        </li> 
      </ul>     
    </v-row>



    <v-dialog
      v-model="dialog"
      scrollable
      persistent
      :overlay="false"
      max-width="500px"
      transition="dialog-transition"
    >
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Courrage</v-card-title>
        <v-card-text>{{textDialog}}</v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">Ok coatch</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>

import dao from "@/mixins/dao";

export default {
  mixins: [dao],
  data() {
    return {
      valid: false,
      dialog: false,
      date: new Date().toISOString().substr(0, 10),
      showDatePicker: false,
      sport: "",
      duration: "",
      intensity: "",
      intensityTab: ["faible", "normal", "forte"],
      lunchWeight: ["léger", "normalement", "beaucoup"],
      breakfast: "",
      lunch: "",
      dinner: "",
      weight: "",
      snack: false,
      mood: "",
      moodList: ["maussade", "normal", "bien", "très bien"],
      textDialog: ""
    };
  },
  methods: {
    validate() {
      this.dialog = true;
      
      let statement = {
        date: this.date,
        sport: this.sport,
        duration: this.duration,
        intensity: this.intensityTab.indexOf(this.intensity),
        breakfast: this.lunchWeight.indexOf(this.breakfast),
        lunch: this.lunchWeight.indexOf(this.lunch),
        diner: this.lunchWeight.indexOf(this.dinner),
        weight: parseInt(this.weight,10),
        snack: this.snack,
        mood: this.moodList.indexOf(this.mood)
      }

      this.addStatement(this.$store.state.users.user.id, statement);
      
      this.reset();

    },
    reset() {
      this.sport = "";
      this.duration = "";
      this.intensity = "";
      this.breakfast = "";
      this.lunch = "";
      this.dinner = "";
      this.weight = "";
      this.snack = false;
      this.mood = "";
    }
  },
  watch: {
    mood: function(newValue) {
      switch (newValue) {
        case "maussade":
          this.textDialog =
            "Même si les exercices sont compliqués, il ne faut pas perdre espoir et garder votre objectif en tête.";
          break;
        case "normal":
          this.textDialog = "C'est bien, il faut continuer comme ça !";
          break;
        case "bien":
          this.textDialog =
            "Le moral ce ressent sur votre corps bien dans la tête et bien dans son corp";
          break;
        case "très bien":
          this.textDialog =
            "Parfait vous êtes dans un très bon mood garder le cap";
          break;
        default:
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>