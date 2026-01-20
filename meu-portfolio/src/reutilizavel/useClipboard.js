// src/composables/useClipboard.js
// Copiar texto para a área de transferência com feedback.

import { useToast } from "primevue/usetoast";

export function useClipboard() {
  const toast = useToast();

  function notify(summary, detail = "", severity = "success") {
    toast.add({ severity, summary, detail, life: 2800 });
  }

  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
      notify("Copiado!", text, "success");
    } catch {
      notify("Não consegui copiar", "Seu navegador bloqueou a cópia.", "warn");
    }
  }

  return { copyText };
}
