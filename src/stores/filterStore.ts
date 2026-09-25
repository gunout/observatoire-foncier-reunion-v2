import { create } from "zustand";
import { COMMUNES_DATA, type Commune } from "../data/modules-data";

interface FilterState {
  communes: Commune[];
  filteredCommunes: Commune[];
  region: string;
  selectedCommune: string | null;
  loadingINSEE: boolean;
  setRegion: (region: string) => void;
  selectCommune: (name: string | null) => void;
  applyFilters: () => void;
  refreshFromINSEE: () => Promise<void>;
}

export const useFilterStore = create<FilterState>((set, get) => ({
  communes: COMMUNES_DATA,
  filteredCommunes: COMMUNES_DATA,
  region: "all",
  selectedCommune: null,
  loadingINSEE: false,

  setRegion: (region) => {
    set({ region });
    get().applyFilters();
  },

  selectCommune: (selectedCommune) => set({ selectedCommune }),

  applyFilters: () => {
    const { communes, region } = get();
    const filtered = region === "all" ? communes : communes.filter((c) => c.region === region);
    set({ filteredCommunes: filtered });
  },

  refreshFromINSEE: async () => {
    set({ loadingINSEE: true });
    try {
      // Simulation : dans un vrai projet, appeler l'API INSEE
      // const populations = await fetchPopulationInsee();
      // Pour l'instant, on recharge simplement les données locales
      const { communes } = get();
      await new Promise((resolve) => setTimeout(resolve, 800));
      set({ communes, filteredCommunes: communes, loadingINSEE: false });
      console.log("Données INSEE actualisées (simulation)");
    } catch (e) {
      console.error("Erreur INSEE:", e);
      set({ loadingINSEE: false });
    }
  }
}));
