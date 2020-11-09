<template>
  <v-card>
    <FruitListItem
      v-for="(fruitName, index) in fruitList"
      :key="index"
      :fruit-name="fruitName"
    />
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    FruitListItem: () => import('@/components/FruitListItem.vue'),
  },
})
export default class FruitList extends Vue {
  get fruitList(): string[] {
    return this.$store.getters['fruit/list']
  }
}
</script>
