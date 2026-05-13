export default function Home() {
  return (
    <main style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <div style={{ textAlign: 'center', maxWidth: '800px' }}>
        <h1 style={{ 
          fontSize: '3rem', 
          marginBottom: '1rem',
          background: 'linear-gradient(135deg, #ff6b00 0%, #ff9500 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          🟠 ACoolECOSYSTEM
        </h1>
        <p style={{ fontSize: '1.25rem', marginBottom: '2rem', color: '#999' }}>
          A trust-aligned, AI-native operating network for founders, creators, communities, and organizations.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a 
            href="https://github.com/ACoolNerd/ACoolECOSYSTEM" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              padding: '0.75rem 1.5rem',
              background: '#ff6b00',
              color: '#fff',
              borderRadius: '8px',
              fontWeight: 'bold'
            }}
          >
            View on GitHub
          </a>
          <a 
            href="http://www.ACoolNERD.com" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              padding: '0.75rem 1.5rem',
              background: 'transparent',
              color: '#ff6b00',
              border: '2px solid #ff6b00',
              borderRadius: '8px',
              fontWeight: 'bold'
            }}
          >
            ACoolNERD.com
          </a>
        </div>
        <div style={{ marginTop: '3rem', color: '#666', fontSize: '0.875rem' }}>
          <p>Build in public. Protect what matters. Execute with precision.</p>
        </div>
      </div>
    </main>
  )
}
