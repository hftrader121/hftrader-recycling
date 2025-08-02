import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const FloatingActions = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      {/* WhatsApp Button */}
      <Button
        variant="floating"
        size="icon"
        className="bg-green-500 hover:bg-green-600 shadow-glow w-14 h-14"
        onClick={() => window.open("https://wa.me/919958654732?text=Hi%20I%20want%20to%20sell%20scrap")}
        title="Chat on WhatsApp"
      >
        <MessageCircle size={24} />
      </Button>

      {/* Call Button */}
      <Button
        variant="floating"
        size="icon"
        className="w-14 h-14"
        onClick={() => window.open("tel:+919958654732")}
        title="Call Now"
      >
        <Phone size={24} />
      </Button>
    </div>
  );
};

export default FloatingActions;