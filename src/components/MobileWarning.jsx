export default function MobileWarning() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'hsl(var(--bg))',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        zIndex: 9999,
        padding: '2rem',
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: 400 }}>
        <h1
          style={{
            fontFamily: "'Instrument Serif',serif",
            fontStyle: 'italic',
            fontSize: '2.5rem',
            marginBottom: '1rem',
            background: 'linear-gradient(90deg,var(--accent-from),var(--accent-to))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            color: '#fff',
          }}
        >
          Ajey
        </h1>
        
        <p
          style={{
            color: 'hsl(var(--text))',
            fontSize: '1.1rem',
            marginBottom: '2rem',
            lineHeight: 1.6,
            fontFamily: "'Inter',sans-serif",
          }}
        >
          Best viewed on desktop for the full cinematic experience
        </p>

        <div
          style={{
            fontSize: '0.95rem',
            color: 'hsl(var(--muted))',
            fontFamily: "'Inter',sans-serif",
            marginBottom: '2rem',
            lineHeight: 1.8,
          }}
        >
          <p>This portfolio features:</p>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: '1rem 0 0 0',
            }}
          >
            <li>✓ Cinematic scroll animations</li>
            <li>✓ Full-screen video showreels</li>
            <li>✓ Interactive portfolio gallery</li>
            <li>✓ Smooth parallax effects</li>
          </ul>
        </div>

        <div
          style={{
            display: 'flex',
            gap: '1rem',
            flexDirection: 'column',
            marginTop: '2rem',
          }}
        >
          <a
            href={window.location.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'linear-gradient(90deg,var(--accent-from),var(--accent-to))',
              color: '#000',
              border: 'none',
              padding: '0.9rem 1.8rem',
              borderRadius: 12,
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: "'Inter',sans-serif",
              transition: 'transform 0.2s',
              textDecoration: 'none',
              display: 'block',
              textAlign: 'center',
            }}
            onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
          >
            Open in Desktop Mode
          </a>
        </div>

        <p
          style={{
            marginTop: '2rem',
            fontSize: '0.85rem',
            color: 'hsl(var(--muted))',
            fontFamily: "'Inter',sans-serif",
          }}
        >
          💡 Rotate your device or switch to desktop for the best experience
        </p>
      </div>
    </div>
  );
}
