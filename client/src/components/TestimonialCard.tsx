import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  initials: string;
  bgColor?: string;
}

export default function TestimonialCard({ quote, name, title, initials, bgColor = "bg-blue-600" }: TestimonialCardProps) {
  return (
    <Card className="bg-white rounded-xl p-6 shadow-lg">
      <CardContent className="p-0">
        <div className="flex items-center mb-4">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>
        </div>
        <p className="text-gray-600 mb-4">{quote}</p>
        <div className="flex items-center">
          <div className={`w-10 h-10 ${bgColor} rounded-full flex items-center justify-center text-white font-semibold mr-3`}>
            {initials}
          </div>
          <div>
            <p className="font-semibold text-gray-900">{name}</p>
            <p className="text-sm text-gray-600">{title}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
