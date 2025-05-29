import { createRouter, createWebHistory } from 'vue-router';
import PrivateRoutes from './PrivateRoutes';
import { useUIStore } from '@/stores/UiStore';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    PrivateRoutes,
  ],
});

  router.beforeEach(() => {
  const uiStore = useUIStore();
  uiStore.isLoading = true;
});

router.afterEach(() => {
  const uiStore = useUIStore();
  uiStore.isLoading = false;
});

export default router;
