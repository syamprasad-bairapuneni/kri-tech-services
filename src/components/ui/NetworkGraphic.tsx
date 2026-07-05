/**
 * NetworkGraphic — the site's signature visual motif.
 *
 * KRI sits at the center of three groups it connects: businesses that need
 * support, the support/technical team that delivers it, and students who
 * receive education consulting. Rather than a stock illustration, this is
 * drawn as a literal connection map — nodes pulsing gently, lines animating
 * in on load — which mirrors what the company actually does.
 */
export default function NetworkGraphic({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* connecting lines */}
      <g stroke="#3FBDB2" strokeOpacity="0.55" strokeWidth="1.5">
        <line x1="240" y1="240" x2="90" y2="120" strokeDasharray="220" strokeDashoffset="220" className="animate-dash" />
        <line x1="240" y1="240" x2="390" y2="110" strokeDasharray="220" strokeDashoffset="220" className="animate-dash" style={{ animationDelay: "0.15s" }} />
        <line x1="240" y1="240" x2="80" y2="360" strokeDasharray="220" strokeDashoffset="220" className="animate-dash" style={{ animationDelay: "0.3s" }} />
        <line x1="240" y1="240" x2="400" y2="370" strokeDasharray="220" strokeDashoffset="220" className="animate-dash" style={{ animationDelay: "0.45s" }} />
        <line x1="240" y1="240" x2="240" y2="60" strokeDasharray="220" strokeDashoffset="220" className="animate-dash" style={{ animationDelay: "0.6s" }} />
      </g>
      <g stroke="#8FB9E0" strokeOpacity="0.35" strokeWidth="1">
        <line x1="90" y1="120" x2="240" y2="60" />
        <line x1="390" y1="110" x2="240" y2="60" />
        <line x1="80" y1="360" x2="90" y2="120" strokeDasharray="4 6" />
        <line x1="400" y1="370" x2="390" y2="110" strokeDasharray="4 6" />
      </g>

      {/* outer nodes: businesses, support, students, education, network */}
      <circle cx="90" cy="120" r="14" fill="#1D5FA3" />
      <circle cx="390" cy="110" r="14" fill="#17A398" />
      <circle cx="80" cy="360" r="12" fill="#2B74C4" />
      <circle cx="400" cy="370" r="12" fill="#3FBDB2" />
      <circle cx="240" cy="60" r="10" fill="#102A46" />

      {/* pulsing ring accents on outer nodes */}
      <circle cx="90" cy="120" r="14" fill="none" stroke="#1D5FA3" strokeWidth="2" className="animate-pulseDot origin-center" />
      <circle cx="390" cy="110" r="14" fill="none" stroke="#17A398" strokeWidth="2" className="animate-pulseDot origin-center" style={{ animationDelay: "0.4s" }} />

      {/* center node: KRI */}
      <circle cx="240" cy="240" r="34" fill="#102A46" />
      <circle cx="240" cy="240" r="34" fill="none" stroke="#3FBDB2" strokeWidth="2" className="animate-pulseDot origin-center" style={{ animationDelay: "0.8s" }} />
      <text
        x="240"
        y="245"
        textAnchor="middle"
        fontSize="18"
        fontWeight="700"
        fill="#ffffff"
        fontFamily="var(--font-display), sans-serif"
      >
        KRI
      </text>
    </svg>
  );
}
