
import { MessageSquare } from "lucide-react";

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+923162042777";
    const message = "Hi Ahamed! I'd like to get in touch regarding potential opportunities.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 p-4 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
      title="Get In Touch via WhatsApp"
    >
      <MessageSquare className="w-6 h-6" />
    </button>
  );
};

export default WhatsAppFloat;
