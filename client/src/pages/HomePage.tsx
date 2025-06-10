import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ProductCard from "@/components/ProductCard";
import TestimonialCard from "@/components/TestimonialCard";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function HomePage() {
  const products = [
    {
      title: "Cardiovascular Medications",
      description: "Advanced treatments for heart health and circulatory system disorders.",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      certification: "FDA Approved"
    },
    {
      title: "Diabetes Management",
      description: "Comprehensive solutions for blood sugar control and diabetes care.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      certification: "WHO Certified"
    },
    {
      title: "Antimicrobial Therapies",
      description: "Next-generation antibiotics for infectious disease treatment.",
      image: "https://images.unsplash.com/photo-1571019613914-85f342c6a11e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      certification: "Clinical Proven"
    }
  ];

  const testimonials = [
    {
      quote: "MediCore's cardiovascular medications have significantly improved our patient outcomes. Their quality and reliability are unmatched.",
      name: "Dr. Karen Williams",
      title: "Chief Cardiologist, Metro Hospital",
      initials: "KW",
      bgColor: "bg-blue-600"
    },
    {
      quote: "The diabetes management solutions from MediCore have transformed our treatment protocols. Excellent efficacy and patient compliance.",
      name: "Dr. Robert Patel",
      title: "Endocrinologist, City Medical Center",
      initials: "RP",
      bgColor: "bg-green-600"
    },
    {
      quote: "Outstanding research and development capabilities. MediCore consistently delivers innovative solutions that meet the highest medical standards.",
      name: "Dr. Amanda Thompson",
      title: "Director of Pharmacy, Regional Health System",
      initials: "AT",
      bgColor: "bg-blue-600"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Advancing Healthcare Through Innovation
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-blue-100">
                Leading pharmaceutical solutions for better patient outcomes worldwide
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                    Our Products
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Advanced pharmaceutical laboratory" 
                className="rounded-xl shadow-2xl w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-gray-600">Products</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">FDA</div>
              <div className="text-gray-600">Approved</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Product Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive pharmaceutical solutions backed by rigorous research and development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/products">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                View All Products <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Research & Development */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Pharmaceutical research laboratory" 
                className="rounded-xl shadow-lg w-full h-auto" 
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Research & Development Excellence</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our state-of-the-art R&D facilities are dedicated to developing breakthrough medications that improve patient outcomes and quality of life.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="text-green-600 h-6 w-6 mr-4" />
                  <span className="text-lg">FDA-compliant research protocols</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-green-600 h-6 w-6 mr-4" />
                  <span className="text-lg">Clinical trial expertise</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-green-600 h-6 w-6 mr-4" />
                  <span className="text-lg">Quality assurance standards</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Healthcare Professionals</h2>
            <p className="text-xl text-gray-600">What our partners say about our pharmaceutical solutions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
