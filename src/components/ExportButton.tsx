import { useFilterStore } from "../stores/filterStore";

export function ExportButton() {
  const communes = useFilterStore((s) => s.filteredCommunes);

  function exportCSV() {
    let csv = "\uFEFF";
    csv += "Commune;Région;Population;Parc social;Part LS (%);Prix médian (€/m²);Évolution 1 an (%)\n";
    communes.forEach((c) => {
      csv += `${c.name};${c.region};${c.population};${c.parcSocial};${c.partLogementsSociaux};${c.prixMedian ?? "N/D"};${c.evolutionPrix1an ?? "N/D"}\n`;
    });
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `observatoire-foncier-${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
  }

  return (
    <button
      onClick={exportCSV}
      aria-label={`Exporter les ${communes.length} communes en CSV`}
      style={{
        padding: "10px 20px",
        background: "var(--blue-france)",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "14px",
        fontWeight: 500,
        fontFamily: "var(--font)",
        whiteSpace: "nowrap"
      }}
    >
      ⬇ Exporter CSV ({communes.length})
    </button>
  );
}
