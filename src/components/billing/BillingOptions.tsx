import React, { useState } from 'react';
import { PhoneIcon, ChatBubbleLeftRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

interface BillingOptionsProps {
  phoneNumber: string;
  orderTotal: number;
  orderItems: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;
}

export default function BillingOptions({ phoneNumber, orderTotal, orderItems }: BillingOptionsProps) {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const generateWhatsAppMessage = () => {
    const items = orderItems
      .map(item => `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`)
      .join('\n');
    
    return `Your Dukan Order Summary:\n\n${items}\n\nTotal: $${orderTotal.toFixed(2)}\n\nThank you for shopping with us!`;
  };

  const whatsAppUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(generateWhatsAppMessage())}`;

  const handleSMS = async () => {
    setIsSending(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSending(false);
    setIsSent(true);
    setTimeout(() => setIsSent(false), 3000);
  };

  return (
    <div className="mt-8 border-t border-gray-200 pt-8 animate-fade-in">
      <h3 className="text-lg font-medium text-gray-900">Send Bill To</h3>
      <div className="mt-4 space-y-4">
        <div className="flex items-center justify-between rounded-lg border border-gray-200 p-4 hover:border-primary-500 transition-colors duration-200">
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <PhoneIcon className="h-5 w-5 text-primary-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">{phoneNumber}</p>
              <p className="text-sm text-gray-500">Your registered phone number</p>
            </div>
          </div>
          <div className="flex space-x-3">
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 transition-all duration-200"
            >
              <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Send via WhatsApp
            </a>
            <button
              type="button"
              onClick={handleSMS}
              disabled={isSending || isSent}
              className={`inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 ${
                isSent
                  ? 'bg-green-600 cursor-default'
                  : isSending
                  ? 'bg-gray-400 cursor-wait'
                  : 'bg-primary-600 hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600'
              }`}
            >
              {isSent ? (
                <>
                  <CheckCircleIcon className="h-5 w-5 mr-2" />
                  Sent
                </>
              ) : (
                <>
                  <ChatBubbleLeftRightIcon className="h-5 w-5 mr-2" />
                  {isSending ? 'Sending...' : 'Send via SMS'}
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 