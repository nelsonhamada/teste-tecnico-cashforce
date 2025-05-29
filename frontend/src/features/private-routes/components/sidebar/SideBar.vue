<script lang="ts" setup>
import { ref } from "vue";
import NavItem from "@/features/private-routes/components/sidebar/NavItem.vue";
import cashforceLogo from "@/features/private-routes/assets/cashforce-logo.png";
import sidebarItems from "@/features/private-routes/components/sidebar/sidebarItems";

const sidebarDrawer = ref(true);
const sidebarMenu = ref(sidebarItems);
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
        style="max-width: 160px; margin-bottom: 16px; height: 35px"
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

    <div>
      <v-list aria-busy="true" aria-label="menu list">
        <template
          v-for="(item, index) in sidebarMenu"
          :key="index"
        >
          <NavItem :item="item" :level="1" />
        </template>
        </v-list>
    </div>

  </v-navigation-drawer>
</template>