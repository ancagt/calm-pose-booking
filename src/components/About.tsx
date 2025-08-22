export const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose Calm Pose?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At Calm Pose, we believe yoga is more than just physical exercise—it's a journey of self-discovery, 
              healing, and transformation. Our experienced instructors create a nurturing environment where you can 
              explore your practice safely and mindfully.
            </p>
            
            <div className="space-y-6">
              {[
                {
                  title: "Expert Guidance",
                  description: "Certified instructors with years of experience in various yoga traditions"
                },
                {
                  title: "Personalized Approach", 
                  description: "Classes adapted to your individual needs and fitness level"
                },
                {
                  title: "Holistic Wellness",
                  description: "Focus on mental, physical, and spiritual well-being"
                }
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-primary p-1">
              <div className="w-full h-full rounded-3xl bg-background/95 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🧘‍♀️</div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    Over 500 Happy Students
                  </h3>
                  <p className="text-muted-foreground">
                    Join our community of practitioners who have found peace, strength, and joy through yoga
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};