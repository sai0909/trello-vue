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
/* Scrollbar Styling */
::-webkit-scrollbar {
    width: 4px;
}
::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.26);
    -webkit-border-radius: 10px;
    border-radius: 10px
}
::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.87);
}
@media(min-width:960px){
  .col-md-3 {
      flex: 0 0 23%;
      max-width: 23%;
  }
  .v-main__wrap {
    flex: 1 1 auto;
    max-width: 100%;
    position: relative;
    padding: 0 20px;
    display: flex;
    overflow-x: scroll;
    width: calc(100% - 40px);
}
}
</style>
