<template>
  <section id="contato" class="section">
    <div class="section__head">
      <h2 class="h2">Contato</h2>
      <p class="p">Mande umaa mensagem rápida (ou use WhatsApp / e-mail).</p>
    </div>

    <div class="grid grid-2">
      <div class="glass pad">
        <h3 class="section__title"><i class="pi pi-envelope mr"></i> Vamos conversar</h3>

        <div class="form">
          <label class="muted">Seu nome</label>
          <InputText v-model="contact.name" placeholder="Ex.: João" />

          <label class="muted">Seu e-mail</label>
          <InputText v-model="contact.email" placeholder="Ex.: joao@email.com" />

          <label class="muted">Mensagem</label>
          <Textarea v-model="contact.message" rows="5" autoResize placeholder="Me conte sobre a sua ideia..." />

          <div class="form__actions">
            <Button icon="pi pi-send" label="Enviar por e-mail" @click="sendEmail" />
            <Button icon="pi pi-whatsapp" label="Enviar por WhatsApp" severity="secondary" outlined @click="sendWhatsApp" />
          </div>
        </div>
      </div>

      <div class="glass pad">
        <h3 class="section__title"><i class="pi pi-map-marker mr"></i> Informações rápidas</h3>

        <div class="quick">
          <div class="quick__item">
            <span class="muted">E-mail</span>
            <strong>{{ profile.email }}</strong>
            <Button text icon="pi pi-copy" label="Copiar" @click="$emit('copyEmail')" />
          </div>

          <div class="quick__item">
            <span class="muted">Cidade</span>
            <strong>{{ profile.location }}</strong>
          </div>

          <div class="quick__item">
            <span class="muted">GitHub</span>
            <Button icon="pi pi-github" label="Abrir" outlined @click="$emit('openLink', profile.links.github)" />
          </div>

          <Divider />

          <div class="callout">
            <i class="pi pi-heart-fill"></i>
            <div>
              <strong>Qualidade é prioridade</strong>
              <p class="p">Eu gosto de entregar com rastreabilidade, padrões, testes e clareza no código.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";
import { useToast } from "primevue/usetoast";

import Button from "primevue/button";
import Divider from "primevue/divider";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";

const props = defineProps({
  profile: { type: Object, required: true },
  whatsappNumber: { type: String, required: true },
});

defineEmits(["openLink", "copyEmail"]);

const toast = useToast();
function notify(summary, detail = "", severity = "success") {
  toast.add({ severity, summary, detail, life: 2800 });
}

const contact = reactive({
  name: "",
  email: "",
  message: "",
});

function sendEmail() {
  if (!contact.message.trim()) {
    notify("Mensagem vazia", "Escreva uma mensagem antes de enviar.", "warn");
    return;
  }

  const subject = encodeURIComponent(`Contato via Portfólio - ${contact.name || "Visitante"}`);
  const body = encodeURIComponent(
    `Nome: ${contact.name}\nE-mail: ${contact.email}\n\nMensagem:\n${contact.message}`
  );

  window.open(`mailto:${props.profile.email}?subject=${subject}&body=${body}`, "_blank");
  notify("Abrindo e-mail", "Seu aplicativo de e-mail vai abrir com a mensagem pronta.", "success");
}

function sendWhatsApp() {
  if (!contact.message.trim()) {
    notify("Mensagem vazia", "Escreva uma mensagem antes de enviar.", "warn");
    return;
  }

  const base = `https://wa.me/${props.whatsappNumber}`;
  const text = encodeURIComponent(
    `Olá! Sou ${contact.name || "um visitante"}.\nMeu e-mail: ${contact.email || "(não informado)"}\n\n${contact.message}`
  );

  window.open(`${base}?text=${text}`, "_blank");
  notify("Abrindo WhatsApp", "Mensagem preparada para envio.", "success");
}
</script>
