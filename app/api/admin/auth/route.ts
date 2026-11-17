import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const cookieHeader = request.headers.get('cookie') || '';
  const isAuthenticated = cookieHeader.includes('nova_admin_session=authenticated');
  return NextResponse.json({ authenticated: isAuthenticated });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { password } = body;

    const expectedPassword = (process.env.ADMIN_PASSWORD || 'nova2026').trim();

    if (password && password.trim() === expectedPassword) {
      const response = NextResponse.json({
        success: true,
        message: 'Authenticated successfully',
      });

      // Secure HTTP-only cookie
      response.cookies.set('nova_admin_session', 'authenticated', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24 * 7, // 7 days
      });

      return response;
    }

    return NextResponse.json(
      { success: false, message: 'Incorrect password. Please try again.' },
      { status: 401 }
    );
  } catch (error) {
    console.error('[Admin Auth Error]:', error);
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}

export async function DELETE() {
  const response = NextResponse.json({ success: true, message: 'Logged out' });
  response.cookies.delete('nova_admin_session');
  return response;
}
