<template>
  <v-card
    class="card my-3"
    draggable="true"
    @drop="onDrop"
    @dragstart="onDragStart"
    @dragover.prevent
    flat
  >
  <v-row class="pt-1 px-3">
  <v-spacer></v-spacer>
    <v-btn class="close-icon" icon @click="removeCardFromList">
         <v-icon>mdi-close-circle-outline</v-icon>
    </v-btn>
  </v-row>
    <v-card-text class="pt-0 pb-3">
      {{ body }}
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import * as types from '../store/mutation-types.js'
export default {
  data: () => ({
    dialog: false,
    descCopy: ''
  }),
  props: ['body', 'desc', 'index'],
  computed: {
    ...mapGetters(['listsCount'])
  },
  watch: {
    desc (newVal) {
      this.descCopy = newVal
      console.log(newVal)
    }
  },
  methods: {
    onInput (newInputValue) {
      this.$emit('msgChange', newInputValue)
    },
    removeCardFromList () {
      this.$store.commit(types.REMOVE_CARD_FROM_LIST, {
        from: this.$parent.index,
        cardIndex: this.index
      })
    },
    onDragStart ({ dataTransfer }) {
      dataTransfer.effectAllowed = 'move'
      dataTransfer.setData(
        'application/json',
        JSON.stringify({
          from: {
            listIndex: this.$parent.index,
            cardIndex: this.index
          }
        })
      )
    },
    onDrop ({ dataTransfer }) {
      const { from } = JSON.parse(dataTransfer.getData('application/json'))
      const to = {
        listIndex: this.$parent.index,
        cardIndex: this.index
      }
      this.moveCardToList({ from, to })
    },
    ...mapMutations({
      moveCardToList: types.MOVE_CARD_TO_LIST
    })
  }
}
</script>

<style lang="scss" scoped>
.card{
    width:100%;
}
</style>
