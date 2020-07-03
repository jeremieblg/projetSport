<template>
  <v-container>
    <h1>member</h1>
    <v-form ref="form" v-model="valid" lazy-validation>
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

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Valider</v-btn>

      <v-btn color="error" class="mr-4" @click="reset">Annuler</v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
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
      snack: false
    };
  },
  methods: {
    validate() {},
    reset() {
      this.sport = "";
      this.duration = "";
      this.intensity = "";
      this.breakfast = "";
      this.lunch = "";
      this.dinner = "";
      this.weight = "";
      this.snack = false;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>