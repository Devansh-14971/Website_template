import ProductCard from "@/components/ProductCard";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProductsPage() {
  const products = [
    {
      title: "Cardiovascular Medications",
      description: "Advanced treatments for heart health and circulatory system disorders including ACE inhibitors, beta-blockers, and statins.",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      certification: "FDA Approved"
    },
    {
      title: "Diabetes Management",
      description: "Comprehensive solutions for blood sugar control and diabetes care including insulin products and glucose monitoring systems.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      certification: "WHO Certified"
    },
    {
      title: "Antimicrobial Therapies",
      description: "Next-generation antibiotics for infectious disease treatment with improved efficacy against resistant pathogens.",
      image: "https://images.unsplash.com/photo-1571019613914-85f342c6a11e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      certification: "Clinical Proven"
    },
    {
      title: "Respiratory Care",
      description: "Advanced treatments for asthma, COPD, and respiratory conditions including inhalers and bronchodilators.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      certification: "FDA Approved"
    },
    {
      title: "Oncology Solutions",
      description: "Innovative cancer treatments and supportive care medications developed through cutting-edge research.",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      certification: "Breakthrough Therapy"
    },
    {
      title: "Neurological Therapies",
      description: "Advanced treatments for neurological and psychiatric conditions with focus on patient quality of life.",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      certification: "Clinical Excellence"
    }
  ];

  const categories = [
    "All Products",
    "Cardiovascular",
    "Diabetes",
    "Antimicrobial",
    "Respiratory",
    "Oncology",
    "Neurology"
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Product Portfolio</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of pharmaceutical solutions designed to improve patient outcomes across multiple therapeutic areas
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Badge
                key={index}
                variant={index === 0 ? "default" : "secondary"}
                className={`cursor-pointer px-4 py-2 ${
                  index === 0 
                    ? "bg-blue-600 hover:bg-blue-700" 
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Product Information */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Assurance</h3>
                <p className="text-gray-600 mb-6">
                  All our pharmaceutical products undergo rigorous testing and quality control processes to ensure safety, efficacy, and compliance with international standards.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Good Manufacturing Practice (GMP) certified
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    FDA and international regulatory compliance
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Comprehensive stability testing
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Research & Development</h3>
                <p className="text-gray-600 mb-6">
                  Our commitment to innovation drives us to continuously develop new and improved pharmaceutical solutions for unmet medical needs.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    State-of-the-art research facilities
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    Clinical trial expertise
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    Partnership with leading medical institutions
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
