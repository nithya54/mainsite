export const config = {
  runtime: 'edge',
};

export default function handler(request) {
  const url = new URL(request.url);
  const pathname = url.pathname;
  
  console.log('Edge function called for:', pathname);
  
  // Handle specific routing if needed
  if (pathname.startsWith('/app1')) {
    const targetUrl = `https://myvercelwebsite-dusky.vercel.app${pathname.replace('/app1', '')}`;
    return fetch(targetUrl, {
      method: request.method,
      headers: request.headers,
      body: request.body,
    });
  }
  
  if (pathname.startsWith('/app2')) {
    const targetUrl = `https://taskapp-sooty.vercel.app${pathname.replace('/app2', '')}`;
    return fetch(targetUrl, {
      method: request.method,
      headers: request.headers,
      body: request.body,
    });
  }
  
  return new Response('Not found', { status: 404 });
}