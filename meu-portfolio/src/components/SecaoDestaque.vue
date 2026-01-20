<template>
  <section class="hero__card glass">
    <div class="hero__grid">
      <div class="hero__left">
        <div class="badge">
          <i class="pi pi-bolt"></i>
          <span>Disponível para novos desafios</span>
        </div>

        <h1 class="h1">
          Olá, eu sou <span class="grad">{{ profile.name }}</span>.
          <br />
          Eu construo soluções com <span class="grad2">qualidade</span> e <span class="grad2">performance</span>.
        </h1>

        <p class="p hero__subtitle">{{ profile.headline }}</p>

        <div class="hero__socials">
          <a class="social-btn" :href="profile.links.github" target="_blank" rel="noreferrer">
            <i class="pi pi-github"></i> GitHub
          </a>
          <a class="social-btn" :href="profile.links.instagram" target="_blank" rel="noreferrer">
            <i class="pi pi-instagram"></i> Instagram
          </a>
          <a class="social-btn" :href="profile.links.linkedin" target="_blank" rel="noreferrer">
            <i class="pi pi-linkedin"></i> LinkedIn
          </a>
          <a class="social-btn" :href="whatsappLink" target="_blank" rel="noreferrer">
            <i class="pi pi-whatsapp"></i> WhatsApp
          </a>
        </div>

        <div class="hero__actions">
          <Button icon="pi pi-send" label="Falar comigo" @click="$emit('go', 'contato')" />
          <Button icon="pi pi-copy" label="Copiar e-mail" severity="secondary" outlined @click="$emit('copyEmail')" />
        </div>

        <hr class="hr" />

        <div class="grid grid-3 hero__stats">
          <div class="stat">
            <div class="stat__value">{{ profile.stats.years }}+</div>
            <div class="stat__label">anos de experiência</div>
          </div>
          <div class="stat">
            <div class="stat__value">{{ profile.stats.projects }}+</div>
            <div class="stat__label">projetos / entregas</div>
          </div>
          <div class="stat">
            <div class="stat__value">{{ profile.stats.focus }}</div>
            <div class="stat__label">foco principal</div>
          </div>
        </div>
      </div>

      <div class="hero__right">
        <div class="photoWrap">
          <img class="photo" :src="profile.photoUrl" alt="Foto" />
          <div class="ring"></div>
        </div>

        <div class="glass miniCard">
          <div class="miniCard__top">
            <i class="pi pi-star-fill"></i>
            <strong>Stack do dia a dia</strong>
          </div>

          <div class="miniCard__chips">
            <Chip v-for="t in profile.dailyStack" :key="t" :label="t" />
          </div>

          <Divider />

          <div class="miniCard__row">
            <span class="muted">Local:</span>
            <strong>{{ profile.location }}</strong>
          </div>
          <div class="miniCard__row">
            <span class="muted">E-mail:</span>
            <strong>{{ profile.email }}</strong>
          </div>

          <Button
            class="miniCard__btn"
            icon="pi pi-external-link"
            label="Ver repositórios"
            outlined
            @click="$emit('openLink', profile.links.github)"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from "primevue/button";
import Chip from "primevue/chip";
import Divider from "primevue/divider";

defineProps({
  profile: { type: Object, required: true },
  whatsappLink: { type: String, required: true },
});

defineEmits(["go", "openLink", "copyEmail"]);
</script>
