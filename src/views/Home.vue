<template>
  <v-container class="fill-height justify-center">
    <v-row
      :dense="$vuetify.breakpoint.mdAndDown"
    >
      <v-col cols="12">
        <Intro
          class="card-translate-up"
        />
      </v-col>
      <v-col
        cols="12"
      >
        <Bulletin
          class="card-translate-up"
        />
      </v-col>
      <!--      <v-flex-->
      <!--        xs12-->
      <!--        sm6-->
      <!--      >-->
      <!--        <Contact-->
      <!--          -->
      <!--        />-->
      <!--      </v-flex>-->
      <v-col
        cols="12"
        md="6"
        class="align-self-stretch"
      >
        <Contribute
          class="card-translate-up align-self-stretch"
        />
      </v-col>
      <v-col
        cols="12"
        md="6"
        class="align-self-stretch"
      >
        <Donate
          class="card-translate-up"
        />
      </v-col>
      <v-col cols="12">
        <Contact class="card-translate-up" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Contribute from "@/views/About/Contribute";
import Donate from "@/views/About/Donate";
import Intro from "@/views/About/Intro";
import Bulletin from "@/views/About/Bulletin";
import Contact from "@/views/About/Contact";
import anime from 'animejs/lib/anime.es.js';

export default {
  name: "Home",
  components: { Contribute, Donate, Intro, Bulletin, Contact },
  data: () => ({}),
  mounted () {
    setTimeout(() => {
      anime({
        targets: '.card-translate-up',
        translateY: [48, 0],
        opacity: [0, 1],
        duration: 775,
        delay: (el, i) => i * 175,
        easing: "easeOutQuint"
      });
      anime({
        targets: ['.card-translate-up h1', '.card-translate-up h2', '.card-translate-up p', '.card-translate-up span'],
        translateY: [48, 0],
        opacity: [0, 1],
        duration: 775,
        delay: (el, i) => i * 75,
        easing: "easeOutQuint"
      })
    }, 0)
  },
};
</script>
