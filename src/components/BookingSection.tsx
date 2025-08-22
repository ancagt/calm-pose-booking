import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";

export const BookingSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="classes" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('booking.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('booking.subtitle')}
          </p>
        </div>

        <Card className="max-w-2xl mx-auto shadow-large">
          <CardContent className="p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('booking.name')}
                  </label>
                  <Input placeholder={t('booking.name')} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('booking.email')}
                  </label>
                  <Input type="email" placeholder={t('booking.email')} />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('booking.phone')}
                  </label>
                  <Input placeholder={t('booking.phone')} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('booking.classType')}
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder={t('booking.selectType')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hatha">{t('booking.beginnerHatha')}</SelectItem>
                      <SelectItem value="vinyasa">{t('booking.vinyasaFlow')}</SelectItem>
                      <SelectItem value="restorative">{t('booking.restorative')}</SelectItem>
                      <SelectItem value="meditation">{t('booking.meditation')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('booking.date')}
                  </label>
                  <Input type="date" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('booking.time')}
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder={t('booking.selectTime')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="09:00">09:00</SelectItem>
                      <SelectItem value="11:00">11:00</SelectItem>
                      <SelectItem value="14:00">14:00</SelectItem>
                      <SelectItem value="16:00">16:00</SelectItem>
                      <SelectItem value="18:00">18:00</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t('booking.message')}
                </label>
                <Textarea 
                  placeholder={t('booking.messagePlaceholder')}
                  className="min-h-[120px]"
                />
              </div>
              
              <Button variant="hero" size="lg" className="w-full">
                {t('booking.submit')}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};