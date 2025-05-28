<!-- eslint-disable -->
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import DefaultGrid from '../../components/DefaultGrid.vue';
import genericFetchData from '@/core/HttpClient/genericFetchData';
import URL from '@/core/HttpRequests/EnumRequests';

const items = ref([]);
const showError = ref(false);
const errorMessage = ref('');

onMounted(async () => {
  try {
    const data = await genericFetchData(URL.invoicesGetAll);

    items.value = data.map((item: any) => ({
      ...item,
      emissao: formatDate(item.emissao),
    }));
  } catch (error) {
    showError.value = true;
    errorMessage.value = 'Erro ao buscar notas fiscais. Por favor, tente novamente mais tarde.';
    console.error('Erro ao buscar notas fiscais:', error);
  }
});

function formatDate(dateStr: string): string {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return dateStr;
  return date.toLocaleDateString('pt-BR');
}

// Headers inseridos de forma manual para aproximar do Figma, poderia ser feito diretamente do backend também e tratado as _
const columns = {
  nf: 'NOTA FISCAL',
  sacado: 'SACADO',
  cedente: 'CEDENTE',
  emissao: 'EMISSÃO',
  valor: 'VALOR',
  status: 'STATUS',
};

</script>

<template>
  <v-container class="pa-4">
    <v-snackbar v-model="showError" location="top right" color="error" close-on-content-click>
        {{ errorMessage }}
        </v-snackbar>
    <div class="mb-2">
      <div class="d-flex align-center mb-1">
        <v-icon color="primary" class="mr-2">mdi-handshake-outline</v-icon>
        <span class="title font-weight-bold text-primary">Notas fiscais</span>
      </div>
      <div class="text-grey-darken-1">
        Visualize as notas fiscais que você tem.
      </div>
    </div>
    <div>
        <DefaultGrid
        title="Notas Fiscais"
        :data="items"
        :columns="columns"
        />
    </div>
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