import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const basicAuth = req.headers.get('authorization');

  // Pull credentials from Vercel environment variables, or fallback to default
  const validUser = process.env.ADMIN_USER || 'admin';
  const validPassword = process.env.ADMIN_PASSWORD || 'nova@2026!secure';

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1];
    if (authValue) {
      try {
        const decoded = atob(authValue);
        const [user, pwd] = decoded.split(':');

        if (user === validUser && pwd === validPassword) {
          return NextResponse.next();
        }
      } catch (e) {
        console.warn('[Admin Middleware Auth Notice]:', e);
      }
    }
  }

  return new NextResponse('Authentication required to access Nova Administration Desk', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Nova Admin Area"',
    },
  });
}

export const config = {
  matcher: ['/admin', '/admin/:path*', '/api/admin/:path*'],
};
