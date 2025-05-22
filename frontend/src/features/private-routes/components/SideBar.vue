<script lang="ts" setup>
import { ref } from "vue";
import cashforceLogo from "@/features/private-routes/assets/cashforce-logo.png";

const sidebarDrawer = ref(true);
</script>

<template>
  <v-navigation-drawer
    app
    class="leftSidebar"
    :rail="!sidebarDrawer"
    width="300"
    rail-width="70"
    mobile-breakpoint="lg"
  >
    <div class="d-flex justify-space-between align-center pa-4">
      <img
      v-if="sidebarDrawer"
        :src="cashforceLogo"
        alt="Cashforce Logo"
        class="ma-2"
        style="max-width: 140px; margin-bottom: 16px; height: 35px"
      />
      <v-btn
        icon
        variant="text"
        @click="sidebarDrawer = !sidebarDrawer"
        :aria-label="sidebarDrawer ? 'Retract sidebar' : 'Expand sidebar'"
      >
        <v-icon>{{ sidebarDrawer ? 'mdi-chevron-left' : 'mdi-chevron-right' }}</v-icon>
      </v-btn>
    </div>
    <!-- Adicione aqui outros itens do menu -->
  </v-navigation-drawer>
</template>