import { useState, useMemo } from "react";
import { useFilterStore } from "../stores/filterStore";

export function SearchBar() {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const communes = useFilterStore((s) => s.communes);
  const selectCommune = useFilterStore((s) => s.selectCommune);

  const suggestions = useMemo(() => {
    if (!query || query.length < 2) return [];
    const q = query.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return communes
      .filter((c) =>
        c.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(q)
      )
      .slice(0, 6);
  }, [query, communes]);

  return (
    <div style={{ position: "relative" }}>
      <input
        type="search"
        placeholder="🔍 Rechercher une commune…"
        value={query}
        onChange={(e) => { setQuery(e.target.value); setShowSuggestions(true); }}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
        aria-label="Rechercher une commune"
        aria-autocomplete="list"
        style={{
          width: "100%",
          padding: "12px 16px",
          fontSize: "15px",
          border: "2px solid var(--blue-france)",
          borderRadius: "4px",
          fontFamily: "var(--font)",
          boxSizing: "border-box"
        }}
      />
      {showSuggestions && suggestions.length > 0 && (
        <ul
          role="listbox"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "white",
            border: "1px solid var(--grey-200)",
            borderRadius: "4px",
            marginTop: "4px",
            padding: 0,
            listStyle: "none",
            zIndex: 1000,
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            maxHeight: "320px",
            overflowY: "auto"
          }}
        >
          {suggestions.map((c) => (
            <li
              key={c.code}
              role="option"
              onClick={() => { selectCommune(c.name); setQuery(c.name); setShowSuggestions(false); }}
              style={{
                padding: "12px 16px",
                cursor: "pointer",
                borderBottom: "1px solid var(--grey-200)",
                fontFamily: "var(--font)"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--blue-france-light)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "white")}
            >
              <strong>{c.name}</strong>
              <span style={{ color: "var(--grey-600)", marginLeft: "8px", fontSize: "13px" }}>
                {c.population.toLocaleString("fr-FR")} hab. · {c.parcSocial.toLocaleString("fr-FR")} LS
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
