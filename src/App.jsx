import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Instagram, Phone, MapPin, MessageCircle, ChevronRight, Globe } from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Inject Font: Outfit only (clean and modern)
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    {
      id: 1,
      name: "Sate Ayam Ponorogo",
      category: "Best Seller",
      price: "24.000, 20 Tusuk",
      image: "/images/Sate-ayam-menu.jpeg"
    },
    {
      id: 2,
      name: "Sate Tahu Ponorogo",
      category: "Second Best Seller",
      price: "8.000, 15 Tusuk",
      image: "/images/Sate-tahu-menu.jpeg"
    },
    {
      id: 3,
      name: "Lontong Daun",
      category: "Complement",
      price: "4.000, 1 Pcs",
      image: "/images/Sate-lontong-menu.jpeg"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-['Outfit'] text-[#1a4a2e] selection:bg-[#1a4a2e]/10 overflow-x-hidden">
      {/* Navbar */}
      <nav 
        className={`sticky top-0 w-full z-50 transition-all duration-300 px-6 sm:px-12 py-4 ${
          isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-[#1a4a2e]/5' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-8">
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#1a4a2e]">
              PAK HARI <span className="font-light">2</span>
            </span>
            <div className="hidden lg:flex items-center gap-8 font-medium text-[13px] tracking-widest uppercase">
              <a href="#hero" className="hover:text-[#e8a020] transition-colors">Beranda</a>
              <a href="#menu" className="hover:text-[#e8a020] transition-colors">Menu</a>
              <a href="#tentang" className="hover:text-[#e8a020] transition-colors">Tentang Kami</a>
              <a href="#kontak" className="hover:text-[#e8a020] transition-colors">Kontak</a>
            </div>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <div className="hidden sm:flex items-center gap-2 border border-[#1a4a2e]/20 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase">
              <Globe size={14} />
              ID
            </div>
            <button className="bg-[#1a4a2e] text-white px-6 py-2.5 rounded-full font-semibold text-xs tracking-widest uppercase hover:bg-[#153a24] transition-all shadow-xl shadow-[#1a4a2e]/10">Hi, user
            </button>
            <button 
              className="lg:hidden text-[#1a4a2e]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-b border-[#1a4a2e]/5 md:hidden p-8 flex flex-col gap-6 shadow-2xl animate-fade-in-down">
            <a href="#hero" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold italic">Beranda</a>
            <a href="#menu" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold italic">Menu</a>
            <a href="#tentang" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold italic">Tentang</a>
            <a href="#kontak" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold italic">Kontak</a>
          </div>
        )}
      </nav>

      <section id="hero" className="relative pt-10 sm:pt-20 pb-20 px-6 sm:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 space-y-8 z-10 text-center lg:text-left">
          <h1 className="text-5xl sm:text-7xl xl:text-8xl font-extrabold leading-[1.1] tracking-tight text-[#1a4a2e]">
            KELEZATAN <br />
            SATE <span className="text-[#e8a020]">NUSANTARA</span>
          </h1>
          <p className="text-base sm:text-lg text-[#1a4a2e]/70 leading-relaxed max-w-lg mx-auto lg:mx-0">
            Dibuat dari daging ayam pilihan dan bumbu rempah asli Indonesia dengan resep rahasia yang diwariskan turun-temurun.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
            <a href="#menu" className="bg-[#1a4a2e] text-white px-10 py-4 rounded-full font-bold hover:shadow-2xl transition-all text-center uppercase tracking-widest text-xs flex items-center justify-center gap-2 group">
              Lihat Menu <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#tentang" className="border border-[#1a4a2e]/20 text-[#1a4a2e] px-10 py-4 rounded-full font-bold hover:bg-[#1a4a2e]/5 transition-all text-center uppercase tracking-widest text-xs">
              Tentang Kami
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#f5f0e8] rounded-full -z-10 blur-3xl opacity-50"></div>
          <img 
            src="/images/sate-outlet.jpeg" 
            alt="Hero Sate" 
            className="rounded-[40px] sm:rounded-[80px] w-full aspect-[4/5] lg:aspect-[3/4] object-cover shadow-2xl"
          />  
        </div>
      </section>

      {/* Seasonal / Best Seller Slider Section */}
      <section id="menu" className="py-24 px-6 sm:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-4">
              <h4 className="text-[#e8a020] text-xs font-black uppercase tracking-[0.3em]">Koleksi Menu</h4>
              <h2 className="text-4xl sm:text-5xl font-black leading-[1.1]">Signature Sate <br />Pak Hari 2</h2>
            </div>
            <a href="#" className="text-[#1a4a2e] font-bold text-sm border-b-2 border-[#1a4a2e] pb-1 flex items-center gap-2 hover:gap-4 transition-all uppercase tracking-widest">
              Semua Menu <ChevronRight size={18} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {menuItems.map((item) => (
              <div key={item.id} className="group relative">
                <div className="relative overflow-hidden rounded-[32px] sm:rounded-[48px] bg-[#f9f9f9]">
                  <img src={item.image} alt={item.name} className="w-full aspect-[4/5] object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute top-6 right-6">
                    <span className="bg-white/90 backdrop-blur-sm shadow-xl px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-[#1a4a2e]">
                      Rp {item.price}
                    </span>
                  </div>
                </div>
                <div className="mt-8 space-y-2 px-2">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#e8a020]">{item.category === "Best Seller" ? "Paling Laris" : item.category === "Complement" ? "Pelengkap" : item.category}</p>
                  <h3 className="text-2xl font-bold">{item.name}</h3>
                  <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all text-[#1a4a2e]/50 hover:text-[#1a4a2e]">
                    Pesan Ke Keranjang +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainable Section (About) */}
      <section id="tentang" className="py-24 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="bg-[#1a4a2e] rounded-[40px] sm:rounded-[60px] p-8 sm:p-20 flex flex-col lg:flex-row items-center gap-16 overflow-hidden relative border border-[#1a4a2e]/5 shadow-sm">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="lg:w-1/2 space-y-8 z-10">
            <h4 className="text-[#e8a020] text-xs font-bold uppercase tracking-[0.3em]">Komitmen Kami</h4>
            <h2 className="text-4xl sm:text-6xl font-extrabold text-white leading-[1.1] tracking-tight uppercase">
              DIBUAT DARI <br /> 
              RESEP ASLI <br />
              <span>TURUN TEMURUN</span>
            </h2>
            <p className="text-white/60 leading-relaxed text-base sm:text-lg">
              Setiap tusuk sate di Pak Hari 2 adalah wujud dari dedikasi kami menjaga standar kualitas sejak 2020.
            </p>
            <button className="bg-[#e8a020] text-white px-8 py-4 rounded-full font-bold text-[10px] uppercase tracking-widest hover:scale-105 transition-all">
              Pelajari Lebih Lanjut
            </button>
          </div>
          <div className="lg:w-1/2 relative group">
            <img 
              src="/images/foto-pelanggan.jpeg" 
              alt="Grind Master" 
              className="rounded-[30px] sm:rounded-[50px] object-cover w-full aspect-square sm:aspect-video lg:aspect-square group-hover:scale-95 transition-transform duration-700" 
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="kontak" className="pt-24 pb-12 px-6 sm:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            <div className="col-span-1 lg:col-span-1 space-y-8">
              <span className="text-2xl font-black tracking-tighter">PAK HARI 2</span>
              <p className="text-sm text-[#1a4a2e]/50 leading-loose">
                Pengalaman kuliner sate nusantara kualitas premium. Menyajikan kehangatan rasa untuk keluarga Indonesia sejak 2020.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 border border-[#1a4a2e]/10 rounded-full flex items-center justify-center hover:bg-[#1a4a2e] hover:text-white transition-all">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 border border-[#1a4a2e]/10 rounded-full flex items-center justify-center hover:bg-[#1a4a2e] hover:text-white transition-all">
                  <Phone size={18} />
                </a>
              </div>
            </div>

            <div className="space-y-8">
              <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#e8a020]">Perusahaan</h5>
              <ul className="space-y-4 text-sm font-bold opacity-70">
                <li><a href="#" className="hover:opacity-100 transition-opacity">Tentang</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Menu</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Toko</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Karir</a></li>
              </ul>
            </div>

            <div className="space-y-8">
              <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#e8a020]">Kebijakan</h5>
              <ul className="space-y-4 text-sm font-bold opacity-70">
                <li><a href="#" className="hover:opacity-100 transition-opacity">Tata Kelola</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Investor</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Berita</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Kontak</a></li>
              </ul>
            </div>

            <div className="space-y-8">
              <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#e8a020]">Kunjungi Kami</h5>
              <p className="text-xs font-bold leading-loose text-[#1a4a2e]/60">
                Jl. Soekarno Hatta No.367, Sablak, Keniten, Kec. Ponorogo, Kabupaten Ponorogo, Jawa Timur 63413<br />
                Senin — Minggu: 15:00 — 17:30
              </p>
            </div>
          </div>
          
          <div className="pt-12 border-t border-[#1a4a2e]/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] font-bold text-[#1a4a2e]/30 uppercase tracking-widest">&copy; 2024 Pak Hari 2. Hak Cipta Dilindungi.</p>
            <div className="flex gap-8 text-[10px] font-bold text-[#1a4a2e]/30 uppercase tracking-widest">
              <a href="#">Kebijakan Privasi</a>
              <a href="#">Ketentuan Layanan</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
