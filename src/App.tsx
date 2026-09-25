import { useState } from "react";
import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import { ExportButton } from "./components/ExportButton";
import { StatsGrid } from "./components/StatsGrid";
import { MapView } from "./components/MapView";
import { ChartsPanel } from "./components/ChartsPanel";
import { DataTable } from "./components/DataTable";
import { MarketModule } from "./components/MarketModule";
import { SocietyModule } from "./components/SocietyModule";
import { EconomyModule } from "./components/EconomyModule";
import { RiskModule } from "./components/RiskModule";
import { useFilterStore } from "./stores/filterStore";

type Tab = "overview" | "market" | "society" | "economy" | "risks";

const TABS: { key: Tab; label: string }[] = [
  { key: "overview", label: "Vue d'ensemble" },
  { key: "market",   label: "Marché & Foncier" },
  { key: "society",  label: "Société" },
  { key: "economy",  label: "Économie & Emploi" },
  { key: "risks",    label: "Risques & Environnement" }
];

export default function App() {
  const [tab, setTab] = useState<Tab>("overview");
  const refreshFromINSEE = useFilterStore((s) => s.refreshFromINSEE);

  return (
    <>
      <a href="#main-content" className="skip-link">Aller au contenu principal</a>
      <Header />
      <main id="main-content" className="container">
        <h1 style={{ color: "var(--blue-france)" }}>
          Observatoire Foncier — La Réunion 2025
        </h1>
        <p style={{ color: "var(--grey-600)" }}>
          24 communes · 5 modules · Sources : INSEE RP 2023, ARMOS OI 2026, Notaires 2026.
        </p>

        <div style={{ display: "flex", gap: "12px", alignItems: "flex-start", marginBottom: "20px", flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: "300px" }}>
            <SearchBar />
          </div>
          <ExportButton />
          <button
            onClick={refreshFromINSEE}
            aria-label="Rafraîchir les populations depuis l'INSEE"
            style={{
              padding: "10px 20px",
              background: "var(--green)",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: 500,
              fontFamily: "var(--font)"
            }}
          >
            🔄 Rafraîchir INSEE
          </button>
        </div>

        <div className="tabs" role="tablist" aria-label="Modules d'analyse">
          {TABS.map((t) => (
            <button
              key={t.key}
              role="tab"
              aria-selected={tab === t.key}
              aria-controls={`panel-${t.key}`}
              onClick={() => setTab(t.key)}
              className={`tab-btn ${tab === t.key ? "active" : ""}`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === "overview" && (
          <div role="tabpanel" id="panel-overview">
            <StatsGrid />
            <div className="grid-2">
              <MapView />
              <ChartsPanel />
            </div>
            <div style={{ marginTop: "20px" }}>
              <DataTable />
            </div>
          </div>
        )}
        {tab === "market"  && <div role="tabpanel" id="panel-market"><MarketModule /></div>}
        {tab === "society" && <div role="tabpanel" id="panel-society"><SocietyModule /></div>}
        {tab === "economy" && <div role="tabpanel" id="panel-economy"><EconomyModule /></div>}
        {tab === "risks"   && <div role="tabpanel" id="panel-risks"><RiskModule /></div>}
      </main>
    </>
  );
}
