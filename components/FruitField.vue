<template>
  <v-text-field
    v-model="fruitName"
    append-outer-icon="mdi-send"
    filled
    clear-icon="mdi-close-circle"
    clearable
    label="Nome da fruta"
    hint="Adicione o nome da fruta"
    type="text"
    autocomplete="fruit"
    name="fruit"
    @click:append-outer="addFruitToFruitList"
    @keydown.enter="addFruitToFruitList"
  ></v-text-field>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class FruitField extends Vue {
  fruitName: string = ''

  addFruitToFruitList() {
    this.$store.commit('fruit/ADD_FRUIT', this.fruitName)
    this.fruitName = ''
  }
}
</script>
