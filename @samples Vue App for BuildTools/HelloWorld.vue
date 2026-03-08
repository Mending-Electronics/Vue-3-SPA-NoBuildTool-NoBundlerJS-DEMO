<template>
  <div class="hello">
    <p>{{ message }}</p>

    <button @click="increment">
      Compteur : {{ count }}
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Props
defineProps({
  message: {
    type: String,
    required: true
  }
})

// State
const count = ref(0)

// Méthodes
function increment() {
  count.value++
}
</script>

<style scoped>
.hello {
  margin-top: 20px;
}
button {
  padding: 8px 12px;
  cursor: pointer;
}
</style>
