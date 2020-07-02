<template>
  <v-container class="pt-4">
    <v-row grid-list-md class="act-flex">
      <list v-for="({ title, cards }, index) in lists" :key="index" :title="title" :cards="cards" :index="index"></list>
      <create-list></create-list>
    </v-row>
  </v-container>
</template>

<script>
import List from '../components/List'
import { mapState } from 'vuex'
import CreateList from '../components/CreateList'
export default {
  name: 'MainContent',
  components: {
    List,
    CreateList
  },
  data: () => ({
  }),
  computed: {
    ...mapState([
      'lists'
    ])
  }
}
</script>
<style lang="scss">
@media(min-width:960px){
  .act-flex{
    flex-direction: row;
    flex-wrap: nowrap;
  }
}

@media(max-width:960px){
  .act-flex{
    padding:0px 20px;
  }
}
</style>
