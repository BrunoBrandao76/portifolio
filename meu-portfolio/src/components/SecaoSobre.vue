<template>
  <section id="sobre" class="section">
    <div class="section__head">
      <h2 class="h2">Sobre mim</h2>
      <p class="p">Quem eu sou, como trabalho e o que eu valorizo.</p>
    </div>

    <div class="grid grid-2">
      <div class="glass pad">
        <h3 class="section__title">
          <i class="pi pi-user mr"></i> Perfil
        </h3>

        <p class="p">{{ profile.about }}</p>

        <Divider />

        <div class="grid grid-2">
          <div class="infoLine">
            <span class="muted">Cargo atual</span>
            <strong>{{ profile.currentTitle }}</strong>
          </div>
          <div class="infoLine">
            <span class="muted">Empresa</span>
            <strong>{{ profile.currentCompany }}</strong>
          </div>
          <div class="infoLine">
            <span class="muted">Principais áreas</span>
            <strong>{{ profile.areas }}</strong>
          </div>
          <div class="infoLine">
            <span class="muted">Disponibilidade</span>
            <strong>{{ profile.availability }}</strong>
          </div>
        </div>
      </div>

      <div class="glass pad">
        <h3 class="section__title">
          <i class="pi pi-verified mr"></i> Diferenciais
        </h3>

        <div class="diffList">
          <div v-for="d in profile.differentials" :key="d.title" class="diffItem">
            <Tag :value="d.tag" severity="info" />
            <div class="diffText">
              <strong>{{ d.title }}</strong>
              <p class="p">{{ d.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Divider from "primevue/divider";
import Tag from "primevue/tag";

defineProps({
  profile: { type: Object, required: true },
});
</script>
