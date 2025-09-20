export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui' }}>
      <h1>My Main Site</h1>
      <p>This is the main application.</p>
      
      <div style={{ margin: '2rem 0' }}>
        <h2>Sub Applications:</h2>
        <ul>
          <li><a href="/app1">App 1 - My Website</a></li>
          <li><a href="/app2">App 2 - Task Master</a></li>
        </ul>
      </div>
      
      <div style={{ background: '#f0f0f0', padding: '1rem', marginTop: '2rem' }}>
        <h3>Direct Links (for testing):</h3>
        <ul>
          <li><a href="https://myvercelwebsite-dusky.vercel.app" target="_blank">My Website Direct</a></li>
          <li><a href="https://taskapp-sooty.vercel.app" target="_blank">Task App Direct</a></li>
        </ul>
      </div>
    </div>
  );
}