<template>
  <section id="projetos" class="section">
    <div class="section__head">
      <h2 class="h2">Projetos</h2>
      <p class="p">Busque e filtre projetos. Cada card tem botões para abrir links.</p>
    </div>

    <div class="glass pad">
      <div class="filters">
        <span class="p-input-icon-left wfull">
          <i class="pi pi-search"></i>
          <InputText v-model="projectQuery" placeholder="Buscar por nome, descrição ou tecnologia..." class="wfull" />
        </span>

        <Dropdown v-model="projectCategory" :options="projectCategories" placeholder="Categoria" class="wfull" showClear />

        <Button icon="pi pi-filter-slash" label="Limpar" severity="secondary" outlined @click="clearProjectFilters" />
      </div>

      <Divider />

      <DataView :value="filteredProjects" layout="grid">
        <template #grid="slotProps">
          <div class="grid grid-3">
            <div v-for="p in slotProps.items" :key="p.id" class="glass projCard">
              <div class="projCard__top">
                <div>
                  <h3 class="projCard__title">{{ p.name }}</h3>
                  <p class="p">{{ p.desc }}</p>
                </div>

                <Tag :value="p.category" severity="success" />
              </div>

              <div class="projCard__chips">
                <Chip v-for="t in p.tech" :key="t" :label="t" />
              </div>

              <Divider />

              <div class="projCard__actions">
                <Button icon="pi pi-github" label="Código" outlined @click="$emit('openLink', p.github)" />
                <Button icon="pi pi-external-link" label="Demo" :disabled="!p.demo" @click="$emit('openLink', p.demo)" />
                <Button icon="pi pi-info-circle" label="Detalhes" severity="secondary" outlined @click="$emit('openProject', p)" />
              </div>
            </div>
          </div>
        </template>

        <template #empty>
          <div class="empty">
            <i class="pi pi-folder-open"></i>
            <div>
              <strong>Nenhum projeto encontrado</strong>
              <p class="p">Tente mudar o texto de busca ou a categoria.</p>
            </div>
          </div>
        </template>
      </DataView>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from "vue";
import Button from "primevue/button";
import Chip from "primevue/chip";
import Tag from "primevue/tag";
import Divider from "primevue/divider";
import DataView from "primevue/dataview";
import InputText from "primevue/inputtext";
import Dropdown from "primevue/dropdown";

const props = defineProps({
  projects: { type: Array, required: true },
});

defineEmits(["openLink", "openProject"]);

const projectQuery = ref("");
const projectCategory = ref(null);

const projectCategories = computed(() => {
  const set = new Set(props.projects.map((p) => p.category));
  return [...set].sort();
});

const filteredProjects = computed(() => {
  const q = projectQuery.value.trim().toLowerCase();
  const cat = projectCategory.value;

  return props.projects.filter((p) => {
    const matchesCategory = !cat || p.category === cat;

    const haystack = [p.name, p.desc, p.category, ...(p.tech || [])].join(" ").toLowerCase();
    const matchesQuery = !q || haystack.includes(q);

    return matchesCategory && matchesQuery;
  });
});

function clearProjectFilters() {
  projectQuery.value = "";
  projectCategory.value = null;
}
</script>
