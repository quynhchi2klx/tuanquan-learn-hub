import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  HelpCircle,
  ArrowRight,
  CheckCircle,
  Youtube,
  Filter
} from "lucide-react";

const Services2 = () => {
  const additionalService = {
    icon: HelpCircle,
    title: "Hỗ trợ Bài tập/Lab",
    description: "Giúp đỡ làm project, assignment, lab và bài tập về nhà với chất lượng cao.",
    features: [
      "Project hoàn chỉnh",
      "Assignment chất lượng",
      "Lab report chi tiết",
      "Giải thích code"
    ],
    color: "from-pink-500 to-rose-600",
    cta: "Nhờ làm"
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Dịch vụ khác
          </h3>
        </div>

        <div className="flex justify-center">
          <div className="max-w-md">
            <Card className="relative overflow-hidden group hover:shadow-card transition-all duration-300 border-0">
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${additionalService.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
              
              <CardHeader className="relative">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${additionalService.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <additionalService.icon className="w-8 h-8 text-white" />
                </div>
                
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {additionalService.title}
                </CardTitle>
                
                <p className="text-muted-foreground">
                  {additionalService.description}
                </p>
              </CardHeader>

              <CardContent className="relative">
                <ul className="space-y-3 mb-6">
                  {additionalService.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="ghost" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  {additionalService.cta}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services2;