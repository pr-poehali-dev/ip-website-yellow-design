import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const banks = [
  {
    id: 1,
    name: "Альфа-Банк",
    description: "Расчетно-кассовое обслуживание для ИП и ООО",
    features: ["Бесплатное открытие счёта", "Интернет-банк и мобильное приложение", "Эквайринг с бесплатной установкой"],
    reward: "до 15 000 ₽",
    icon: "Landmark"
  },
  {
    id: 2,
    name: "ВТБ",
    description: "Быстрое открытие счета для бизнеса",
    features: ["Открытие счета за 25 минут", "Надежность крупного банка", "Широкий спектр услуг"],
    reward: "до 12 000 ₽",
    icon: "Building2"
  },
  {
    id: 3,
    name: "Совкомбанк",
    description: "РКО для ИП и организаций онлайн",
    features: ["Реквизиты счета за 3 минуты", "Помощь с бухгалтерией", "Тарифы от 0 рублей"],
    reward: "до 10 000 ₽",
    icon: "CreditCard"
  },
  {
    id: 4,
    name: "Тинькофф Банк",
    description: "Современное банковское обслуживание",
    features: ["100% онлайн регистрация", "Бесплатное ведение счета", "Интеграция с 1С"],
    reward: "до 20 000 ₽",
    icon: "Smartphone"
  }
];

const advantages = [
  {
    icon: "Shield",
    title: "Надежность",
    description: "Работаем только с проверенными банками-партнерами"
  },
  {
    icon: "Zap",
    title: "Скорость",
    description: "Быстрое оформление документов и получение услуг"
  },
  {
    icon: "Users",
    title: "Поддержка",
    description: "Персональный менеджер на всех этапах"
  },
  {
    icon: "TrendingUp",
    title: "Выгода",
    description: "Лучшие условия и бонусы от банков"
  }
];

const services = [
  {
    icon: "Briefcase",
    title: "Регистрация ИП",
    description: "Полное сопровождение регистрации индивидуального предпринимателя",
    features: ["Подготовка документов", "Подача в налоговую", "Выбор налогового режима"]
  },
  {
    icon: "Building",
    title: "Расчетный счет",
    description: "Помощь в выборе и открытии расчетного счета",
    features: ["Сравнение тарифов", "Онлайн подача заявки", "Сопровождение процесса"]
  }
];

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="TrendingUp" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-heading font-bold text-darkGray">БизнесВиртий</h1>
                <p className="text-sm text-gray-600">Ваш помощник в оформлении ИП и РКО</p>
              </div>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-darkGray font-medium">
              Связаться с нами
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-darkGray mb-6 leading-tight">
              Оформите <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">ИП и РКО</span> 
              <br />быстро и выгодно
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Помогаем предпринимателям получить статус ИП и открыть расчетный счет в лучших банках России. 
              Полное сопровождение от экспертов.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-darkGray font-semibold px-8 py-4 text-lg">
                <Icon name="FileText" size={20} className="mr-2" />
                Оформить ИП
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-darkGray font-semibold px-8 py-4 text-lg">
                <Icon name="CreditCard" size={20} className="mr-2" />
                Открыть РКО
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-orange/10 rounded-full blur-3xl transform -rotate-12 scale-150"></div>
      </section>

      {/* Banks Section */}
      <section className="py-16 bg-white/70 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-heading font-bold text-darkGray mb-4">
              Банки-партнеры
            </h3>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Выберите подходящий банк для открытия расчетного счета. Все банки проверены и предлагают выгодные условия.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {banks.map((bank, index) => (
              <Card key={bank.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-2 hover:border-primary/50 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={bank.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl font-heading text-darkGray">{bank.name}</CardTitle>
                  <CardDescription className="text-gray-600">{bank.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {bank.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <Icon name="Check" size={16} className="text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t">
                    <div className="text-center">
                      <span className="text-lg font-bold text-primary">{bank.reward}</span>
                      <p className="text-xs text-gray-500 mt-1">вознаграждение</p>
                    </div>
                    <Button className="w-full mt-3 bg-secondary hover:bg-secondary/90 text-darkGray font-medium">
                      Выбрать банк
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-heading font-bold text-darkGray mb-4">
              Наши услуги
            </h3>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Полный комплекс услуг для начинающих предпринимателей
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm border-2 hover:border-primary/50 animate-scale-in" style={{animationDelay: `${index * 0.2}s`}}>
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl font-heading text-darkGray">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <Icon name="CheckCircle" size={18} className="text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-6 bg-primary hover:bg-primary/90 text-darkGray font-medium">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-heading font-bold text-darkGray mb-4">
              Преимущества работы с нами
            </h3>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Почему тысячи предпринимателей выбирают нас
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center group animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Icon name={advantage.icon as any} size={36} className="text-white" />
                </div>
                <h4 className="text-xl font-heading font-bold text-darkGray mb-3">{advantage.title}</h4>
                <p className="text-gray-700 leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-darkGray mb-6">
              Готовы начать свой бизнес?
            </h3>
            <p className="text-xl text-darkGray/80 mb-8 leading-relaxed">
              Получите бесплатную консультацию и узнайте, как быстро оформить ИП и открыть расчетный счет
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-white hover:bg-gray-100 text-darkGray font-semibold px-8 py-4 text-lg">
                <Icon name="Phone" size={20} className="mr-2" />
                Получить консультацию
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-darkGray hover:bg-white hover:text-darkGray font-semibold px-8 py-4 text-lg">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-darkGray text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="TrendingUp" size={20} className="text-white" />
                </div>
                <h4 className="text-xl font-heading font-bold">БизнесВиртий</h4>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Помогаем предпринимателям развивать бизнес с 2020 года
              </p>
            </div>
            
            <div>
              <h5 className="font-heading font-semibold mb-4">Услуги</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">Регистрация ИП</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Открытие РКО</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Бухгалтерия</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Налоговое планирование</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-heading font-semibold mb-4">Банки</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">Альфа-Банк</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">ВТБ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Совкомбанк</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Тинькофф</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-heading font-semibold mb-4">Контакты</h5>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (800) 123-45-67</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@biznesvirtiy.ru</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, Красная площадь, 1</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 БизнесВиртий. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}