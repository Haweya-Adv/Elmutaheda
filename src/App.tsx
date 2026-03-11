/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  CheckCircle2, 
  Droplets, 
  Wrench, 
  Home, 
  Users, 
  Star, 
  ChevronRight, 
  Menu, 
  X,
  ArrowLeft,
  ShieldCheck,
  Truck,
  BadgePercent,
  Headphones
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'الرئيسية', href: '#' },
    { name: 'من نحن', href: '#about' },
    { name: 'منتجاتنا', href: '#products' },
    { name: 'لماذا نحن', href: '#why-us' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <img 
              src="imgs/logo.png" 
              alt="المتحدة" 
              className="w-12 h-12 object-contain"
              referrerPolicy="no-referrer"
            />
            <span className="text-2xl font-bold text-slate-900 tracking-tight">المتحدة للمواد الصحية</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
            >
             تواصل معنا
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-600 hover:text-blue-600 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-lg font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-xl transition-all"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-blue-600 text-white px-6 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all"
                >
                  تواصل معنا
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden" dir="rtl">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-blue-50/50 rounded-bl-[100px]" />
      <div className="absolute top-1/4 left-0 -z-10 w-64 h-64 bg-blue-100/30 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-6">
              <ShieldCheck size={16} />
              <span>الجودة والاحترافية في مكان واحد</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-[1.2] mb-6">
              حلول متكاملة <br />
              <span className="text-blue-600">للمواد الصحية والسباكة</span>
            </h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl">
              نحن نوفر أفضل وأجود أنواع الأدوات الصحية ومستلزمات السباكة من كبرى العلامات التجارية العالمية لتلبية احتياجات المقاولين وأصحاب المنازل.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 group"
              >
                تواصل بنا الآن
                <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              </a>
              <a
                href="#products"
                className="flex items-center justify-center gap-2 bg-white text-slate-900 border-2 border-slate-100 px-8 py-4 rounded-2xl font-bold text-lg hover:border-blue-200 hover:bg-blue-50 transition-all"
              >
                تصفح المنتجات
              </a>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3 space-x-reverse">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://picsum.photos/seed/user${i}/100/100`}
                    alt="User"
                    className="w-12 h-12 rounded-full border-4 border-white object-cover"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-1 text-yellow-500 mb-0.5">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={14} fill="currentColor" />)}
                </div>
                <p className="text-slate-500 font-medium">+500 عميل يثقون بنا</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl shadow-blue-200/50 border-8 border-white">
              <img
                src="imgs/main.jpg"
                alt="Sanitary Ware"
                className="w-full aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 z-20 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-2xl">
                  <CheckCircle2 className="text-green-600 w-6 h-6" />
                </div>
                <div>
                  <p className="text-slate-900 font-bold text-lg">منتجات أصلية</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <img
              src="imgs/gray-water-pipes.jpg"
              alt="Our Warehouse"
              className="rounded-3xl shadow-xl object-cover w-full aspect-video lg:aspect-square"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block">من نحن</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              خبرة تمتد لسنوات في توريد <br />
              <span className="text-blue-600">أفضل الحلول الصحية والسباكة</span>
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              تأسست شركة المتحدة لتكون الشريك الموثوق لكل من يبحث عن الجودة والتميز في عالم الأدوات الصحية. نحن نفخر بتقديم تشكيلة واسعة من المنتجات التي تجمع بين التصميم العصري والكفاءة العالية.
            </p>
            <div className="space-y-4">
              {[
                'نورد أشهر الماركات العالمية والمحلية الموثوقة.',
                'فريق متخصص لمساعدتك في اختيار ما يناسب احتياجاتك.',
                'نلتزم بأعلى معايير الجودة في جميع منتجاتنا.',
                'أسعار تنافسية تناسب جميع الميزانيات.'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-blue-50 p-1 rounded-full">
                    <CheckCircle2 className="text-blue-600 w-5 h-5" />
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Categories = () => {
  const categories = [
    { name: 'مواسير وأنابيب', icon: <Wrench />, img: 'imgs/pipe.webp' },
    { name: 'خلاطات', icon: <Droplets />, img: 'imgs/202003110734283428.webp' },
    { name: 'أطقم حمامات', icon: <Home />, img: 'imgs/bathroom.jpg' },
    { name: 'أحواض ومغاسل', icon: <Users />, img: 'imgs/washer.jpg' },
    { name: 'سخانات مياه', icon: <ShieldCheck />, img: 'imgs/water-heater.png' },
    { name: 'محابس وصمامات', icon: <Wrench />, img: 'imgs/pipes.webp' },
  ];

  return (
    <section id="products" className="py-24 bg-slate-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">تصنيفات المنتجات</h2>
          <p className="text-slate-600 text-lg">نوفر مجموعة واسعة من التصنيفات لتغطي كافة احتياجات السباكة والأدوات الصحية.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 right-4 text-white flex items-center gap-2">
                  <div className="bg-blue-600 p-2 rounded-lg">
                    {React.cloneElement(cat.icon as React.ReactElement, { size: 20 })}
                  </div>
                  <h3 className="text-xl font-bold">{cat.name}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-slate-500">تشكيلة واسعة من {cat.name} بأعلى مواصفات الجودة والتحمل.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const sliderImageFiles = [
  'WhatsApp Image 2026-03-10 at 11.37.16 PM.jpeg',
  'WhatsApp Image 2026-03-10 at 11.37.21 PM.jpeg',
  'WhatsApp Image 2026-03-10 at 11.37.23 PM.jpeg',
  'WhatsApp Image 2026-03-10 at 11.37.26 PM.jpeg',
  'WhatsApp Image 2026-03-10 at 11.37.27 PM.jpeg',
  'WhatsApp Image 2026-03-10 at 11.37.28 PM (1).jpeg',
  'WhatsApp Image 2026-03-10 at 11.37.28 PM.jpeg',
  'WhatsApp Image 2026-03-10 at 11.37.29 PM.jpeg',
  'WhatsApp Image 2026-03-10 at 11.37.30 PM.jpeg',
  'WhatsApp Image 2026-03-10 at 11.37.31 PM (1).jpeg',
  'WhatsApp Image 2026-03-10 at 11.37.31 PM.jpeg',
  'WhatsApp Image 2026-03-10 at 11.37.32 PM.jpeg',
  'WhatsApp Image 2026-03-10 at 11.37.33 PM (1).jpeg',
  'WhatsApp Image 2026-03-10 at 11.37.33 PM.jpeg',
  'WhatsApp Image 2026-03-10 at 11.37.34 PM.jpeg',
  'WhatsApp Image 2026-03-10 at 11.37.35 PM.jpeg',
  'WhatsApp Image 2026-03-10 at 11.37.36 PM (1).jpeg',
  'WhatsApp Image 2026-03-10 at 11.37.36 PM.jpeg',
  'WhatsApp Image 2026-03-10 at 11.37.37 PM.jpeg',
  'WhatsApp Image 2026-03-10 at 11.37.42 PM.jpeg',
];

const sliderSlides = sliderImageFiles.map((file, index) => ({
  src: `imgs/car/${file}`,
  title: `صورة منتج ${index + 1}`,
}));

const ProductImageSlider = () => {
  const totalSlides = sliderSlides.length;
  const wrapSlideIndex = (index: number) => (index + totalSlides) % totalSlides;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const touchStartX = useRef<number | null>(null);
  const touchCurrentX = useRef<number | null>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => wrapSlideIndex(prev + 1));
    }, 4000);

    return () => clearInterval(intervalId);
  }, [totalSlides]);

  const moveSlide = (targetIndex: number, dir: number) => {
    setDirection(dir);
    setCurrentSlide(wrapSlideIndex(targetIndex));
  };

  const orderedSlides = [
    ...sliderSlides.slice(currentSlide),
    ...sliderSlides.slice(0, currentSlide),
  ];

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
    touchCurrentX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchCurrentX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchCurrentX.current === null) return;

    const swipeDistance = touchStartX.current - touchCurrentX.current;
    const swipeThreshold = 50;

    if (Math.abs(swipeDistance) > swipeThreshold) {
      if (swipeDistance > 0) {
        moveSlide(currentSlide + 1, 1);
      } else {
        moveSlide(currentSlide - 1, -1);
      }
    }

    touchStartX.current = null;
    touchCurrentX.current = null;
  };

  return (
    <section className="pb-24 bg-slate-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">معرض المنتجات</h3>

          <div className="relative w-full max-w-lg sm:max-w-5xl md:max-w-6xl mx-auto">
            <div
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <AnimatePresence mode="wait" initial={false} custom={direction}>
                <motion.div
                  key={sliderSlides[currentSlide].src}
                  custom={direction}
                  className="flex"
                  initial={{ x: direction > 0 ? -50 : 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: direction > 0 ? 50 : -50, opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                >
                  {orderedSlides.map((slide) => (
                    <div key={slide.src} className="basis-1/2 md:basis-1/3 lg:basis-1/4 shrink-0 p-2">
                      <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white">
                        <div className="aspect-square sm:aspect-video">
                          <img
                            src={slide.src}
                            alt={slide.title}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              onClick={() => moveSlide(currentSlide - 1, -1)}
              className="absolute top-1/2 -left-12 -translate-y-1/2 w-9 h-9 rounded-full bg-white text-slate-800 hover:bg-slate-100 transition-all shadow-md flex items-center justify-center border border-slate-200"
              aria-label="Previous slide"
            >
              <ArrowLeft className="rotate-180" size={18} />
            </button>
            <button
              onClick={() => moveSlide(currentSlide + 1, 1)}
              className="absolute top-1/2 -right-12 -translate-y-1/2 w-9 h-9 rounded-full bg-white text-slate-800 hover:bg-slate-100 transition-all shadow-md flex items-center justify-center border border-slate-200"
              aria-label="Next slide"
            >
              <ArrowLeft size={18} />
            </button>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            {sliderSlides.map((slide, i) => (
              <button
                key={slide.src}
                onClick={() => {
                  if (i === currentSlide) return;
                  moveSlide(i, i > currentSlide ? 1 : -1);
                }}
                className={`h-2.5 rounded-full transition-all ${
                  currentSlide === i ? 'w-8 bg-blue-600' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyUs = () => {
  const benefits = [
    { title: 'جودة عالية', desc: 'نختار منتجاتنا بعناية فائقة لضمان أطول عمر افتراضي.', icon: <ShieldCheck className="w-8 h-8" /> },
    { title: 'أسعار منافسة', desc: 'نقدم أفضل الأسعار في السوق مع عروض مستمرة للمقاولين.', icon: <BadgePercent className="w-8 h-8" /> },
    { title: 'توصيل سريع', desc: 'نمتلك أسطول توصيل يغطي جميع المناطق في أسرع وقت.', icon: <Truck className="w-8 h-8" /> },
    { title: 'منتجات أصلية', desc: 'جميع منتجاتنا أصلية 100% ومن مصادرها الرسمية.', icon: <CheckCircle2 className="w-8 h-8" /> },
  ];

  return (
    <section id="why-us" className="py-24 bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">لماذا يختارنا العملاء؟</h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white overflow-hidden relative" dir="rtl">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-700 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">تواصل معنا اليوم</h2>
          <p className="text-slate-400 text-lg mb-12 leading-relaxed">
            نحن هنا لمساعدتك في الحصول على أفضل المنتجات لمشروعك. لا تتردد في الاتصال بنا أو زيارة معرضنا.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center gap-4 group bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-blue-600 transition-all">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-blue-400 group-hover:text-white transition-all">
                <Phone size={24} />
              </div>
              <div className="text-center">
                <p className="text-slate-400 text-sm mb-1 group-hover:text-blue-100">رقم الهاتف</p>
                <p className="text-xl font-bold" dir="ltr">+218 92 265 0910</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 group bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-green-600 transition-all">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-green-400 group-hover:text-white transition-all">
                <MessageCircle size={24} />
              </div>
              <div className="text-center">
                <p className="text-slate-400 text-sm mb-1 group-hover:text-green-100">واتساب</p>
                <p className="text-xl font-bold" dir="ltr">+218 92 511 3439</p>
                <p className="text-xl font-bold" dir="ltr">+218 91 326 0286</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 group bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-red-600 transition-all">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-red-400 group-hover:text-white transition-all">
                <MapPin size={24} />
              </div>
              <div className="text-center">
                <p className="text-slate-400 text-sm mb-1 group-hover:text-red-100">العنوان</p>
                <p className="text-xl font-bold">   بنغازي، سوق مواد البناء، الصالة 15 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img 
                src="imgs/logo.png" 
                alt="المتحدة" 
                className="w-12 h-12 object-contain"
                referrerPolicy="no-referrer"
              />
              <span className="text-2xl font-bold text-slate-900">المتحدة للمواد الصحية</span>
            </div>
            <p className="text-slate-500 leading-relaxed">
              وجهتكم الأولى والموثوقة لجميع مستلزمات السباكة والأدوات الصحية في المملكة. جودة نعتز بها وخدمة تفوق التوقعات.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-6">روابط سريعة</h4>
            <ul className="space-y-4">
              {['الرئيسية', 'من نحن', 'منتجاتنا', 'لماذا نحن', 'اتصل بنا'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-6">المنتجات</h4>
            <ul className="space-y-4">
              {['مواسير وأنابيب', 'خلاطات مياه', 'أطقم حمامات', 'سخانات مياه', 'أحواض ومغاسل'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-200 flex flex-col items-center gap-4 text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} شركة المتحدة للمواد الصحية. جميع الحقوق محفوظة.
          </p>
          <p className="text-slate-400 text-xs">
            تم تطوير الموقع بواسطة شركة هوية للدعاية والاعلان
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-600">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Categories />
        <ProductImageSlider />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
