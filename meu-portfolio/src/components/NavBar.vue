<template>
  <header class="topbar">
    <div class="container topbar__inner">
      <div class="brand">
        <span class="brand__dot"></span>
        <strong>{{ profile.name }}</strong>
        <span class="brand__role">• {{ profile.role }}</span>
      </div>

      <nav class="nav">
        <Button text class="navbtn" label="Sobre" @click="$emit('go', 'sobre')" />
        <Button text class="navbtn" label="Experiências" @click="$emit('go', 'experiencias')" />
        <Button text class="navbtn" label="Projetos" @click="$emit('go', 'projetos')" />
        <Button text class="navbtn" label="Contato" @click="$emit('go', 'contato')" />
      </nav>

      <Button
        class="cta"
        icon="pi pi-download"
        label="Baixar CV"
        severity="secondary"
        outlined
        @click="$emit('openLink', profile.links.cv)"
      />
    </div>
  </header>
</template>

<script setup>
import Button from "primevue/button";

defineProps({
  profile: { type: Object, required: true },
});

defineEmits(["go", "openLink"]);
</script>
