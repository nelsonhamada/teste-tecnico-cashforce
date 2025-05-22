<script setup lang="ts">
import Header from "@/features/private-routes/components/HeaderMain.vue";
 
</script>

<template>
  <Header />
    <v-main>
        <router-view v-slot="{ Component }">
          <Transition name="fade" mode="out-in">
            <component :is="Component" />
          </Transition>
        </router-view>
    </v-main>
</template>