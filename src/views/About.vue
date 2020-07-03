<template>
  <div class="about">
    <v-container>
      <h1>Nous contacter</h1>
      <v-form class="mb-10">
        <v-row>
          <v-col>
            <v-text-field v-model="firstName" label="Prénom" required clearable></v-text-field>
          </v-col>
          <v-col>
            <v-text-field v-model="lastName" label="Nom" required clearable></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-text-field v-model="email" type="email" label="E-mail" required clearable></v-text-field>
        </v-row>
        <v-row>
          <v-textarea v-model="emailContent" outlined label="Contenu de la demande"></v-textarea>
        </v-row>
        <v-row>
          <v-btn dark class="mr-4" @click="send">Envoyer</v-btn>
        </v-row>
      </v-form>
      <h1>Mention légales</h1>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In venenatis neque vitae accumsan mollis. In consectetur felis et porta porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse potenti. In sodales sollicitudin erat, in convallis sapien tincidunt et. Integer sit amet luctus velit, sed volutpat erat. Etiam eu accumsan nunc. In hac habitasse platea dictumst.</p>
      <p>Curabitur blandit nulla lacus, sit amet consequat est vulputate sit amet. Aenean odio velit, tristique sit amet urna id, auctor malesuada erat. Mauris ut lorem magna. Mauris semper congue leo, et dictum mauris condimentum eget. Quisque et porta massa, non fermentum dui. Praesent a urna diam. Etiam faucibus dui ut hendrerit dapibus. Pellentesque quis libero egestas, tincidunt tortor vitae, tristique purus. Etiam condimentum, nisl sit amet rutrum aliquam, nibh lectus pellentesque nibh, quis congue mauris ipsum a ipsum. Donec eget eros quam. Aenean sit amet placerat felis. Quisque aliquet sodales porttitor. Vivamus aliquet ligula semper nulla congue mattis. Donec urna quam, tempor ac molestie sed, faucibus id ex. Praesent vel lectus at dolor facilisis dignissim vitae eu leo. In ligula lectus, blandit dignissim dapibus sit amet, dictum sit amet eros.</p>
      <p>Aliquam rhoncus lobortis diam eget laoreet. Quisque mauris leo, scelerisque sed tortor eget, convallis malesuada nulla. Aenean at lorem ipsum. Fusce at tincidunt tellus, ut consequat nisl. Curabitur malesuada sapien in suscipit auctor. Quisque faucibus nec ligula sit amet molestie. Nullam mattis accumsan eros ac sollicitudin. Quisque nisl nibh, scelerisque et tincidunt aliquam, fermentum vitae nulla. Aenean posuere tellus vel odio hendrerit mattis. Ut molestie eu eros laoreet egestas. In eget enim et lectus suscipit malesuada. Donec velit nulla, mollis id sollicitudin ac, gravida quis ex. Maecenas eleifend nec risus in consectetur. Pellentesque id urna nec nisl maximus tincidunt ac eu metus. Pellentesque tincidunt elementum pellentesque. Nulla facilisis augue magna, eu facilisis lorem consequat non.</p>
      <p>Vivamus at commodo dui, et iaculis sem. Cras in est ultricies, ultricies leo faucibus, sodales neque. Curabitur tempus pretium eros, vel mattis mauris sodales nec. Nulla facilisi. Maecenas sit amet leo tortor. Maecenas porttitor justo eget nibh vehicula eleifend. Mauris venenatis condimentum vehicula. Etiam viverra fringilla laoreet. Mauris maximus ante vitae iaculis varius. Quisque in augue et mi cursus luctus.</p>
      <p>Suspendisse nec elit porttitor, luctus eros quis, iaculis urna. Proin nec porta tellus, sit amet finibus eros. Integer bibendum vitae justo vitae elementum. Nunc in arcu mi. Morbi id interdum elit. Curabitur porttitor, sem a venenatis ultrices, ante orci convallis lectus, non tempor quam diam quis sem. Proin ut mauris at augue sollicitudin gravida. Sed quam dolor, commodo vitae lacus ut, placerat convallis ipsum. In malesuada ex non ipsum porttitor, eu vulputate turpis semper. Cras tincidunt, libero eget gravida faucibus, arcu tellus tincidunt nulla, vitae hendrerit odio neque vitae arcu. Mauris varius finibus consequat.</p>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      emailContent: ""
    };
  },
  methods: {
    send() {}
  }
};
</script>