<template>
  <div>
    <!-- Toast global -->
    <Toast />

    <NavBar :profile="profile" @go="scrollTo" @openLink="openLink" />

    <main class="container hero">
      <SecaoDestaque
        :profile="profile"
        :whatsappLink="whatsappLink"
        @go="scrollTo"
        @openLink="openLink"
        @copyEmail="copyEmail"
      />

      <SecaoSobre :profile="profile" />

      <SecaoExperiencia :experiences="experiences" />

      <SecaoProjetos
        :projects="projects"
        @openLink="openLink"
        @openProject="openProject"
      />

      <SecaoHabilidades :skills="skills" />

      <SecaoContato
        :profile="profile"
        :whatsappNumber="profile.links.whatsappNumber"
        @openLink="openLink"
        @copyEmail="copyEmail"
      />

      <SecaoRodape :name="profile.name" @top="scrollToTop" />

      <ScrollTop />
    </main>

    <!-- Dialog separado -->
    <DialogProjeto
      v-model:visible="projectDialogVisible"
      :selectedProject="selectedProject"
      @openLink="openLink"
    />
  </div>
</template>

<script setup>
// ===============================
// PrimeVue
// ===============================
import Toast from "primevue/toast";
import ScrollTop from "primevue/scrolltop";
import { computed, ref } from "vue";
import { useToast } from "primevue/usetoast";

// ===============================
// Componentes
// ===============================
import NavBar from "./components/NavBar.vue";
import SecaoDestaque from "./components/SecaoDestaque.vue";
import SecaoSobre from "./components/SecaoSobre.vue";
import SecaoExperiencia from "./components/SecaoExperiencia.vue";
import SecaoProjetos from "./components/SecaoProjetos.vue";
import SecaoHabilidades from "./components/SecaoHabilidades.vue";
import SecaoContato from "./components/SecaoContato.vue";
import SecaoRodape from "./components/SecaoRodape.vue";
import DialogProjeto from "./components/DialogProjeto.vue";

// ===============================
// Dados separados
// ===============================

import { profile } from "./data/perfil";
import { experiences } from "./data/experiences";
import { projects } from "./data/projetos";
import { skills } from "./data/skills";

// ===============================
// Toast helper (notificações)
// ===============================
const toast = useToast();
function notify(summary, detail = "", severity = "success") {
  toast.add({ severity, summary, detail, life: 2800 });
}

// ===============================
// WhatsApp link com texto padrão
// ===============================
const whatsappLink = computed(() => {
  const base = `https://wa.me/${profile.links.whatsappNumber}`;
  const text = encodeURIComponent("Olá! Vim pelo seu portfólio e gostaria de conversar.");
  return `${base}?text=${text}`;
});

// ===============================
// Utilitários (abrir link / copiar / scroll)
// ===============================
function openLink(url) {
  if (!url) {
    notify("Link não configurado", "Edite o link em src/data/profile.js", "warn");
    return;
  }
  window.open(url, "_blank", "noreferrer");
}

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(profile.email);
    notify("E-mail copiado!", profile.email, "success");
  } catch {
    notify("Não consegui copiar", "Seu navegador bloqueou a cópia.", "warn");
  }
}

function scrollTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ===============================
// Dialog de projeto
// ===============================
const projectDialogVisible = ref(false);
const selectedProject = ref(null);

function openProject(p) {
  selectedProject.value = p;
  projectDialogVisible.value = true;
}
</script>

