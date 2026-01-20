<template>
  <footer class="footer">
    <hr class="hr" />
    <div class="footer__inner">
      <span class="muted">© {{ new Date().getFullYear() }} {{ name }}. Feito em Vue + PrimeVue.</span>
      <Button text icon="pi pi-arrow-up" label="Topo" @click="$emit('top')" />
    </div>
  </footer>
</template>

<script setup>
import Button from "primevue/button";

defineProps({
  name: { type: String, required: true },
});

defineEmits(["top"]);
</script>
