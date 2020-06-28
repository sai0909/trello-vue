<template>
  <v-container class="pt-4">
    <v-row grid-list-md>
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
