<!-- eslint-disable -->
<script setup lang="ts">

const headers = [
  { title: 'NOTA FISCAL', key: 'nf', align: 'start' as const },
  { title: 'SACADO', key: 'sacado' },
  { title: 'CEDENTE', key: 'cedente' },
  { title: 'EMISSÃO', key: 'emissao' },
  { title: 'VALOR', key: 'valor' },
  { title: 'STATUS', key: 'status' },
  { title: '', key: 'actions', sortable: false },
];

const items = [
  {
    nf: '1234',
    sacado: 'SACADO 001',
    cedente: 'CEDENTE 002',
    emissao: '12/02/2020',
    valor: 'R$ 49.725,00',
    status: 'RECEBIDO',
  },
  {
    nf: '1234',
    sacado: 'SACADO 001',
    cedente: 'CEDENTE 002',
    emissao: '12/02/2020',
    valor: 'R$ 49.025,00',
    status: 'RECEBIDO',
  },
  {
    nf: '1234',
    sacado: 'SACADO 001',
    cedente: 'CEDENTE 002',
    emissao: '12/02/2020',
    valor: 'R$ 49.925,00',
    status: 'RECEBIDO',
  },
];
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
<v-table>
    <thead class="pa-4">
      <tr>
        <th v-for="(item) in headers" :key="item.key"> {{ item.title  }}</th>
      </tr>
    </thead>
    <tbody class="mt-14">
      <tr v-for="(item, index) in items" :key="index" class="row-table" >
        <td>{{ item.nf }}</td>
        <td>{{ item.cedente }}</td>
        <td>{{ item.emissao }}</td>
        <td color="green">{{ item.valor }}</td>
        <td>{{ item.status }}</td>
      </tr>
    </tbody>
  </v-table>
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