<script setup lang="ts">
const props = defineProps({ item: { type: Object, required: true }, level: Number });
</script>

<template>
  <v-list-item
    :to="item.type === 'external' ? '' : item.to"
    :href="item.type === 'external' ? item.to : ''"
    rounded
    class="mb-1"
    color="primary"
    :disabled="item.disabled"
    :target="item.type === 'external' ? '_blank' : ''"
    style="min-height: 56px;"
    active-class="nav-item-active"
  >
    <template v-slot:prepend>
      <div
        class="icon-border-left-green"
        :class="{ 'icon-border-left-green--active': (typeof $attrs.class === 'string' && $attrs.class.includes('nav-item-active')) }"
      >
        <v-icon size="28">{{ props.item.icon }}</v-icon>
      </div>
    </template>
    <v-tooltip :text="item.title" location="end">
      <template v-slot:activator="{ props }">
        <v-list-item-title v-bind="props">{{ item.title }}</v-list-item-title>
      </template>
    </v-tooltip>
  </v-list-item>
</template>

<style scoped>

.nav-item-active {
  color: #00C853 !important;
  border-left: 6px solid #00C853;
  border-radius:5px 0px 0px 5px;
  height: 40px;
  display: flex;
  align-items: center;
}
</style>