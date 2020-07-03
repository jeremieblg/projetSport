<template>
  <div class="home">
    <v-container>
      <h1>Présentation</h1>
      <v-row cols="12">
        <v-col sm="4">
          <v-img src="https://ad962edbae8ba7b03b7f-d10007df79b5b7a4e475a291e50a08cf.ssl.cf3.rackcdn.com/bp-coach-sportif/business-plan-coach-sportif.jpg"></v-img>
        </v-col>
        <v-col sm="8">
          <p>Mon coach sportif, vous propose un suivi à distance par de vrai coach.</p> 
          <p>Pour s'inscrire, veuillez nous joindre via notre formulaire de contact dans la page À propos</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec tempor lectus. Curabitur sed fermentum leo. Maecenas nec orci vulputate, gravida nibh in, auctor ante. Phasellus venenatis massa sit amet consectetur lacinia. Donec ut ullamcorper felis, dictum pretium orci. Donec dignissim maximus nisl ac elementum. Duis dapibus dictum gravida. Suspendisse luctus turpis a nisl mattis faucibus. Pellentesque hendrerit tortor sit amet justo consequat fermentum. Ut ultrices dignissim metus sit amet efficitur. Vestibulum sit amet tincidunt dolor.</p>
          <p>Vestibulum tempus arcu rutrum ante elementum dapibus. Vestibulum ex arcu, scelerisque nec nunc ac, vehicula laoreet risus. Donec eros lorem, congue sed mi ac, commodo placerat felis. In ultrices lacus quis sodales mollis. Nulla ultrices ultrices diam, et pellentesque ex pellentesque sed. Mauris ac tellus quis nibh tincidunt gravida. Nulla at est ac neque mollis commodo. Aenean interdum, nisi sit amet eleifend gravida, nunc leo finibus lorem, vitae cursus tellus nisi vel purus. Nullam tempus velit sit amet sem mollis, feugiat tincidunt turpis laoreet. Suspendisse turpis odio, elementum nec fringilla id, efficitur nec enim. Ut pulvinar efficitur vestibulum. Integer et volutpat eros. Cras rutrum tincidunt leo nec hendrerit.</p>
          <p>In scelerisque risus vel eros faucibus, nec maximus nunc tristique. Sed nec risus magna. Integer elementum ex nec molestie interdum. Morbi feugiat imperdiet purus pretium venenatis. Donec vestibulum fringilla neque in tempor. Nam viverra leo ipsum, eu elementum mi faucibus ac. Fusce sagittis a quam nec rhoncus. Phasellus quis dui vulputate, egestas nisl at, cursus velit. Mauris sodales magna mattis, blandit nibh eu, vulputate sem. Fusce tincidunt ipsum a ligula tempus, nec laoreet dolor laoreet. Maecenas euismod nulla pellentesque, rutrum enim id, sodales purus. Donec eget egestas lectus.</p>
        </v-col>
        
      </v-row>  
    </v-container>
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import dao from "@/mixins/dao";

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  mixins: [dao],
  methods: {
    // async daoTest() {
      // console.log(await this.userExist("user1@user.fr","user1"));
      // console.log(await this.getUsers());
      // console.log(await this.getUser(0));
      // console.log(await this.deleteUser(2));
      // console.log(await this.addUser({
      //   email: "user3@user.fr",
      //   password: "user3",
      //   firstName: "User3Prenom",
      //   lastName: "User3Nom"
      // }));
      // console.log(await this.addStatement(2,{
      //     date: "2020-01-02",
      //     sport: "ping pong",
      //     duration: "90",
      //     intensity: 2,
      //     breakfast: 2,
      //     lunch: 1,
      //     diner: 1,
      //     weight: 83,
      //     snack: true,
      //     mood: 4
      // }));
      // console.log(await this.addMessage(2,{
      //   date:"2020-01-01",
      //   message:"coucou"
      // }));

      // console.log(await this.deleteStatement(2,0));
      // console.log(await this.deleteMessage(2,0));
    // }
  },
}
</script>
