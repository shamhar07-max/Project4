/**
 * WhatsApp contact details, used by the floating button, the offer popup and page links.
 *
 * Set NEXT_PUBLIC_WHATSAPP_NUMBER (international format, digits only) to the real number.
 * Until then a DEMO number is used: +44 7700 900123 sits in the UK Ofcom range reserved
 * for drama and fiction, so it can never reach a real person.
 */
export const DEMO_WHATSAPP_NUMBER = "447700900123";

export const whatsappNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || DEMO_WHATSAPP_NUMBER).replace(/[^\d]/g, "");
export const whatsappIsDemo = whatsappNumber === DEMO_WHATSAPP_NUMBER;

const defaultMessage = process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE || "Hello DigitalBurj, I'd like to talk about ";

export function whatsappHref(message = defaultMessage) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
