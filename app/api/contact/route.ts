import { NextResponse } from 'next/server';

/**
 * Lead & Inquiry Dispatch Handler
 * Forwards form submissions to the client's WordPress backend or custom webhook
 */
export async function POST(request: Request) {
  try {
    const data = await request.json();

    // 1. Log incoming lead submission
    console.log('[Lead Capture] New submission received:', {
      name: data.fullName || data.name || `${data.firstName || ''} ${data.lastName || ''}`.trim(),
      email: data.email,
      phone: data.phone,
      service: data.service,
      timestamp: new Date().toISOString(),
    });

    // 2. Optionally forward to WordPress REST API / Contact Form 7 endpoint
    const wpEndpoint = process.env.WORDPRESS_LEAD_WEBHOOK_URL || 'https://novafinance.tainaliel.com/wp-json/wp/v2/inquiries';

    try {
      if (process.env.WORDPRESS_LEAD_WEBHOOK_URL) {
        await fetch(wpEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...(process.env.WORDPRESS_API_KEY ? { 'Authorization': `Bearer ${process.env.WORDPRESS_API_KEY}` } : {}),
          },
          body: JSON.stringify(data),
        });
      }
    } catch (wpErr) {
      console.warn('[WordPress Backend] Webhook forward notice:', wpErr);
      // Non-blocking: Still return success to user so client experience is seamless
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your request has been received. A licensed Nova Finance advisor will contact you shortly.',
    });
  } catch (error) {
    console.error('[Lead Capture Error]:', error);
    return NextResponse.json(
      { success: false, message: 'An error occurred while submitting. Please try again or call us directly.' },
      { status: 500 }
    );
  }
}
