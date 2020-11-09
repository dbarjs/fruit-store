import { GetterTree, ActionTree, MutationTree } from 'vuex'

import localStorage from 'store2'

// DATABASE
export const state = () => ({
  fruits: [] as string[],
})

export type FruitState = ReturnType<typeof state>

// GET === GETTERS
export const getters: GetterTree<FruitState, FruitState> = {
  list: (state) => state.fruits || [],
}

// (POST ou PUT ou PATCH) === MUTATIONS
export const mutations: MutationTree<FruitState> = {
  ADD_FRUIT: (state, fruitName: string) => {
    if (!state.fruits.includes(fruitName)) {
      state.fruits.push(fruitName)
      localStorage('fruitList', state.fruits)
    }
  },
  REMOVE_FRUIT: (state, fruitName: string) => {
    const fruitIndex = state.fruits.findIndex((name) => name === fruitName)

    if (fruitIndex > -1) {
      state.fruits.splice(fruitIndex, 1)
      localStorage('fruitList', state.fruits)
    }
  },
}

export const actions: ActionTree<FruitState, FruitState> = {
  fetchFromLocalStorage({ dispatch }) {
    const fruitList = localStorage('fruitList')

    dispatch('update', fruitList)
  },

  async fetchFromAPI({ dispatch }) {
    const { data } = await this.$axios.get(
      'https://fruit-store.free.beeceptor.com/list'
    )
    const fruitList = data ? (data as string[]) : null
    dispatch('update', fruitList)
  },

  update({ commit }, fruitList?: string[]) {
    if (fruitList) {
      fruitList.forEach((fruitName) => {
        commit('ADD_FRUIT', fruitName)
      })
    }
  },
}
