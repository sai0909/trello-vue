<template>
<v-col col="12" md="3" class="pl-0 pt-0">
  <form :class="classList"  @submit.prevent="addList">
    <input type="text" class="text-input" contenteditable="true" v-model="title" ref="textInput" placeholder="Add new list" @focusin="startEditing" @focusout="finishEditing">
    <button type="submit" class="add-button" v-if="isEditing || isAddable">
      Add
    </button>
  </form>
</v-col>
</template>

<script>
import * as types from '../store/mutation-types'

export default {
  data () {
    return {
      isEditing: false,
      title: ''
    }
  },
  computed: {
    classList () {
      const classList = ['create-list']

      if (this.isEditing) {
        classList.push('active')
      }

      if (this.titleExists) {
        classList.push('addable')
      }

      return classList
    },
    titleExists () {
      return this.title.length > 0
    },
    isAddable () {
      return this.titleExists
    }
  },
  methods: {
    startEditing () {
      this.isEditing = true
    },
    finishEditing () {
      this.isEditing = false
    },
    addList () {
      this.$store.commit(types.ADD_LIST, {
        to: this.$parent.index,
        title: this.title
      })
      this.title = ''
    }
  }
}

</script>
<style lang="scss" scoped>
.create-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .text-input {
    padding: 10px 15px;
    background-color: #ccc;
    border-radius: 8px;
    cursor: pointer;
    border: none;
    font-family: "Noto Sans Japanese", "Noto Sans", sans-serif;
    font-weight: 700;
    font-size: 16px;
    color: #242424;
    cursor: pointer;
    width:100%;
    overflow: overlay;
  }

  .text-input:focus {
    outline: 0;
    cursor: initial;
  }

  .add-button {
    margin-top: 15px;
    padding: 15px 10px;
    background-color: #999;
    border: none;
    border-radius: 8px;
    font-family: "Noto Sans Japanese", "Noto Sans", sans-serif;
    font-weight: 700;
    font-size: 14x;
    color: #fff;
  }

  .add-button:hover {
    opacity: 0.8;
  }
}

.create-list.active, .card-draft.addable {
  .text-input {
    background-color: #fff;
  }
}

.create-list.active {
  .add-button {
    pointer-events: none;
  }
}

.create-list.addable {
  .add-button {
    background-color: #ffa955;
    pointer-events: auto;
    cursor: pointer;
  }

  .add-button:active {
    background-color: #d76a00;
  }
}
</style>
