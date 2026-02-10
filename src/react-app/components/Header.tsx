import { Link, useLocation } from 'react-router';
import { Leaf, Menu, X } from 'lucide-react';
import { useState } from 'react';
import React from 'react';
import VitaMealLogo from '../../assets/vitameal-logo.png';

const BRAND_NAME = 'VitaMeal';
const TAGLINE = 'Ăn ngon, sống khỏe, mỗi ngày cho 1 người';

export default function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Trang Chủ' },
    { path: '/menu', label: 'Thực Đơn' },
    { path: '/subscription', label: 'Gói Đăng Ký' },
    { path: '/dashboard', label: 'Bảng Điều Khiển' },
    { path: '/about', label: 'Về Chúng Tôi' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-transparent flex items-center justify-center">
              <img
                src={VitaMealLogo}
                alt="VitaMeal logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div
                className="text-xl font-bold text-gray-900"
                style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}
              >
                {BRAND_NAME}
              </div>
              <div className="text-sm text-gray-500">{TAGLINE}</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-colors ${
                  isActive(link.path)
                    ? 'text-[#2D958E]'
                    : 'text-gray-700 hover:text-[#2D958E]'
                }`}
                style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Link
            to="/subscription"
            className="hidden md:block px-6 py-2.5 bg-[#FF8A5C] hover:bg-[#ff7a48] text-white rounded-full font-semibold text-sm shadow-lg shadow-orange-600/20 transition-all duration-300 transform hover:scale-105"
            style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}
          >
            Đăng Ký Ngay
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-[#2D958E] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-semibold transition-colors ${
                    isActive(link.path)
                      ? 'text-[#2D958E]'
                      : 'text-gray-700 hover:text-[#2D958E]'
                  }`}
                  style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/subscription"
                onClick={() => setMobileMenuOpen(false)}
                className="px-6 py-2.5 bg-[#FF8A5C] text-white rounded-full font-semibold text-sm text-center shadow-lg"
                style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}
              >
                Đăng Ký Ngay
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
