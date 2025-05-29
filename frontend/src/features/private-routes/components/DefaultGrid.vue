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
  const minWidth = alias.length * 10 + 160;
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
          :isReadOnly="true"
          :width="columnMinWidth(column)"
        >
        </wj-flex-grid-column>
      </wj-flex-grid>
    </div>
  </v-card>
</template>

<style>
.default-grid .search {
  padding: 12px;
}

.default-grid .wj-flexgrid .wj-row:not(.wj-header) .wj-cell:last-child,
.default-grid .wj-flexgrid .wj-row:not(.wj-header) .wj-cell:nth-last-child(2) {
  color: #00AD8C;
}

.default-grid .wj-header {
  border: none !important;
  background-color: transparent !important;
  color: #A1A8B8 !important;  
}


.default-grid .wj-flexgrid .wj-cell {
  padding: 12px;
  border: none;
  border-top: 1px solid ;
  border-bottom: 1px solid ;
  border-color: #A1A8B8;
  text-align: start;
  border-spacing: 10px !important;

}



.default-grid .wj-flexgrid .wj-row > .wj-cell:first-child {
  border-left: 2px solid ;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-color: #A1A8B8;
}

.default-grid .wj-flexgrid .wj-row > .wj-cell:last-child {
  border-right: 2px solid ;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-color: #A1A8B8;
  
}

.default-grid .wj-flexgrid {
  border: none;
}


</style>
