<!-- eslint-disable -->
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import DefaultGrid from '../../components/DefaultGrid.vue';


const headers = [
  { title: 'NOTA FISCAL', key: 'nf', align: 'start' as const },
  { title: 'SACADO', key: 'sacado' },
  { title: 'CEDENTE', key: 'cedente' },
  { title: 'EMISSÃO', key: 'emissao' },
  { title: 'VALOR', key: 'valor' },
  { title: 'STATUS', key: 'status' },
  { title: '', key: 'actions', sortable: false },
];

const columns = {
  nf: 'NOTA FISCAL',
  sacado: 'SACADO',
  cedente: 'CEDENTE',
  emissao: 'EMISSÃO',
  valor: 'VALOR',
  status: 'STATUS',
};

const items = ref([]);

onMounted(async () => {
  try {
    const response = await fetch('http://localhost:3001/main');
    const data = await response.json();
    console.log('Dados recebidos:', data);  
    items.value = data;
  } catch (error) {
    console.error('Erro ao buscar notas fiscais:', error);
  }
});
</script>

<template>
  <v-container class="pa-4">
    <div class="mb-2">
      <div class="d-flex align-center mb-1">
        <v-icon color="primary" class="mr-2">mdi-handshake-outline</v-icon>
        <span class="title font-weight-bold text-primary">Notas fiscais</span>
      </div>
      <div class="text-grey-darken-1">
        Visualize as notas fiscais que você tem.
      </div>
    </div>
    <v-card-item>

        <DefaultGrid
        title="Notas Fiscais"
        :data="items"
        :columns="columns"
        />
    </v-card-item>
  </v-container>
</template>

<style scoped>
.v-container{
  min-width: 1000px;
}
.title {
  font-size: 1.3rem;
}
</style>