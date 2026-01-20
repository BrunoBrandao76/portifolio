<template>
  <section class="section">
    <div class="section__head">
      <h2 class="h2">Skills</h2>
      <p class="p">As tecnologias e competências que mais uso.</p>
    </div>

    <div class="grid grid-3">
      <div class="glass pad">
        <h3 class="section__title"><i class="pi pi-code mr"></i> Backend</h3>
        <div class="chipWrap">
          <Chip v-for="s in skills.backend" :key="s" :label="s" />
        </div>
      </div>

      <div class="glass pad">
        <h3 class="section__title"><i class="pi pi-desktop mr"></i> Frontend</h3>
        <div class="chipWrap">
          <Chip v-for="s in skills.frontend" :key="s" :label="s" />
        </div>
      </div>

      <div class="glass pad">
        <h3 class="section__title"><i class="pi pi-wrench mr"></i> DevOps / Qualidade</h3>
        <div class="chipWrap">
          <Chip v-for="s in skills.devops" :key="s" :label="s" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Chip from "primevue/chip";

defineProps({
  skills: { type: Object, required: true },
});
</script>
