<template>
  <v-col cols="12" md="3" class="list" @dragover.prevent>
    <div class="w-100">
              <v-btn icon absolute right @click="removeList">
              <v-icon >mdi-delete-sweep-outline</v-icon>
              </v-btn>
    </div>

    <div class="title">
      {{ title }}
    </div>
    <div class="cards" v-if="cardCount > 0">
      <card :key="index" v-for="(content, index) in cards" :body="content.body" :index="index"></card>
    </div>
    <create-card></create-card>
  </v-col>
</template>

<script>
import Card from './Card'
import CreateCard from './CreateCard'
import * as types from '../store/mutation-types.js'
export default {
  props: ['title', 'cards', 'index'],
  components: {
    Card,
    CreateCard
  },
  computed: {
    cardCount () {
      return this.cards.length
    }
  },
  methods: {
    removeList () {
      this.$store.commit(types.REMOVE_LIST, {
        listIndex: this.index
      })
    }
  }
}

</script>
<style lang="scss" scoped>
.list {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #333333;
    border-radius: 8px;
    padding: 15px;
    margin-right:1%;
    .cards{
        width:100%;
    }
}
</style>
