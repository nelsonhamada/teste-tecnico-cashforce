import { defineStore } from "pinia";

export interface MainMessage {
  text: string;
  color: "success" | "error" | "warning" | "info";
}

export const useMainStore = defineStore(
  "mainStore",
  {
    state: () => ({
      messages: [] as MainMessage[],
    }),
    actions: {
      addMessage(message: MainMessage, delay = false) {
        const msg = this.messages;
        if (delay) {
          setTimeout(() => {
            msg.push(message);
          }, 400);
          return;
        } else {
          msg.push(message);
        }
      },
      addSucessMessage(message: string, delay = false) {
        this.addMessage({ text: message, color: "success" }, delay);
      },
      addErrorMessage(message: string, delay = false) {
        this.addMessage({ text: message, color: "error" }, delay);
      },
      addWarningMessage(message: string, delay = false) {
        this.addMessage({ text: message, color: "warning" }, delay);
      },
    },
  }
);
