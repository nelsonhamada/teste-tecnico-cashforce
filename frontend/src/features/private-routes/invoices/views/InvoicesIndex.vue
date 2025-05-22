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
    valor: 'R$ 49.725,00',
    status: 'RECEBIDO',
  },
  {
    nf: '1234',
    sacado: 'SACADO 001',
    cedente: 'CEDENTE 002',
    emissao: '12/02/2020',
    valor: 'R$ 49.725,00',
    status: 'RECEBIDO',
  },
];
</script>

<template>
  <v-container class="pa-8">
    <div class="mb-2">
      <div class="d-flex align-center mb-1">
        <v-icon color="primary" class="mr-2">mdi-handshake-outline</v-icon>
        <span class="title font-weight-bold text-primary">Notas fiscais</span>
      </div>
      <div class="subtitle-2 text-grey-darken-1">
        Visualize as notas fiscais que você tem.
      </div>
    </div>
    <v-data-table
      :headers="headers"
      :items="items"
      class="elevation-0 invoices-table"
      hide-default-footer
      density="comfortable"
    >
    </v-data-table>
  </v-container>
</template>

<style scoped>
.title {
  font-size: 1.3rem;
}
.valor-green {
  color: #00C853;
  font-weight: 600;
}
.status-green {
  color: #00C853;
  font-weight: 600;
  letter-spacing: 1px;
}
.btn-cedente {
  text-transform: none;
  font-size: 13px;
  border-radius: 8px;
  border-color: #B0BEC5;
}
.invoices-table .v-data-table__tr {
  border-radius: 12px;
  background: #fff;
}
.invoices-table .v-data-table__td {
  font-size: 15px;
}
</style>