import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { 
  Car, 
  Zap, 
  Wrench, 
  Home as HomeIcon,
  Scale,
  IndianRupee,
  Truck
} from "lucide-react";
import scrapIron from "@/assets/scrap-iron.jpg";
import scrapAC from "@/assets/scrap-ac.jpg";
import scrapCopper from "@/assets/scrap-copper.jpg";
import scrapVehicles from "@/assets/scrap-vehicles.jpg";

const Services = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const scrapTypes = [
    {
      id: "iron",
      name: "Scrap Iron",
      category: "metal",
      description: "Old gates, pipes, machinery, iron sheets, construction materials",
      image: scrapIron,
      icon: Wrench,
      priceRange: "₹25-35 per kg",
      color: "bg-orange-500",
      features: ["Free pickup", "Weight-based pricing", "Instant payment"]
    },
    {
      id: "ac",
      name: "Old AC Units",
      category: "electronics",
      description: "Window AC, Split AC, Commercial air conditioning units",
      image: scrapAC,
      icon: Zap,
      priceRange: "₹800-2500 per unit",
      color: "bg-blue-500",
      features: ["Gas recovery", "Component separation", "Eco-friendly disposal"]
    },
    {
      id: "copper",
      name: "Copper (Tamba)",
      category: "metal",
      description: "Copper wires, utensils, coils, pipes, fittings",
      image: scrapCopper,
      icon: Wrench,
      priceRange: "₹400-550 per kg",
      color: "bg-amber-600",
      features: ["High value metal", "Purity testing", "Best market rates"]
    },
    {
      id: "brass",
      name: "Brass (Pital)",
      category: "metal",
      description: "Bathroom fittings, decorative items, brass parts",
      image: scrapCopper,
      icon: Wrench,
      priceRange: "₹250-450 per kg",
      color: "bg-yellow-500",
      features: ["Quality assessment", "Alloy testing", "Fair pricing"]
    },
    {
      id: "cables",
      name: "Electric Cables",
      category: "electronics",
      description: "Mixed electric wires, data cables, power cables",
      image: scrapCopper,
      icon: Zap,
      priceRange: "₹80-150 per kg",
      color: "bg-green-500",
      features: ["Copper recovery", "Wire stripping", "Bulk purchase"]
    },
    {
      id: "vehicles",
      name: "Scrap Vehicles",
      category: "automotive",
      description: "Old scooters, bikes, cars, commercial vehicles",
      image: scrapVehicles,
      icon: Car,
      priceRange: "₹15,00-80,00 per unit",
      color: "bg-red-500",
      features: ["Documentation help", "Towing service", "Legal compliance"]
    },
    {
      id: "office",
      name: "Office Furniture",
      category: "furniture",
      description: "Desks, chairs, workstations, metal cupboards, filing cabinets",
      image: scrapIron,
      icon: HomeIcon,
      priceRange: "₹50-200 per kg",
      color: "bg-purple-500",
      features: ["Bulk pickup", "Office clearance", "Furniture recycling"]
    },
    {
      id: "mixed",
      name: "Mixed Scrap",
      category: "general",
      description: "Household items, e-waste, mixed metal, plastic components",
      image: scrapIron,
      icon: Scale,
      priceRange: "₹5-25 per kg",
      color: "bg-gray-500",
      features: ["Sorting service", "Mixed material", "Convenient pickup"]
    }
  ];

  const categories = [
    { id: "all", name: "All Categories", count: scrapTypes.length },
    { id: "metal", name: "Metal Scrap", count: scrapTypes.filter(s => s.category === "metal").length },
    { id: "electronics", name: "Electronics", count: scrapTypes.filter(s => s.category === "electronics").length },
    { id: "automotive", name: "Automotive", count: scrapTypes.filter(s => s.category === "automotive").length },
    { id: "furniture", name: "Furniture", count: scrapTypes.filter(s => s.category === "furniture").length },
    { id: "general", name: "General", count: scrapTypes.filter(s => s.category === "general").length }
  ];

  const filteredScrap = selectedCategory === "all" 
    ? scrapTypes 
    : scrapTypes.filter(scrap => scrap.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            We buy all types of scrap materials at competitive market rates. 
            Professional service with free pickup and instant payment.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-muted/30 sticky top-16 z-30 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="gap-2"
              >
                {category.name}
                <Badge variant="secondary" className="text-xs">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredScrap.map((scrap) => (
              <Card 
                key={scrap.id} 
                className="group hover:shadow-eco transition-all duration-300 hover:scale-105 bg-gradient-card overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={scrap.image} 
                    alt={scrap.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute top-4 right-4 ${scrap.color} text-white p-2 rounded-full`}>
                    <scrap.icon size={24} />
                  </div>
                  <div className="absolute bottom-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {scrap.priceRange}
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-primary">{scrap.name}</h3>
                  <p className="text-muted-foreground mb-4">{scrap.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {scrap.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button 
                      variant="default" 
                      className="flex-1"
                      onClick={() => navigate("/sell-scrap")}
                    >
                      <Scale className="mr-2" size={16} />
                      Sell Now
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={() => window.open("tel:+919958654732")}
                    >
                      <IndianRupee size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground">Simple 4-step process to sell your scrap</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Contact Us", desc: "Call or fill our form", icon: "📞" },
              { step: "2", title: "Schedule Pickup", desc: "We arrange collection", icon: "📅" },
              { step: "3", title: "Evaluation", desc: "On-site weight & assessment", icon: "⚖️" },
              { step: "4", title: "Payment", desc: "Instant cash payment", icon: "💰" }
            ].map((process, index) => (
              <Card key={index} className="text-center bg-gradient-card">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{process.icon}</div>
                  <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{process.title}</h3>
                  <p className="text-muted-foreground">{process.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<section className="py-20 bg-gradient-to-r from-[#e0f7fa] to-[#fce4ec] text-gray-800">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-4xl font-bold mb-6">Ready to Get the Best Price?</h2>
    <p className="text-xl mb-8 opacity-90">
      Contact us today for a free quote and pickup service
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button 
        variant="secondary" 
        size="lg"
        onClick={() => navigate("/sell-scrap")}
        className="gap-2"
      >
        <Truck size={20} />
        Book Pickup
      </Button>
      <Button 
        variant="outline" 
        size="lg"
        onClick={() => window.open("tel:+919958654732")}
        className="gap-2 bg-transparent border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white"
      >
        <IndianRupee size={20} />
        Get Quote
      </Button>
    </div>
  </div>
</section>


      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Services;