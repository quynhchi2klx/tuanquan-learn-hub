import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, X, Facebook, Youtube, Mail } from "lucide-react";

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  const contactOptions = [
    {
      icon: <Facebook className="h-5 w-5" />,
      label: "Facebook",
      description: "Chat qua Messenger",
      action: () => window.open('https://www.facebook.com/tuanquanservices', '_blank')
    },
    {
      icon: <Youtube className="h-5 w-5" />,
      label: "YouTube",
      description: "Xem video & đặt dịch vụ",
      action: () => window.open('https://www.youtube.com/@tuanquanservices', '_blank')
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Gmail",
      description: "Gửi email trực tiếp",
      action: () => window.open('mailto:tuanquan.services@gmail.com', '_blank')
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Popup */}
      {isOpen && (
        <Card className="absolute bottom-16 right-0 w-80 shadow-elegant border-0 animate-in slide-in-from-bottom-2 duration-300">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center justify-between">
              Liên hệ với Tuấn & Quân
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={toggleChat}
                className="h-6 w-6 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Chọn cách liên hệ phù hợp để được hỗ trợ nhanh nhất:
            </p>
            {contactOptions.map((option, index) => (
              <Button
                key={index}
                variant="outline"
                className="w-full justify-start h-auto p-3"
                onClick={option.action}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {option.icon}
                  </div>
                  <div className="text-left">
                    <div className="font-medium">{option.label}</div>
                    <div className="text-xs text-muted-foreground">
                      {option.description}
                    </div>
                  </div>
                </div>
              </Button>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Chat Button */}
      <Button
        onClick={toggleChat}
        size="lg"
        className="h-14 w-14 rounded-full shadow-elegant hover:shadow-lg transition-all duration-300 relative"
      >
        <MessageCircle className="h-6 w-6" />
        {!isOpen && (
          <div className="absolute -top-1 -right-1 h-4 w-4 bg-secondary rounded-full animate-pulse" />
        )}
      </Button>
    </div>
  );
};

export default FloatingChat;