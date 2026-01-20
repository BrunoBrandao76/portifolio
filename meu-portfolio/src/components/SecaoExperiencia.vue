<template>
  <section id="experiencias" class="section">
    <div class="section__head">
      <h2 class="h2">Experiências</h2>
      <p class="p">Minha trajetória profissional (com foco no que eu entreguei).</p>
    </div>

    <div class="glass pad">
      <Timeline :value="experiences" align="alternate">
        <template #content="slotProps">
          <div class="exp">
            <div class="exp__header">
              <h3 class="exp__title">{{ slotProps.item.title }}</h3>
              <span class="exp__period">{{ slotProps.item.period }}</span>
            </div>

            <div class="exp__meta">
              <span class="muted">{{ slotProps.item.company }}</span>
              <span class="dot"></span>
              <span class="muted">{{ slotProps.item.location }}</span>
            </div>

            <p class="p">{{ slotProps.item.summary }}</p>

            <div class="exp__tags">
              <Chip v-for="t in slotProps.item.tags" :key="t" :label="t" />
            </div>
          </div>
        </template>
      </Timeline>
    </div>
  </section>
</template>

<script setup>
import Timeline from "primevue/timeline";
import Chip from "primevue/chip";

defineProps({
  experiences: { type: Array, required: true },
});
</script>
