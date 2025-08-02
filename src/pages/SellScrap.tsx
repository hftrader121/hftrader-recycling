import { useState } from "react";
import { useForm } from "react-hook-form";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { 
  Upload, 
  Calendar, 
  MapPin, 
  Phone, 
  Mail, 
  Truck, 
  CheckCircle,
  Clock,
  DollarSign
} from "lucide-react";

interface FormData {
  fullName: string;
  mobile: string;
  address: string;
  scrapType: string;
  description: string;
  preferredDate: string;
  preferredTime: string;
  acceptTerms: boolean;
}

const SellScrap = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<FormData>();

  const scrapTypes = [
    "Scrap Iron/Steel",
    "Old AC Units",
    "Copper Wires/Items",
    "Brass Items",
    "Electric Cables",
    "Scrap Vehicles",
    "Office Furniture",
    "Mixed Scrap",
    "Other (Please specify)"
  ];

  const timeSlots = [
    "9:00 AM - 11:00 AM",
    "11:00 AM - 1:00 PM", 
    "1:00 PM - 3:00 PM",
    "3:00 PM - 5:00 PM",
    "5:00 PM - 7:00 PM"
  ];

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    if (files.length + selectedImages.length > 5) {
      toast.error("Maximum 5 images allowed");
      return;
    }
    setSelectedImages(prev => [...prev, ...files]);
  };

  const removeImage = (index: number) => {
    setSelectedImages(prev => prev.filter((_, i) => i !== index));
  };

  const onSubmit = async (data: FormData) => {
    if (!data.acceptTerms) {
      toast.error("Please accept terms and conditions");
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real implementation, you would send the data to your backend
      console.log("Form Data:", data);
      console.log("Images:", selectedImages);
      
      toast.success("Request submitted successfully!");
      setIsSubmitted(true);
    } catch (error) {
      toast.error("Failed to submit request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-20">
          <Card className="max-w-2xl mx-auto text-center bg-gradient-card shadow-eco">
            <CardContent className="p-12">
              <CheckCircle size={80} className="mx-auto mb-6 text-green-500" />
              <h1 className="text-3xl font-bold mb-4 text-primary">Thank You!</h1>
              <p className="text-lg text-muted-foreground mb-6">
                Your scrap pickup request has been submitted successfully.
              </p>
              <div className="bg-muted p-6 rounded-lg mb-6">
                <h3 className="font-semibold mb-3">What happens next?</h3>
                <div className="space-y-2 text-sm text-left">
                  <div className="flex items-center gap-3">
                    <Clock size={16} className="text-primary" />
                    <span>We'll contact you within 2 hours</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Truck size={16} className="text-primary" />
                    <span>Schedule convenient pickup time</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <DollarSign size={16} className="text-primary" />
                    <span>On-site evaluation and instant payment</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 justify-center">
                <Button onClick={() => setIsSubmitted(false)}>
                  Submit Another Request
                </Button>
                <Button variant="outline" onClick={() => window.location.href = "/"}>
                  Back to Home
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Sell Your Scrap</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Get the best price for your scrap with our professional pickup service. 
            Fill out the form below and we'll contact you within 2 hours.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Main Form */}
              <div className="lg:col-span-2">
                <Card className="bg-gradient-card shadow-card">
                  <CardHeader>
                    <CardTitle className="text-2xl">Scrap Pickup Request</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      {/* Personal Information */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="fullName">Full Name *</Label>
                          <Input
                            id="fullName"
                            {...register("fullName", { required: "Full name is required" })}
                            className="mt-1"
                            placeholder="Enter your full name"
                          />
                          {errors.fullName && (
                            <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
                          )}
                        </div>
                        
                        <div>
                          <Label htmlFor="mobile">Mobile Number *</Label>
                          <Input
                            id="mobile"
                            {...register("mobile", { 
                              required: "Mobile number is required",
                              pattern: {
                                value: /^[6-9]\d{9}$/,
                                message: "Enter a valid 10-digit mobile number"
                              }
                            })}
                            className="mt-1"
                            placeholder="Enter mobile number"
                          />
                          {errors.mobile && (
                            <p className="text-red-500 text-sm mt-1">{errors.mobile.message}</p>
                          )}
                        </div>
                      </div>

                      {/* Address */}
                      <div>
                        <Label htmlFor="address">Pickup Address *</Label>
                        <Textarea
                          id="address"
                          {...register("address", { required: "Address is required" })}
                          className="mt-1"
                          placeholder="Enter complete pickup address with landmarks"
                          rows={3}
                        />
                        {errors.address && (
                          <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
                        )}
                      </div>

                      {/* Scrap Type */}
                      <div>
                        <Label>Type of Scrap *</Label>
                        <Select onValueChange={(value) => setValue("scrapType", value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select scrap type" />
                          </SelectTrigger>
                          <SelectContent>
                            {scrapTypes.map((type) => (
                              <SelectItem key={type} value={type}>{type}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.scrapType && (
                          <p className="text-red-500 text-sm mt-1">Please select scrap type</p>
                        )}
                      </div>

                      {/* Description */}
                      <div>
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                          id="description"
                          {...register("description")}
                          className="mt-1"
                          placeholder="Brief description of items (approximate quantity, condition, etc.)"
                          rows={3}
                        />
                      </div>

                      {/* Image Upload */}
                      <div>
                        <Label>Upload Images (Optional)</Label>
                        <div className="mt-2">
                          <input
                            type="file"
                            multiple
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                            id="imageUpload"
                          />
                          <label htmlFor="imageUpload">
                            <div className="border-2 border-dashed border-border rounded-lg p-6 text-center cursor-pointer hover:border-primary transition-colors">
                              <Upload size={32} className="mx-auto mb-2 text-muted-foreground" />
                              <p className="text-sm text-muted-foreground">
                                Click to upload images (Max 5 files)
                              </p>
                            </div>
                          </label>
                          
                          {selectedImages.length > 0 && (
                            <div className="grid grid-cols-3 gap-2 mt-4">
                              {selectedImages.map((file, index) => (
                                <div key={index} className="relative">
                                  <img
                                    src={URL.createObjectURL(file)}
                                    alt={`Upload ${index + 1}`}
                                    className="w-full h-20 object-cover rounded border"
                                  />
                                  <button
                                    type="button"
                                    onClick={() => removeImage(index)}
                                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
                                  >
                                    ×
                                  </button>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Preferred Date & Time */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="preferredDate">Preferred Date</Label>
                          <Input
                            id="preferredDate"
                            type="date"
                            {...register("preferredDate")}
                            className="mt-1"
                            min={new Date().toISOString().split('T')[0]}
                          />
                        </div>
                        
                        <div>
                          <Label>Preferred Time</Label>
                          <Select onValueChange={(value) => setValue("preferredTime", value)}>
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="Select time slot" />
                            </SelectTrigger>
                            <SelectContent>
                              {timeSlots.map((slot) => (
                                <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      {/* Terms & Conditions */}
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="acceptTerms"
                          {...register("acceptTerms", { required: true })}
                        />
                        <Label htmlFor="acceptTerms" className="text-sm leading-relaxed">
                          I accept the terms and conditions and agree to the pickup service. 
                          I understand that final pricing will be determined based on actual 
                          weight and quality assessment.
                        </Label>
                      </div>
                      {errors.acceptTerms && (
                        <p className="text-red-500 text-sm">Please accept terms and conditions</p>
                      )}

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        className="w-full py-6 text-lg"
                        disabled={isSubmitting}
                        variant="hero"
                      >
                        {isSubmitting ? (
                          <>Submitting Request...</>
                        ) : (
                          <>
                            <Truck className="mr-2" size={20} />
                            Submit Pickup Request
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar Info */}
              <div className="space-y-6">
                <Card className="bg-gradient-card shadow-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Quick Contact</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone size={20} className="text-primary" />
                      <div>
                        <p className="font-medium">Call Now</p>
                        <p className="text-sm text-muted-foreground">9958654732</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail size={20} className="text-primary" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-muted-foreground">hftraders121@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin size={20} className="text-primary" />
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-sm text-muted-foreground">Chanakyapuri, New Delhi</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-primary text-primary-foreground">
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-3">Why Choose Us?</h3>
                    <ul className="space-y-2 text-sm">
                      <li>✓ Free pickup service</li>
                      <li>✓ Best market rates</li>
                      <li>✓ Instant payment</li>
                      <li>✓ 50+ years experience</li>
                      <li>✓ Licensed & trusted</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default SellScrap;