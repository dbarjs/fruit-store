<template>
  <v-list-item v-if="fruitName" link>
    <v-list-item-avatar>
      <v-icon class="purple darken-1" dark>mdi-fruit-cherries</v-icon>
    </v-list-item-avatar>
    <v-list-item-content>
      <v-list-item-title>{{ fruitName }}</v-list-item-title>
    </v-list-item-content>
    <v-list-item-action>
      <v-btn icon @click="onRemove">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-list-item-action>
  </v-list-item>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class FruitListItem extends Vue {
  @Prop({ default: '' })
  fruitName!: string

  onRemove() {
    this.$store.commit('fruit/REMOVE_FRUIT', this.fruitName)
  }
}
</script>
