import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  certification: string;
  onLearnMore?: () => void;
}

export default function ProductCard({ title, description, image, certification, onLearnMore }: ProductCardProps) {
  return (
    <Card className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
      <div className="aspect-video relative overflow-hidden rounded-t-xl">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex items-center justify-between">
        <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-100">
          {certification}
        </Badge>
        <Button variant="ghost" onClick={onLearnMore} className="text-blue-600 hover:text-blue-700 font-medium">
          Learn More <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
