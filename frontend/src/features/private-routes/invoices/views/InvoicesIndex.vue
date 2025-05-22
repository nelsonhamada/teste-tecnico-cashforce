<script setup lang="ts">
import { ref } from 'vue';

const headers = ref([
  { title: 'NF', key: 'nf' },
  { title: 'Sacado', key: 'sacado' },
  { title: 'Cedente', key: 'cedente' },
  { title: 'Emissão', key: 'emissao' },
  { title: 'Valor', key: 'valor' },
  { title: 'Status', key: 'status' },
]);

const items = ref([
  {
    nf: '12345',
    sacado: 'Empresa A',
    cedente: 'Empresa B',
    emissao: '2024-05-22',
    valor: 'R$ 1.000,00',
    status: 'Pendente',
  },
]);
</script>

<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="items"
      class="elevation-1"
    >
      <template #top>
        <v-toolbar flat>
          <v-toolbar-title>Notas Fiscais</v-toolbar-title>
        </v-toolbar>
      </template>
    </v-data-table>
  </v-container>
</template>

