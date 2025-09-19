// pages/api/edge/route.js
export const config = {
  runtime: 'edge',
}

export default function handler(request) {
  const url = new URL(request.url)
  const pathname = url.pathname
  
  if (pathname.startsWith('/app1')) {
    return fetch(`https://myvercelwebsite-dusky.vercel.app${pathname}`)
  }
  
  if (pathname.startsWith('/app2')) {
    return fetch(`https://taskapp-sooty.vercel.app${pathname}`)
  }
  
  return new Response('Not found', { status: 404 })
}