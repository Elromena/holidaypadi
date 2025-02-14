const MAKE_WEBHOOK_URL = 'https://hook.eu2.make.com/drp96i2u5dwfghmj06mpiyseaouak47o';

interface WebhookPayload {
  transaction?: {
    amount: number;
    currency: string;
    status: string;
    reference: string;
    timestamp: string;
  };
  customer: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    partySize: 'single' | 'couple';
    location: {
      needsTransport: boolean;
      originCity: string;
      wantsTransportQuote: boolean;
    };
  };
  trip: {
    destination: {
      id: string;
      name: string;
    };
    dates?: {
      startDate: string;
      endDate: string;
      duration: number;
    };
    package?: {
      type: 'regular' | 'full_package';
      attractions: Array<{
        id: string;
        name: string;
        price: number;
      }>;
      accommodation?: {
        id: string;
        name: string;
        price: number;
        nights?: number;
      };
    };
  };
  pricing?: {
    subtotal: number;
    curationFee: number;
    total: number;
    breakdown: {
      attractions: number;
      accommodation: number;
      fees: number;
    };
  };
  stage: 'bio_completed' | 'payment_initiated' | 'payment_completed' | 'payment_failed';
}

export async function sendWebhook(payload: WebhookPayload) {
  try {
    const response = await fetch(MAKE_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Webhook failed (${response.status}): ${errorText || response.statusText}`);
    }

    // make.com might not always return JSON, so handle both cases
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      return await response.json();
    }
    
    // If not JSON, just return the success status
    return { success: true };
  } catch (error) {
    // Log the full error details for debugging
    console.error('Error sending webhook:', {
      error,
      payload,
      url: MAKE_WEBHOOK_URL
    });
    throw error;
  }
}