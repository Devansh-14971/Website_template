import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Award, Shield, Globe, IdCard } from "lucide-react";

export default function AboutPage() {
  const leadership = [
    {
      name: "Dr. Sarah Chen",
      title: "Chief Executive Officer",
      description: "25+ years in pharmaceutical research and development",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    },
    {
      name: "Dr. Michael Rodriguez",
      title: "Chief Technology Officer",
      description: "Expert in drug discovery and clinical trials",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    },
    {
      name: "Dr. Emily Johnson",
      title: "Chief Operating Officer",
      description: "Specialist in pharmaceutical manufacturing and quality",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    }
  ];

  const certifications = [
    { icon: IdCard, label: "FDA Approved" },
    { icon: Award, label: "GMP Certified" },
    { icon: Shield, label: "ISO 9001:2015" },
    { icon: Globe, label: "WHO Prequalified" }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About MediCore Pharmaceuticals</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Committed to advancing healthcare through innovative pharmaceutical solutions and unwavering dedication to patient care
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To develop, manufacture, and distribute high-quality pharmaceutical products that improve patient outcomes and enhance quality of life worldwide. We are committed to the highest standards of safety, efficacy, and regulatory compliance.
              </p>
              <p className="text-lg text-gray-600">
                Founded in 1998, MediCore Pharmaceuticals has grown from a small research company to a global leader in pharmaceutical innovation, serving healthcare providers and patients in over 50 countries.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Healthcare professionals team meeting" 
                className="rounded-xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-lg text-gray-600">
              Our experienced leadership team brings decades of pharmaceutical expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="p-0">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" 
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{leader.name}</h3>
                  <p className="text-gray-600 mb-2">{leader.title}</p>
                  <p className="text-sm text-gray-600">{leader.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality</h3>
                <p className="text-gray-600">Uncompromising commitment to pharmaceutical excellence</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Safety</h3>
                <p className="text-gray-600">Patient safety is our highest priority</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-600">Continuous advancement in medical science</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Impact</h3>
                <p className="text-gray-600">Improving health outcomes worldwide</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Certifications & Compliance</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {certifications.map((cert, index) => (
                  <div key={index}>
                    <cert.icon className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                    <p className="font-semibold text-gray-900">{cert.label}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Manufacturing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Manufacturing facility" 
                className="rounded-xl shadow-lg w-full h-auto" 
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Global Manufacturing Network</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our strategically located manufacturing facilities ensure reliable supply and rapid distribution of pharmaceutical products worldwide.
              </p>
              
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Manufacturing Facilities</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">North America</span>
                      <Badge variant="secondary">3 Facilities</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Europe</span>
                      <Badge variant="secondary">2 Facilities</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Asia-Pacific</span>
                      <Badge variant="secondary">1 Facility</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
