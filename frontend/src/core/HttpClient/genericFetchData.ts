import { useUIStore } from '../../stores/UIStore';

const UIStore = useUIStore();
const BASE_URL = 'http://localhost:3001';  

async function genericFetchData(endpoint:string, payload?: RequestInit) {
    UIStore.isLoading = true;
    try {
    const response = await fetch(`${BASE_URL}${endpoint}`, payload ? {} : payload);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar notas fiscais:', error);
  } finally {
    UIStore.isLoading = false;
  } 
}


export default genericFetchData;