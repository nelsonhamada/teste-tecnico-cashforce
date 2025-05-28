<script setup lang="ts">
import * as wjCore from "@mescius/wijmo";
import { FlexGrid } from "@mescius/wijmo.grid";
import "@mescius/wijmo.styles/wijmo.css";
import { WjFlexGrid, WjFlexGridColumn } from "@mescius/wijmo.vue2.grid";
import "@mescius/wijmo.vue2.grid.filter";
import { computed, defineEmits, onMounted, ref, watch } from "vue";


const props = defineProps({
  title: String,
  data: Object,
  columns: Object,
});

let flex = {} as FlexGrid;

function initialized(_flex: FlexGrid) {
  flex = _flex;
}

const emit = defineEmits(["row-selected"]);

const view = ref();
const filteredData = ref();

async function updateData() {
    
  if (props.data && Array.isArray(props.data)) {
    view.value = new wjCore.CollectionView(props.data, {
      currentItem: null,
    });
    filteredData.value = Object.keys(props.data[0]);
  } else {
    view.value = [];
    filteredData.value = [];
  }
}

function searchInTable(e) {
  //https://developer.mescius.com/wijmo/demos/Grid/FilteringSearching/Filter/vue
  let filter;
  if (!isNaN(e.target.value)) {
    filter = e.target.value.replace(/[.]/g, "");
  } else {
    filter = e.target.value.toLowerCase().replace(/[,]/g, "");
  }
  flex.collectionView.filter = (item) => {
    return filter.length == 0 || Object.values(item).toString().toLowerCase().indexOf(filter) > -1;
  };
}

function onRowClick() {
  if (view.value.currentItem) {
    const selectedId = view.value.currentItem;
    emit("row-selected", selectedId);
  }
}

const displayedColumns = computed(() => {
  if (!filteredData.value || !props.columns) return [];

  return filteredData.value
    .filter((col) => props.columns && Object.keys(props.columns).includes(col))
    .sort((a, b) => (props.columns ? Object.keys(props.columns).indexOf(a) - Object.keys(props.columns).indexOf(b) : 0));
});

function columnMinWidth(alias: string): number {
  if (!alias) return 120;
  const minWidth = alias.length * 10 + 60;
  return minWidth;
}

onMounted(updateData);

watch(() => props.data, updateData);
</script>

<template>
  <v-card class="d-flex flex-fill flex-column default-grid">
    <div class="search w-50">
      <v-text-field
        type="text"
        variant="outlined"
        color="primary"
        prepend-inner-icon="mdi-magnify"
        @input="searchInTable($event)"
        hide-details
        placeholder="Pesquisar"
      />
    </div>

    <div class="d-flex flex-fill" >
      <wj-flex-grid
        :autoGenerateColumns="false"
        :initialized="initialized"
        ref="flexGrid"
        :itemsSource="view"
        :autoClipboard="false"
        :headersVisibility="1"
        selectionMode="Row"
        @click="onRowClick"
      >
        <wj-flex-grid-column
          v-for="column in displayedColumns"
          :key="column"
          :header="columns?.[column] || column"
          :binding="column"
          width="*"
          :isReadOnly="true"
          :minWidth="columnMinWidth(column)"
        />
      </wj-flex-grid>
    </div>
  </v-card>
</template>

<style>
.default-grid .search {
  padding: 12px;
}
.default-grid .wj-header {
  border-top: 1px solid rgb(var(--v-theme-borderLight)) !important;
}

.default-grid .wj-flexgrid .wj-cell {
  padding: 12px;
  color: rgb(var(--v-theme-darkText));
  background-color: rgb(var(--v-theme-background));
  border: none;
  border-bottom: 1px solid rgb(var(--v-theme-borderLight));
  text-align: start;
}

.default-grid .wj-cells .wj-row:hover .wj-cell:not(.wj-state-selected):not(.wj-state-multi-selected) {
  transition: all 0.5s;
  background: rgb(var(--v-theme-lightprimary));
}

.default-grid .wj-state-selected {
  background: rgba(var(--v-theme-primary), calc(var(--v-activated-opacity) * var(--v-theme-overlay-multiplier))) !important;
  color: rgb(var(--v-theme-primary)) !important;
}

.default-grid .wj-cells .wj-cell.wj-state-multi-selected {
  background: rgba(var(--v-theme-primary), calc(var(--v-activated-opacity) * var(--v-theme-overlay-multiplier))) !important;
  color: rgb(var(--v-theme-primary)) !important;
}

.default-grid .wj-flexgrid {
  background-color: rgb(var(--v-theme-background));
  border: none;
}
</style>
