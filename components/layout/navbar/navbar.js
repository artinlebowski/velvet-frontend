'use client';

import { useEffect, useState } from 'react';
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronLeftIcon,
} from '@heroicons/react/24/outline';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // 👇 Change this number to update the cart count everywhere
  const cartCount = 3;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const navLinks = [
    { label: 'خانه', href: '#' },
    { label: 'محصولات', href: '#products' },
    { label: 'درباره ما', href: '#about' },
    { label: 'تماس با ما', href: '#contact' },
  ];

  return (
    <>
      <header
        dir="rtl"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-lg border-b border-main-100/10 shadow-lg shadow-main-100/10'
            : 'bg-transparent shadow-md shadow-main-100/5'
        }`}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 sm:h-20">
          {/* Logo - right side in RTL */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-main-100 to-main-400 flex items-center justify-center shadow-md shadow-main-100/20 group-hover:scale-105 transition-transform duration-300">
              <span
                className="text-white font-black text-lg"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                V
              </span>
            </span>
            <span
              dir="ltr"
              className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-b from-main-100 via-main-300 to-main-500 tracking-tight"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
            >
              Velvet
            </span>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  className="relative text-sm font-semibold text-main-100/80 hover:text-main-100 transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-gradient-to-l from-main-300 to-main-600 rounded-full group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button className="p-2.5 rounded-xl text-main-100/70 hover:text-main-100 hover:bg-main-100/5 transition-all duration-300 cursor-pointer">
              <MagnifyingGlassIcon className="w-5 h-5" />
            </button>

            <button className="p-2.5 rounded-xl text-main-100/70 hover:text-main-100 hover:bg-main-100/5 transition-all duration-300 relative cursor-pointer ml-2">
              <ShoppingCartIcon className="w-10 h-7" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -left-1.5 min-w-[18px] h-[18px] px-2 py-3 flex items-center justify-center text-[17px] font-bold text-white bg-main-500 rounded-full ring-2 ring-white font-persianNumber">
                  {cartCount}
                </span>
              )}
            </button>

            <button className="relative px-5 py-2.5 bg-gradient-to-l from-main-100 to-main-300 text-white text-sm font-bold rounded-xl shadow-md shadow-main-100/20 hover:shadow-lg hover:shadow-main-100/30 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer overflow-hidden group">
              <span className="relative z-10">ورود / ثبت‌نام</span>
              <div className="absolute inset-0 bg-gradient-to-l from-main-200 to-main-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>

          {/* Mobile: Register + Cart + Menu Button */}
          <div className="flex md:hidden items-center gap-1">
            {/* Register Button - mobile */}
            <a
              href="#register"
              className="px-3.5 py-2 bg-gradient-to-l from-main-100 to-main-300 text-white text-xs font-bold rounded-xl shadow-md shadow-main-100/20 hover:shadow-lg hover:shadow-main-100/30 active:scale-[0.98] transition-all duration-300 cursor-pointer"
            >
              ثبت‌نام
            </a>

            {/* Cart - visible on mobile */}
            <button className="p-2 rounded-xl text-main-100/80 hover:text-main-100 hover:bg-main-100/5 transition-all duration-300 relative cursor-pointer">
              <ShoppingCartIcon className="w-8 h-7" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -left-1 min-w-[18px] h-[18px] py-1 px-1 flex items-center justify-center text-[13px] font-bold text-white bg-main-500 rounded-full ring-2 ring-white font-persianNumber">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="p-2 rounded-xl text-main-100 hover:bg-main-100/5 transition-colors duration-300 cursor-pointer"
              aria-label="Open menu"
            >
              <Bars3Icon className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Backdrop overlay */}
      <div
        onClick={() => setMobileOpen(false)}
        className={`md:hidden fixed inset-0 z-[60] bg-main-100/40 backdrop-blur-sm transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Right-side Drawer */}
      <aside
        dir="rtl"
        className={`md:hidden fixed top-0 right-0 z-[70] h-full w-[85%] max-w-sm bg-white shadow-2xl shadow-main-100/20 transition-transform duration-400 ease-out flex flex-col ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 h-16 border-b border-main-100/10">
          <a href="#" className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-main-100 to-main-400 flex items-center justify-center shadow-md shadow-main-100/20">
              <span
                className="text-white font-black text-base"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                V
              </span>
            </span>
            <span
              dir="ltr"
              className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-b from-main-100 via-main-300 to-main-500"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
            >
              Velvet
            </span>
          </a>

          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 rounded-xl text-main-100/70 hover:text-main-100 hover:bg-main-100/5 transition-colors duration-200 cursor-pointer"
            aria-label="Close menu"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Links */}
        <nav className="flex-1 overflow-y-auto px-4 py-6">
          <ul className="space-y-1">
            {navLinks.map((link, idx) => (
              <li
                key={idx}
                style={{
                  transitionDelay: mobileOpen ? `${idx * 50 + 100}ms` : '0ms',
                }}
                className={`transition-all duration-300 ${
                  mobileOpen
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-8'
                }`}
              >
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="group flex items-center justify-between px-4 py-3.5 text-base font-semibold text-main-100/80 hover:text-main-100 hover:bg-main-100/5 rounded-xl transition-all duration-200"
                >
                  <span>{link.label}</span>
                  <ChevronLeftIcon className="w-4 h-4 text-main-100/30 group-hover:text-main-500 group-hover:-translate-x-1 transition-all duration-200" />
                </a>
              </li>
            ))}
          </ul>

          {/* Divider */}
          <div className="my-6 h-px bg-gradient-to-l from-transparent via-main-100/10 to-transparent" />

          {/* Quick actions */}
          <div className="px-2 space-y-3">
            <button className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-l from-main-100 to-main-300 text-white text-sm font-bold rounded-xl shadow-md shadow-main-100/20 active:scale-[0.98] transition-all duration-300 cursor-pointer">
              <UserIcon className="w-4 h-4" />
              ورود / ثبت‌نام
            </button>

            <div className="grid grid-cols-2 gap-2">
              <button className="flex items-center justify-center gap-2 px-4 py-3 bg-main-100/5 border border-main-100/10 text-main-100 text-sm font-semibold rounded-xl hover:bg-main-100/10 transition-all duration-200 cursor-pointer">
                <MagnifyingGlassIcon className="w-4 h-4" />
                جستجو
              </button>
              <button className="relative flex items-center justify-center gap-2 px-4 py-3 bg-main-100/5 border border-main-100/10 text-main-100 text-sm font-semibold rounded-xl hover:bg-main-100/10 transition-all duration-200 cursor-pointer">
                <ShoppingCartIcon className="w-4 h-4" />
                سبد خرید
                {cartCount > 0 && (
                  <span className="absolute top-1.5 right-2 min-w-[18px] h-[18px] px-1 flex items-center justify-center text-[10px] font-bold text-white bg-main-500 rounded-full ring-2 ring-white">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Drawer footer */}
        <div className="px-5 py-4 border-t border-main-100/10">
          <p className="text-xs text-main-100/40 text-center">
            © ۱۴۰۴ ولیوت — همه حقوق محفوظ است
          </p>
        </div>
      </aside>
    </>
  );
}