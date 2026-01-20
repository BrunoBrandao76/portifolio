<template>
  <Dialog
    v-model:visible="visibleModel"
    modal
    header="Detalhes do projeto"
    :style="{ width: 'min(720px, 92vw)' }"
  >
    <template v-if="selectedProject">
      <h3 style="margin-top:0">{{ selectedProject.name }}</h3>
      <p class="p">{{ selectedProject.longDesc }}</p>

      <Divider />

      <strong>Tecnologias</strong>
      <div class="chipWrap" style="margin-top:10px">
        <Chip v-for="t in selectedProject.tech" :key="t" :label="t" />
      </div>

      <Divider />

      <div style="display:flex; gap:10px; flex-wrap:wrap">
        <Button icon="pi pi-github" label="Abrir código" outlined @click="$emit('openLink', selectedProject.github)" />
        <Button icon="pi pi-external-link" label="Abrir demo" :disabled="!selectedProject.demo" @click="$emit('openLink', selectedProject.demo)" />
      </div>
    </template>
  </Dialog>
</template>

<script setup>
import { computed } from "vue";
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import Divider from "primevue/divider";
import Chip from "primevue/chip";

const props = defineProps({
  modelValue: { type: Boolean, required: true },
  selectedProject: { type: Object, default: null },
});

const emit = defineEmits(["update:modelValue", "openLink"]);

const visibleModel = computed({
  get: () => props.modelValue,
  set: (v) => emit("update:modelValue", v),
});
</script>


