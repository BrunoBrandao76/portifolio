// src/composables/useLinks.js
// Funções para abrir links com validação e segurança.

import { useToast } from "primevue/usetoast";

export function useLinks() {
  const toast = useToast();

  function notify(summary, detail = "", severity = "success") {
    toast.add({ severity, summary, detail, life: 2800 });
  }

  function openLink(url) {
    // Se não tiver URL, avisamos para o usuário configurar
    if (!url) {
      notify("Link não configurado", "Edite os links em src/data/profile.js", "warn");
      return;
    }

    // Abrimos em nova aba com segurança (noreferrer)
    window.open(url, "_blank", "noreferrer");
  }

  return { openLink, notify };
}
