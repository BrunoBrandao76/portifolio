<template>
  <!-- O App agora s� "monta" as se��es -->
  <Toast />

  <NavBar
    :profile="profile"
    @go="scrollToId"
    @openLink="openLink"
  />

  <main class="container">
    <SecaoDestaque
      :profile="profile"
      :whatsappLink="whatsappLink"
      @go="scrollToId"
      @openLink="openLink"
      @copyEmail="copyEmail"
    />

    <SecaoSobre :profile="profile" />

    <SecaoExperiencia :experiencias="experiences" />

    <SecaoProjetos
      :projects="projects"
      @openLink="openLink"
      @openProject="openProject"
    />

    <SecaoHabilidades :skills="skills" />

    <SecaoContato
      :profile="profile"
      :whatsappNumber="profile.links.whatsappNumber"
      @copyEmail="copyEmail"
    />

    <SecaoRodape
      :name="profile.name"
      @top="scrollToTop"
    />

    <ScrollTop />
  </main>

  <DialogProjeto
    v-model="projectDialogVisible"
    :selectedProject="selectedProject"
    @openLink="openLink"
  />
</template>

<script setup>
import { computed, ref } from "vue";

// PrimeVue
import Toast from "primevue/toast";
import ScrollTop from "primevue/scrolltop";

// Componentes de se��o
import NavBar from "./components/NavBar.vue";
import SecaoDestaque from "./components/SecaoDestaque.vue";
import SecaoSobre from "./components/SecaoSobre.vue";
import SecaoExperiencia from "./components/SecaoExperiencia.vue";
import SecaoProjetos from "./components/SecaoProjetos.vue";
import SecaoHabilidades from "./components/SecaoHabilidades.vue";
import SecaoContato from "./components/SecaoContato.vue";
import SecaoRodape from "./components/SecaoRodape.vue";
import DialogProjeto from "./components/DialogProjeto.vue";

// Dados est�ticos
import { profile } from "./data/perfil";
import { experiences } from "./data/experiences";
import { projects } from "./data/projetos";
import { skills } from "./data/skills";

// Composables reutilizaveis
import { useLinks } from "./reutilizavel/useLinks";
import { useClipboard } from "./reutilizavel/useClipboard";
import { useScroll } from "./reutilizavel/useScroll";

const { openLink } = useLinks();
const { copyText } = useClipboard();
const { scrollToId, scrollToTop } = useScroll();

const whatsappLink = computed(() => {
  const base = `https://wa.me/${profile.links.whatsappNumber}`;
  const text = encodeURIComponent("Ol�! Vim pelo seu portf�lio e gostaria de conversar.");
  return `${base}?text=${text}`;
});

function copyEmail() {
  copyText(profile.email);
}

const projectDialogVisible = ref(false);
const selectedProject = ref(null);

function openProject(project) {
  selectedProject.value = project;
  projectDialogVisible.value = true;
}
</script>

<style scoped>
main {
  padding-top: 34px;
  padding-bottom: 60px;
}
</style>





