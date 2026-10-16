export default function LineageGraph() {
  return (
    <svg
      viewBox="0 0 460 210"
      className="lineage"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker
          id="arrow"
          markerWidth="9"
          markerHeight="9"
          refX="7"
          refY="4.5"
          orient="auto"
        >
          <path d="M0,0 L9,4.5 L0,9 Z" fill="var(--muted)" />
        </marker>
      </defs>

      <g className="lineage__edges" markerEnd="url(#arrow)">
        <line x1="124" y1="37" x2="172" y2="37" />
        <line x1="284" y1="37" x2="332" y2="37" />
        <line x1="230" y1="58" x2="230" y2="146" />
        <line x1="124" y1="171" x2="172" y2="171" />
      </g>

      <g className="lineage__node">
        <rect x="16" y="16" width="108" height="42" />
        <text x="70" y="42">clientes</text>
      </g>
      <g className="lineage__node">
        <rect x="176" y="16" width="108" height="42" />
        <text x="230" y="42">pedidos</text>
      </g>
      <g className="lineage__node">
        <rect x="336" y="16" width="108" height="42" />
        <text x="390" y="42">pagos</text>
      </g>
      <g className="lineage__node">
        <rect x="16" y="150" width="108" height="42" />
        <text x="70" y="176">productos</text>
      </g>
      <g className="lineage__node lineage__node--hit">
        <rect x="176" y="150" width="108" height="42" />
        <text x="230" y="176">líneas</text>
      </g>
    </svg>
  );
}
