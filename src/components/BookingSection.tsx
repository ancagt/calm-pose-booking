import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const classes = [
  {
    name: "Hatha Yoga",
    description: "Gentle, slow-paced practice perfect for beginners",
    duration: "60 min",
    price: "$25"
  },
  {
    name: "Vinyasa Flow",
    description: "Dynamic sequences linking breath with movement",
    duration: "75 min",
    price: "$30"
  },
  {
    name: "Restorative Yoga",
    description: "Deeply relaxing poses using props for support",
    duration: "90 min", 
    price: "$35"
  }
];

export const BookingSection = () => {
  return (
    <section id="classes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Book Your Session
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our variety of classes and start your wellness journey today
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Our Classes</h3>
            {classes.map((yogaClass, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-2">
                        {yogaClass.name}
                      </h4>
                      <p className="text-muted-foreground mb-3">
                        {yogaClass.description}
                      </p>
                      <span className="text-sm text-sage">
                        {yogaClass.duration}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary mb-2">
                        {yogaClass.price}
                      </div>
                      <Button variant="zen" size="sm">
                        Book Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-foreground">
                Contact Us
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 p-6">
              <div className="space-y-4">
                <Input placeholder="Your Name" className="w-full" />
                <Input placeholder="Your Email" type="email" className="w-full" />
                <Input placeholder="Phone Number" type="tel" className="w-full" />
                <Textarea 
                  placeholder="Tell us about your yoga experience and what you'd like to achieve..."
                  className="w-full min-h-[120px]"
                />
              </div>
              
              <Button variant="hero" size="lg" className="w-full">
                Send Message & Book Session
              </Button>
              
              <div className="text-center space-y-2 pt-4 border-t border-border">
                <p className="text-muted-foreground">Or reach us directly:</p>
                <div className="space-y-1 text-sm">
                  <p className="text-foreground">📧 hello@calmpose.com</p>
                  <p className="text-foreground">📞 (555) 123-YOGA</p>
                  <p className="text-foreground">📍 123 Serenity Lane, Peaceful City</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};