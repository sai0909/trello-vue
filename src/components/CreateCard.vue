<template>
  <form :class="classList" @submit.prevent="addCardToList" @drop="onDrop" @dragover.prevent>
    <input type="text" class="text-input" contenteditable="true" v-model="body" ref="textInput" placeholder="Add new card" @focusin="startEditing" @focusout="finishEditing">
    <button type="submit" class="add-button" v-if="isEditing || isAddable">
      Add
    </button>
  </form>
</template>

<script>
import { mapMutations } from 'vuex'
import * as types from '../store/mutation-types.js'
export default {
  data () {
    return {
      isEditing: false,
      body: ''
    }
  },
  computed: {
    classList () {
      const classList = ['create-card']

      if (this.isEditing) {
        classList.push('active')
      }

      if (this.bodyExists) {
        classList.push('addable')
      }

      return classList
    },
    bodyExists () {
      return this.body.length > 0
    },
    isAddable () {
      return this.bodyExists
    }
  },
  methods: {
    startEditing () {
      this.isEditing = true
    },
    finishEditing () {
      this.isEditing = false
    },
    addCardToList () {
      this.$store.commit(types.ADD_CARD_TO_LIST, {
        to: this.$parent.index,
        body: this.body
      })
      this.body = ''
    },
    onDrop ({ dataTransfer }) {
      const { from } = JSON.parse(dataTransfer.getData('application/json'))
      const to = {
        listIndex: this.$parent.index,
        cardIndex: null
      }
      this.moveCardToList({ from, to })
    },
    ...mapMutations({
      moveCardToList: types.MOVE_CARD_TO_LIST
    })
  }
}

</script>
