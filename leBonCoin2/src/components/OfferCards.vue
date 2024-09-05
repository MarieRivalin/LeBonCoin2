<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps({
  offerInfos: {
    type: Object,
    required: true
  }
})
console.log(props.offerInfos)
</script>
<template>
  <RouterLink :to="{ name: 'offer', params: { id: id } }" class="offerCards">
    <div>
      <img :src="offerInfos.pictures.data[0].attributes.url" :alt="offerInfos.title" />

      <p>{{ offerInfos.title }}</p>

      <p>{{ offerInfos.price }} €</p>

      <div>
        <p>{{ offerInfos.attributes.publishedAt }}</p>
        <font-awesome-icon :icon="['far', 'heart']" />
      </div>
    </div>
  </RouterLink>
</template>

<style scoped>
img {
  width: 150px;
  height: 200px;
  object-fit: cover;
}
</style>
