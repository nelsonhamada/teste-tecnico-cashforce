<script setup lang="ts">
import Header from "@/features/private-routes/components/HeaderMain.vue";
import SideBar from "@/features/private-routes/components/sidebar/SideBar.vue";
</script>

<template>
  <v-app>
    <SideBar />
    <Header />
    <v-main class="main-container pl-16 ml-10">
      <router-view v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <component :is="Component" />
        </Transition>
      </router-view>
    </v-main>
    </v-app>
</template>

<style scoped>

</style>

