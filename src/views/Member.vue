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
            <v-text-field
              v-model="date"
              label="Picker without buttons"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" @input="showDatePicker = false"></v-date-picker>
        </v-menu>
      </v-row>
      <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Sport" required></v-text-field>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="Durée en minutes"
        type="number"
        required
      ></v-text-field>
      <v-select
        v-model="select"
        :items="items"
        :rules="[v => !!v || 'Item is required']"
        label="Intensité"
        required
      ></v-select>
      <v-select
        v-model="select"
        :items="items"
        :rules="[v => !!v || 'Item is required']"
        label="Petit déjeuner"
        required
      ></v-select>
      <v-select
        v-model="select"
        :items="items"
        :rules="[v => !!v || 'Item is required']"
        label="Déjeuner"
        required
      ></v-select>
      <v-select
        v-model="select"
        :items="items"
        :rules="[v => !!v || 'Item is required']"
        label="Diner"
        required
      ></v-select>

      <v-checkbox
        v-model="checkbox"
        :rules="[v => !!v || 'You must agree to continue!']"
        label="Collation"
        required
      ></v-checkbox>
      <v-text-field v-model="email" :rules="emailRules" label="Poid" type="number" required></v-text-field>

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Validate</v-btn>

      <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>

      <v-btn color="warning" @click="resetValidation">Reset Validation</v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      showDatePicker: false,
      picker: new Date().toISOString().substr(0, 10)
    };
  },
  methods: {
    openDatePicker() {}
  }
};
</script>

<style lang="scss" scoped>
</style>