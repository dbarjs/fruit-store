<template>
  <div>
    <FruitField />
    <FruitList />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    FruitField: () => import('@/components/FruitField.vue'),
    FruitList: () => import('@/components/FruitList.vue'),
  },
  created() {
    this.$store.dispatch('fruit/fetchFromLocalStorage')
    this.$store.dispatch('fruit/fetchFromAPI')
  },
})
export default class HomePage extends Vue {}
</script>
