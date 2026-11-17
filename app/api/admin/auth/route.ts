import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { password } = body;

    // Checks Vercel Environment Variable ADMIN_PASSWORD (fallback: nova2026)
    const expectedPassword = process.env.ADMIN_PASSWORD || 'nova2026';

    if (password && password.trim() === expectedPassword.trim()) {
      return NextResponse.json({
        success: true,
        message: 'Authenticated successfully',
      });
    }

    return NextResponse.json(
      { success: false, message: 'Incorrect password. Please try again.' },
      { status: 401 }
    );
  } catch (error) {
    console.error('[Admin Auth API Error]:', error);
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}
