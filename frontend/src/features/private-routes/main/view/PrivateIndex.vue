<script setup lang="ts">
import Header from "@/features/private-routes/components/HeaderMain.vue";
import SideBar from "@/features/private-routes/components/SideBar.vue";
</script>

<template>
  <SideBar />
  <Header />
  <v-main>
        <router-view v-slot="{ Component }">
          <Transition name="fade" mode="out-in">
            <component :is="Component" />
          </Transition>
        </router-view>
    </v-main>
</template>