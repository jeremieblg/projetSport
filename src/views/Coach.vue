<template>
  <div>
    <v-container>
      <h1>Espace coach</h1>
      <h2>liste des membres</h2>
      <div v-for="user in users" :key="user.id">
        <v-simple-table mb-5>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left" width="200">
                  {{user.firstName}}
                  <v-icon @click="openDialogMessage(user)">mdi-message</v-icon>
                </th>
                <th class="text-left" width="150">Activité</th>
                <th class="text-left" width="150">Temps</th>
                <th class="text-left" width="150">Intensité</th>
                <th class="text-left" width="150">Petit déjeuner</th>
                <th class="text-left" width="150">Déjeuner</th>
                <th class="text-left" width="150">Diner</th>
                <th class="text-left" width="150">Poid</th>
                <th class="text-left" width="150">Collation</th>
                <th class="text-left" width="150">Humeur</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="statement in user.statement" :key="statement.id">
                <td>{{statement.date}}</td>
                <td>{{statement.sport}}</td>
                <td>{{statement.duration}}min</td>
                <td>{{intensity(statement.intensity)}}</td>
                <td>{{lunchWeight(statement.breakfast)}}</td>
                <td>{{lunchWeight(statement.lunch)}}</td>
                <td>{{lunchWeight(statement.diner)}}</td>
                <td>{{statement.weight}}kg</td>
                <td>{{collation(statement.snack)}}</td>
                <td>{{mood(statement.mood)}}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </div>
      <v-dialog
        v-model="dialog"
        scrollable
        persistent
        :overlay="false"
        max-width="500px"
        transition="dialog-transition"
      >
        <v-card>
          <v-card-title
            class="headline grey lighten-2"
            primary-title
          >Envoyer un message a {{userSelected.firstName}}</v-card-title>
          <v-card-text>
            <v-textarea
              v-model="text"
              :auto-grow="autoGrow"
              :clearable="clearable"
              :counter="counter ? counter : false"
              :filled="filled"
              :flat="flat"
              :hint="hint"
              :label="label"
              :loading="loading"
              :no-resize="noResize"
              :outlined="outlined"
              :persistent-hint="persistentHint"
              :placeholder="placeholder"
              :rounded="rounded"
              :row-height="rowHeight"
              :rows="rows"
              :shaped="shaped"
              :single-line="singleLine"
              :solo="solo"
            ></v-textarea>
          </v-card-text>
          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="sendMessage">Envoyer</v-btn>
            <v-btn color="primary" text @click="dialog =false">Annuler</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </div>
</template>



<script>
import dao from "@/mixins/dao";
export default {
  data() {
    return {
      users: "",
      text: "",
      userSelected: "",
      dialog: false,
      autoGrow: true,
      autofocus: true,
      clearable: true,
      counter: 0,
      filled: false,
      flat: false,
      hint: "",
      label: "",
      loading: false,
      model: "I'm a textarea.",
      noResize: false,
      outlined: false,
      persistentHint: false,
      placeholder: "",
      rounded: false,
      rowHeight: 24,
      rows: 1,
      shaped: false,
      singleLine: false,
      solo: false
    };
  },
  methods: {
    intensity(index) {
      const intensityTab = ["faible", "normal", "forte"];
      return intensityTab[index];
    },
    lunchWeight(index) {
      const lunchWeight = ["léger", "normalement", "beaucoup"];
      return lunchWeight[index];
    },
    collation(bool) {
      return bool ? "Oui" : "Non";
    },
    mood(index) {
      const moodList = ["maussade", "normal", "bien", "très bien"];
      return moodList[index];
    },
    openDialogMessage(user) {
      this.dialog = true;
      this.userSelected = user;
    },
    async sendMessage() {
      this.dialog = false;
      const date = new Date().toISOString().substr(0, 10);
      const messageObj = {
        date,
        text: this.text
      };
      console.log(messageObj);
      await this.addMessage(this.userSelected, messageObj);
      this.dialog = false;
    }
  },
  mixins: [dao],
  async created() {
    this.users = await this.getUsers();
  }
};
</script>

<style lang="scss" scoped>
</style>