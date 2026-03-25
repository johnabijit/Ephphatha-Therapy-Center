import { MessageCircle, Phone } from "lucide-react";

export function StickyCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <a
        href="tel:+919791192699"
        className="w-14 h-14 bg-primary-600 rounded-full flex items-center justify-center shadow-lg hover:bg-primary-700 transition-transform hover:scale-110"
        aria-label="Call Us"
      >
        <Phone className="w-6 h-6 text-white" />
      </a>
      <a
        href="https://wa.me/919791192699"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-transform hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
    </div>
  );
}
