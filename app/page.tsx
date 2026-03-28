// npm install framer-motion
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Clock, Phone, Instagram, Menu, X, Volume2, VolumeX, ArrowRight } from 'lucide-react';

const BLUR_DATA_URL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

export default function AnantariLanding() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    const updateCursor = (e: MouseEvent) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', updateCursor);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', updateCursor);
    };
  }, []);

  // Calculate time of day only after hydration to prevent mismatch
  let timeOfDay = 'day';
  if (mounted) {
    const hour = new Date().getHours();
    if (hour < 12) timeOfDay = 'morning';
    else if (hour < 18) timeOfDay = 'afternoon';
    else timeOfDay = 'evening';
  }

  const handleHeroMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    setMousePos({
      x: (clientX / innerWidth - 0.5) * 20,
      y: (clientY / innerHeight - 0.5) * -20
    });
  };

  const menuItems = [
    { name: 'Dessert', img: 'https://drive.google.com/thumbnail?id=1GFCyoO-Hat3gL0Sh3gDMNYbOFzf1Tw_I&sz=w800' },
    { name: 'fried snacks', img: 'https://drive.google.com/thumbnail?id=13Y97hbEhKWz4XkLbuHE-YgWL3TpxkVj0&sz=w800' },
    { name: 'Kids Meal', img: 'https://drive.google.com/thumbnail?id=1BQpuD49_sW4KuC5r6asAuPil-pxAaDaU&sz=w800' },
    { name: 'Milk Shake', img: 'https://drive.google.com/thumbnail?id=1BQpuD49_sW4KuC5r6asAuPil-pxAaDaU&sz=w800' },
    { name: 'Rice Dish', img: 'https://drive.google.com/thumbnail?id=1uvMcf5D-tWMQ8RHE7_PfhjxtOQTyrL8V&sz=w800' },
    { name: 'Fresh Salad', img: 'https://drive.google.com/thumbnail?id=110L6sucrFbw3SBd1PvhdeMzbscJ4SovVO&sz=w800' },
  ];

  const galleryImages = [
    { src: 'https://drive.google.com/thumbnail?id=1d4zc7fUyR7xar6PzrTGAB0PE-Vy5SeGz&sz=w1000', colSpan: 'col-span-2 md:col-span-2', rowSpan: 'row-span-2' },
    { src: 'https://drive.google.com/thumbnail?id=1_inPT5PybpHYlaqR0CDNOIOSXNFMmYfI&sz=w800', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
    { src: 'https://drive.google.com/thumbnail?id=1e6qQw5xFDiRhx5j0hNB4Ur_OC01esDs0&sz=w800', colSpan: 'col-span-1', rowSpan: 'row-span-2' },
    { src: 'https://drive.google.com/thumbnail?id=110L6sucrFbw3SBd1PvhdeMzbscJ4SovVO=w800', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  ];

  const navLinks = ['About', 'Menu', 'Gallery', 'Contact'];

  return (
    <div className={`relative bg-[var(--cream)] text-[var(--charcoal)] min-h-screen overflow-x-hidden font-sans`}>
      
      {/* Custom Cursor (Desktop Only) */}
      <motion.div 
        className="fixed top-0 left-0 w-6 h-6 rounded-full bg-[var(--gold)] pointer-events-none z-[100] mix-blend-difference hidden md:block"
        animate={{ x: cursorPos.x - 12, y: cursorPos.y - 12 }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      />

      {/* Audio Button (Desktop Only) */}
      <motion.button
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        onClick={() => setIsAudioPlaying(!isAudioPlaying)}
        className="fixed bottom-6 left-6 z-40 w-12 h-12 rounded-full bg-[var(--cream)]/80 backdrop-blur-sm border border-[var(--forest)]/10 items-center justify-center text-[var(--forest)] hover:bg-[var(--cream)] transition-colors hidden md:flex shadow-sm"
        aria-label="Toggle Atmosphere Audio"
      >
        {isAudioPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </motion.button>

      {/* FAB */}
      <motion.a
        href="https://wa.me/6282135759015"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-6 right-6 z-40 bg-[var(--forest)] text-[var(--cream)] px-6 py-4 rounded-full font-dmsans text-sm uppercase tracking-widest shadow-lg flex items-center gap-2 hover:bg-[var(--moss)] transition-colors"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--gold)] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--gold)]"></span>
        </span>
        Pesan Meja
      </motion.a>

      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-[var(--cream)]/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}
      >
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border border-[var(--gold)] flex items-center justify-center">
              <div className="w-4 h-4 border-b-2 border-[var(--gold)] rounded-full" />
            </div>
            <span className={`font-cormorant text-2xl tracking-wider ${isScrolled ? 'text-[var(--forest)]' : 'text-[var(--cream)]'}`}>
              anantari
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className={`font-dmsans text-sm uppercase tracking-widest hover:text-[var(--gold)] transition-colors ${isScrolled ? 'text-[var(--forest)]' : 'text-[var(--cream)]'}`}>
                {item}
              </a>
            ))}
          </div>

          <button 
            className="md:hidden z-50 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X color="var(--cream)" /> : <Menu color={isScrolled ? 'var(--forest)' : 'var(--cream)'} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[var(--forest)] flex flex-col items-center justify-center"
          >
            {navLinks.map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.2 }}
                className="font-cormorant text-4xl text-[var(--cream)] my-4 hover:text-[var(--gold)] transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section 
        className="relative h-screen w-full overflow-hidden flex items-center justify-center"
        onMouseMove={handleHeroMouseMove}
      >
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://drive.google.com/thumbnail?id=1guyO4VCNTtnC-7upJwf_SrqkQE45Iw3b&sz=w1920" 
            alt="Anantari Coffee Atmosphere" 
            fill 
            unoptimized
            className="object-cover"
            priority
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
          />
          <div className={`absolute inset-0 transition-colors duration-1000 ${timeOfDay === 'evening' ? 'bg-[var(--forest)]/60' : 'bg-[var(--forest)]/40'} mix-blend-multiply`} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[var(--cream)]" />
        </div>

        <motion.div 
          className="relative z-10 text-center px-4 hidden md:block"
          animate={{ rotateX: mousePos.y, rotateY: mousePos.x }}
          transition={{ type: 'spring', stiffness: 75, damping: 15 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <HeroContent />
        </motion.div>
        
        <div className="relative z-10 text-center px-4 md:hidden">
          <HeroContent />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] w-full max-w-md mx-auto md:mx-0 rounded-t-full overflow-hidden"
          >
            <Image 
              src="https://picsum.photos/seed/coffee-pour/800/1000"
              alt="Pouring coffee"
              fill
              className="object-cover"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--forest)] mb-6">
              Santai & <span className="font-libre italic text-[var(--earth)]">Penuh Cerita</span>
            </h2>
            <p className="font-dmsans text-[var(--charcoal)]/80 leading-relaxed mb-6">
              Nama &quot;Anantari&quot; emang kedengeran tinggi, tapi di sini kita bawa santai aja. Tempat buat kamu rehat dari macetnya Semarang, ngopi enak, dan ngobrol ngalor-ngidul bareng temen atau keluarga.
            </p>
            <p className="font-dmsans text-[var(--charcoal)]/80 leading-relaxed mb-8">
              Dikelilingi nuansa hijau yang adem, kita pengen kamu ngerasa kayak lagi di halaman rumah sendiri. Yuk, pesen kopi favoritmu dan nikmatin waktu pelan-pelan tanpa buru-buru.
            </p>
            <button className="flex items-center gap-2 font-dmsans uppercase tracking-widest text-sm text-[var(--forest)] border-b border-[var(--forest)] pb-1 hover:text-[var(--gold)] hover:border-[var(--gold)] transition-colors">
              Kenalan Lebih Jauh <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section id="menu" className="py-24 bg-[var(--forest)] text-[var(--cream)] px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-cormorant text-4xl md:text-5xl mb-4">Menu <span className="font-libre italic text-[var(--gold)]">Andalan Kita</span></h2>
            <p className="font-dmsans text-[var(--cream)]/70 tracking-widest uppercase text-sm">Bikin Harimu Makin Asik</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="group relative aspect-square overflow-hidden rounded-3xl cursor-pointer"
              >
                <Image 
                  src={item.img} 
                  alt={item.name} 
                  fill 
                  unoptimized
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="font-cormorant text-2xl text-[var(--cream)] translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {item.name}
                  </h3>
                  <div className="h-[1px] w-0 bg-[var(--gold)] mt-4 group-hover:w-full transition-all duration-500 delay-100" />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 flex justify-center"
          >
            <a
              href="https://drive.google.com/file/d/1NiqljYdgzbICd_DvxOJzfNTStSMxhSJf/view?fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGneONZq8SMc98ora8IJnPrDDH_U3xlw2uybNuj5HwcThyAezql5ncOvmyvYPc_aem_A2lucLIaha2vbe-66-J4qQ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-dmsans uppercase tracking-widest text-sm text-[var(--gold)] border border-[var(--gold)] rounded-full px-8 py-4 hover:bg-[var(--gold)] hover:text-[var(--forest)] transition-colors duration-300"
            >
              Lihat Semua Menu <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Bento Gallery */}
      <section id="gallery" className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--forest)] mb-4">
            Momen Seru di <span className="font-libre italic text-[var(--earth)]">Anantari</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[150px] md:auto-rows-[250px]">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`relative overflow-hidden rounded-3xl ${img.colSpan} ${img.rowSpan} group cursor-pointer`}
            >
              <Image 
                src={img.src} 
                alt="Gallery image" 
                fill 
                unoptimized
                className="object-cover transition-all duration-700 group-hover:brightness-110"
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Atmosphere Section */}
      <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden">
        <Image 
          src="https://drive.google.com/thumbnail?id=1ua5w4h4pydAWF5zo5xt4jITUDA80Pogx&sz=w1920" 
          alt="Atmosphere" 
          fill 
          unoptimized
          className="object-cover"
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
        />
        <div className="absolute inset-0 bg-[var(--moss)]/60 mix-blend-multiply" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 text-center px-6 max-w-3xl"
        >
          <h2 className="font-cormorant text-4xl md:text-6xl text-[var(--cream)] mb-6 leading-tight">
            Tempat Nyaman Buat <span className="font-libre italic text-[var(--gold)]">Rehat</span>
          </h2>
          <p className="font-dmsans text-[var(--cream)]/90 text-lg">
            Tarik napas panjang, cium wangi kopi yang baru diseduh, dan biarin waktu berjalan pelan di sini.
          </p>
        </motion.div>
      </section>

      {/* Contact & Footer */}
      <section id="contact" className="py-24 px-6 bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--forest)] mb-8">Mampir <span className="font-libre italic text-[var(--earth)]">Yuk!</span></h2>
            
            <div className="space-y-6 font-dmsans text-[var(--charcoal)]/80">
              <div className="flex items-start gap-4">
                <MapPin className="text-[var(--earth)] shrink-0 mt-1" size={20} />
                <p>Jl. Rinjani No.12, Bendungan,<br/>Kec. Gajahmungkur, Kota Semarang,<br/>Jawa Tengah 50232</p>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="text-[var(--earth)] shrink-0 mt-1" size={20} />
                <p>Senin - Minggu<br/>08:00 - 22:00 WIB</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-[var(--earth)] shrink-0" size={20} />
                <p>+62 821-3575-9015</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[var(--forest)] p-10 rounded-3xl text-[var(--cream)] flex flex-col justify-center items-center text-center"
          >
            <h3 className="font-cormorant text-3xl mb-4">Amankan Mejamu</h3>
            <p className="font-dmsans text-[var(--cream)]/70 mb-8">Biar nggak kehabisan tempat, mending reservasi dulu aja buat nongkrong nanti.</p>
            <a 
              href="https://wa.me/6282135759015"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--gold)] text-[var(--forest)] font-dmsans uppercase tracking-widest text-sm px-8 py-4 rounded-full hover:bg-[var(--cream)] transition-colors duration-300"
            >
              Reservasi Sekarang
            </a>
          </motion.div>
        </div>
      </section>

      <footer className="bg-[var(--charcoal)] text-[var(--cream)]/50 py-12 px-6 font-dmsans text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full border border-[var(--gold)]/50 flex items-center justify-center">
              <div className="w-3 h-3 border-b border-[var(--gold)]/50 rounded-full" />
            </div>
            <span className="font-cormorant text-xl tracking-wider text-[var(--cream)]">anantari</span>
          </div>
          
          <p>&copy; {new Date().getFullYear()} Anantari Coffee. All rights reserved.</p>
          
          <div className="flex gap-4">
            <a href="#" className="hover:text-[var(--gold)] transition-colors" aria-label="Instagram"><Instagram size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function HeroContent() {
  return (
    <>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="font-dmsans text-[var(--cream)] text-sm md:text-base uppercase tracking-[0.3em] mb-6"
      >
        Semua Rasa, Satu Tempat
      </motion.p>
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="font-cormorant text-6xl md:text-8xl lg:text-9xl text-[var(--cream)] font-light tracking-tight mb-8"
      >
        Anantari <span className="font-libre italic text-[var(--gold)]">Coffee</span>
      </motion.h1>
    </>
  );
}
