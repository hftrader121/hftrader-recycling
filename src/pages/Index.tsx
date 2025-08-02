import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { 
  Recycle, 
  Truck, 
  DollarSign, 
  Clock, 
  ShieldCheck, 
  Leaf,
  Car,
  Zap,
  Wrench,
  Home as HomeIcon
} from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import scrapCollection from "@/assets/scrap-collection.jpg";

const Index = () => {
  const navigate = useNavigate();
  const [typedText, setTypedText] = useState("");
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  
  const services = [
    "Iron & Steel Scrap",
    "Old AC Units", 
    "Copper Wires",
    "Brass Items",
    "Electric Cables",
    "Scrap Vehicles",
    "Office Furniture"
  ];

  const stats = [
    { label: "Years of Experience", value: "50+", icon: ShieldCheck },
    { label: "Tons Recycled", value: "10,000+", icon: Recycle },
    { label: "Happy Customers", value: "5,000+", icon: DollarSign },
    { label: "Cities Served", value: "25+", icon: Truck }
  ];

  const serviceCards = [
    {
      icon: Car,
      title: "Vehicle Scrap",
      description: "Old cars, bikes, scooters - we handle all vehicle disposal",
      color: "text-blue-600"
    },
    {
      icon: Zap,
      title: "Electronic Waste",
      description: "ACs, cables, electronic components recycling",
      color: "text-yellow-600"
    },
    {
      icon: Wrench,
      title: "Metal Scrap",
      description: "Iron, copper, brass, aluminum - all metal types",
      color: "text-red-600"
    },
    {
      icon: HomeIcon,
      title: "Office Items",
      description: "Furniture, equipment, and office waste disposal",
      color: "text-green-600"
    }
  ];

  // Typewriter effect
  useEffect(() => {
    const currentService = services[currentServiceIndex];
    let currentCharIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (currentCharIndex <= currentService.length) {
        setTypedText(currentService.slice(0, currentCharIndex));
        currentCharIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentServiceIndex((prev) => (prev + 1) % services.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentServiceIndex, services]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            H.F Traders
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-white/90">
            "Turning Waste into Worth Since 1974"
          </p>
          
          {/* Typewriter Effect */}
          <div className="text-2xl md:text-3xl mb-8 h-16 flex items-center justify-center">
            <span className="text-accent">We Buy: </span>
            <span className="ml-2 border-r-2 border-accent animate-pulse min-w-[300px] text-left">
              {typedText}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => navigate("/sell-scrap")}
            >
              <Recycle className="mr-2" size={24} />
              Sell Scrap Now
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => window.open("tel:+919958654732")}
            >
              <Clock className="mr-2" size={24} />
              Get Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center bg-gradient-card shadow-card hover:shadow-eco transition-all duration-300">
                <CardContent className="p-6">
                  <stat.icon size={48} className="mx-auto mb-4 text-primary" />
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We handle all types of scrap with professional service and best market rates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceCards.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-eco transition-all duration-300 hover:scale-105 cursor-pointer bg-gradient-card"
                onClick={() => navigate("/services")}
              >
                <CardContent className="p-6 text-center">
                  <service.icon size={64} className={`mx-auto mb-4 ${service.color} group-hover:scale-110 transition-transform`} />
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="cta" 
              size="lg" 
              onClick={() => navigate("/services")}
              className="px-8 py-6 text-lg"
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why Choose H.F Traders?</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground p-3 rounded-full">
                    <Truck size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Free Pickup Service</h3>
                    <p className="text-muted-foreground">We come to your location for hassle-free scrap collection</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-secondary text-secondary-foreground p-3 rounded-full">
                    <DollarSign size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Best Market Rates</h3>
                    <p className="text-muted-foreground">Competitive pricing and instant payment for your scrap</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-accent text-accent-foreground p-3 rounded-full">
                    <Leaf size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Eco-Friendly Process</h3>
                    <p className="text-muted-foreground">Sustainable recycling methods for environmental protection</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={scrapCollection} 
                alt="Scrap Collection" 
                className="rounded-lg shadow-eco w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-glow">
                <div className="text-2xl font-bold">50+ Years</div>
                <div className="text-sm">of Trust & Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Sell Your Scrap?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get the best value for your scrap with our professional service
          </p>
          <Button 
            variant="secondary" 
            size="lg" 
            className="text-lg px-8 py-6"
            onClick={() => navigate("/sell-scrap")}
          >
            Get Started Today
          </Button>
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Index;
