<script setup lang="ts">
import Header from "@/features/private-routes/components/HeaderMain.vue";
import SideBar from "@/features/private-routes/components/sidebar/SideBar.vue";
</script>

<template>
  <SideBar />
  <Header />
  <v-main class="page-wrapper">
        <router-view v-slot="{ Component }">
          <Transition name="fade" mode="out-in">
            <component :is="Component" />
          </Transition>
        </router-view>
    </v-main>
</template>

<style scoped>
html {
  overflow-y: auto;
}
.page-wrapper {
  .v-container {
    &:first-child {
      min-height: calc(100vh - 139px);
    }

    padding: 20px;

    @media (max-width: 1550px) {
      max-width: 100%;
    }

    @media (min-width: 768px) {
      padding-inline: 20px;
    }
  }
}

</style>