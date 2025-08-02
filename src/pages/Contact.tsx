import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Navigation as NavigationIcon,
  Star
} from "lucide-react";

const Contact = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/919958654732?text=Hi%20I%20want%20to%20sell%20scrap", "_blank");
  };

  const openMaps = () => {
    window.open("https://maps.google.com/maps?q=Sanjay+Camp,+Singapore+Embassy,+Chanakyapuri,+New+Delhi,+Delhi+110021", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Get in touch with us for the best scrap prices and professional service. 
            We're here to help you turn your waste into worth.
          </p>
        </div>
      </section>

      


      
      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            
            {/* Phone */}
            <Card className="text-center bg-gradient-card shadow-card hover:shadow-eco transition-all duration-300">
              <CardContent className="p-8">
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Call Us</h3>
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-primary">9958654732</p>
                  <p className="text-lg font-semibold text-primary">9015956211</p>
                  <p className="text-sm text-muted-foreground">Available 9 AM - 7 PM</p>
                </div>
                <Button 
                  className="mt-4 w-full" 
                  onClick={() => window.open("tel:+919958654732")}
                >
                  Call Now
                </Button>
              </CardContent>
            </Card>

            {/* WhatsApp */}
            <Card className="text-center bg-gradient-card shadow-card hover:shadow-eco transition-all duration-300">
              <CardContent className="p-8">
                <div className="bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">WhatsApp</h3>
                <p className="text-muted-foreground mb-4">
                  Quick response and instant quotes via WhatsApp
                </p>
                <Button 
                  className="mt-4 w-full bg-green-500 hover:bg-green-600" 
                  onClick={openWhatsApp}
                >
                  Chat on WhatsApp
                </Button>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="text-center bg-gradient-card shadow-card hover:shadow-eco transition-all duration-300">
              <CardContent className="p-8">
                <div className="bg-secondary text-secondary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Email</h3>
                <p className="text-lg font-semibold text-primary mb-2">hftraders121@gmail.com</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Send us details and photos of your scrap
                </p>
                <Button 
                  variant="secondary" 
                  className="mt-4 w-full"
                  onClick={() => window.open("mailto:hftraders121@gmail.com")}
                >
                  Send Email
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Location & Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Address Card */}
            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MapPin className="text-primary" />
                  Our Location
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">H.F Traders</h4>
                  <p className="text-muted-foreground">
                    Sanjay Camp, Singapore Embassy, <br />
                    Chanakyapuri, New Delhi, <br />
                    Delhi 110021
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="text-primary mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold mb-2">Business Hours</h4>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                      <p>Sunday: 10:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button onClick={openMaps} className="flex-1">
                    <NavigationIcon className="mr-2" size={16} />
                    Get Directions
                  </Button>
                  <Button variant="outline" onClick={openWhatsApp}>
                    <MessageCircle className="mr-2" size={16} />
                    WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="bg-gradient-card shadow-card overflow-hidden">
              <div className="h-full min-h-[400px] bg-muted flex items-center justify-center relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='16' fill='%236b7280'%3EClick to view map%3C/text%3E%3C/svg%3E")`
                  }}
                  onClick={openMaps}
                >
                  <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                      <MapPin size={48} className="mx-auto mb-3 text-primary" />
                      <p className="font-semibold text-primary">Chanakyapuri, New Delhi</p>
                      <p className="text-sm text-muted-foreground">Click to open in Google Maps</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Service Areas</h2>
            <p className="text-muted-foreground">We provide pickup services across Delhi NCR</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "Central Delhi", "South Delhi", "North Delhi", 
              "East Delhi", "West Delhi", "New Delhi",
              "Gurgaon", "Noida", "Faridabad",
              "Ghaziabad", "Greater Noida", "Dwarka"
            ].map((area) => (
              <Card key={area} className="text-center p-4 bg-gradient-card">
                <p className="font-medium">{area}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-muted-foreground">50 years of trust and satisfied customers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                location: "Chanakyapuri",
                text: "Excellent service! They gave me the best price for my old AC units and picked them up the same day.",
                rating: 5
              },
              {
                name: "Priya Sharma", 
                location: "Defence Colony",
                text: "Very professional team. Fair pricing and quick payment. Highly recommended for scrap dealing.",
                rating: 5
              },
              {
                name: "Amit Singh",
                location: "Dwarka",
                text: "Been dealing with H.F Traders for years. Always reliable and honest in their dealings.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-gradient-card shadow-card">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
<section className="py-20 bg-gradient-to-r from-[#e0f7fa] to-[#fce4ec] text-gray-800">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
    <p className="text-xl mb-8 opacity-90">
      Contact us today for a free quote and same-day pickup service
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button 
        variant="secondary" 
        size="lg"
        onClick={() => window.open("tel:+919958654732")}
        className="gap-2 bg-white text-gray-800 hover:bg-gray-100"
      >
        <Phone size={20} />
        Call Now
      </Button>
      <Button 
        variant="outline" 
        size="lg"
        onClick={openWhatsApp}
        className="gap-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white"
      >
        <MessageCircle size={20} />
        WhatsApp
      </Button>
    </div>
  </div>
</section>


      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Contact;