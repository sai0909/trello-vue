import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'
Vue.use(Vuex)
const savedLists = localStorage.getItem('trollo-lists')
export default new Vuex.Store({
  state: {
    lists: savedLists ? JSON.parse(savedLists) : [
      {
        title: 'Things to do',
        cards: [
          { body: 'Work on Layout template' },
          { body: 'Fix the buggy things' }
        ]
      },
      {
        title: 'Level Up',
        cards: [
          { body: 'Work on Responsive Web design' }
        ]
      },
      {
        title: 'Progress',
        cards: []
      }
    ]
  },
  mutations: {
    [types.ADD_LIST] (state, { title }) {
      state.lists.push({ title, cards: [] })
    },
    [types.REMOVE_LIST] (state, { listIndex }) {
      state.lists.splice(listIndex, listIndex)
    },
    [types.ADD_CARD_TO_LIST] (state, { to, body }) {
      state.lists[to].cards.push({ body })
    },
    [types.REMOVE_CARD_FROM_LIST] (state, { from, cardIndex }) {
      state.lists[from].cards.splice(cardIndex, 1)
    },
    [types.MOVE_CARD_TO_LIST] (state, { from, to }) {
      const targetCard = state.lists[from.listIndex].cards[from.cardIndex]
      state.lists[from.listIndex].cards.splice(from.cardIndex, 1)
      if (to.cardIndex !== null) {
        state.lists[to.listIndex].cards.splice(to.cardIndex, 0, targetCard)
      } else {
        state.lists[to.listIndex].cards.push(targetCard)
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
