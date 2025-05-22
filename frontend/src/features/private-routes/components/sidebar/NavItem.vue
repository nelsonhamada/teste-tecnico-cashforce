<script setup lang="ts">
const props = defineProps({ item: { type: Object, required: true }, level: Number });

console.log("NavItem props", props.item.icon);
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
  >
    <!---If icon-->
    <template v-slot:prepend>
        <v-icon>{{props.item.icon}}</v-icon>
    </template>
    <v-tooltip :text="item.title" location="end">
      <template v-slot:activator="{ props }">
        <v-list-item-title v-bind="props">{{ item.title }}</v-list-item-title>
      </template>
    </v-tooltip>

  </v-list-item>
</template>
