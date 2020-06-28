<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
       Task Manager
      </div>

      <v-spacer></v-spacer>

    </v-app-bar>

    <v-main>
      <MainContent/>
    </v-main>
  </v-app>
</template>

<script>
import MainContent from './views/MainContent'

export default {
  name: 'App',

  components: {
    MainContent
  },

  data: () => ({
    //
  })
}
</script>
<style lang="scss">
@media(min-width:960px){
  .col-md-3 {
      flex: 0 0 23%;
      max-width: 23%;
  }
}
</style>
