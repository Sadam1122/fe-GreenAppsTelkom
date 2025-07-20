"use client";

import { useState } from "react";
import Link from "next/link";
import { FaRecycle, FaUser, FaCog, FaSignOutAlt, FaBars, FaUserPlus, FaRocket } from "react-icons/fa";
import { useAuth } from "../hook/useAuth";

// --- Komponen Animasi Loading Baru yang Profesional ---
const LoadingOverlay = () => (
  <div className="fixed inset-0 bg-gradient-to-b from-gray-900 to-black flex justify-center items-center z-50 overflow-hidden">
    <div className="text-center">
      {/* 1. Animasi Roket Lepas Landas (bukan lagi memantul) */}
      <FaRocket className="text-white text-7xl mx-auto animate-launch" />

      {/* 2. Teks Informasi dengan animasi fade-in */}
      <p 
        className="text-white text-2xl mt-8 font-bold animate-fadeInText"
        style={{ animationDelay: '200ms' }} // Sedikit jeda agar muncul setelah roket bergerak
      >
        Beralih ke Produksi...
      </p>
    </div>
  </div>
);


export default function DashboardHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleProduksiClick = () => {
    setIsLoading(true);
    
    // Durasi timeout disamakan dengan durasi animasi (1.5s)
    setTimeout(() => {
      window.location.href = "https://produksi.greenappstelkom.id/";
    }, 1500);
  };

  return (
    <>
      {/* Tampilkan overlay saat isLoading bernilai true */}
      {isLoading && <LoadingOverlay />}

      <header className="bg-gradient-to-r from-green-600 to-emerald-500 py-4 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href="/dashboard" className="flex items-center space-x-2">
              <FaRecycle className="text-white text-3xl" />
              <span className="text-2xl font-bold text-white">GreenAppsTelkom</span>
            </Link>

            {/* Navigasi Desktop */}
            <nav className="hidden md:flex items-center space-x-6">
              <NavLink href="/dashboard" icon={<FaRecycle />}>Dashboard</NavLink>
              <NavLink href="/profile" icon={<FaUser />}>Profile</NavLink>
              <NavLink href="/settings" icon={<FaCog />}>Settings</NavLink>

              {(user?.role.toLowerCase() === "admin" || user?.role.toLowerCase() === "superadmin") && (
                <NavLink href="/register" icon={<FaUserPlus />}>Add Account</NavLink>
              )}
              
              <div className="w-px h-6 bg-green-400"></div>

              {(user?.role.toLowerCase() === "admin" || user?.role.toLowerCase() === "superadmin") && (
                <button
                  onClick={handleProduksiClick}
                  className="flex items-center space-x-2 px-4 py-2 font-bold text-green-700 bg-white rounded-full shadow-md transform transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-100 hover:shadow-lg active:scale-95"
                >
                  <FaRocket />
                  <span>PRODUKSI</span>
                </button>
              )}
              
              <button onClick={logout} className="flex items-center space-x-2 text-white hover:text-green-200 transition-colors">
                <FaSignOutAlt />
                <span>Logout</span>
              </button>

              {user && (
                <span className="text-white font-semibold">
                  Welcome, {user.name} ({user.role})
                </span>
              )}
            </nav>

            {/* Tombol Menu Mobile */}
            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <FaBars className="text-2xl" />
            </button>
          </div>

          {/* Navigasi Mobile */}
          {isMenuOpen && (
            <nav className="mt-4 flex flex-col space-y-4 md:hidden">
              <NavLink href="/dashboard" icon={<FaRecycle />}>Dashboard</NavLink>
              <NavLink href="/profile" icon={<FaUser />}>Profile</NavLink>
              <NavLink href="/settings" icon={<FaCog />}>Settings</NavLink>
              {(user?.role.toLowerCase() === "admin" || user?.role.toLowerCase() === "superadmin") && (
                <NavLink href="/register" icon={<FaUserPlus />}>Add Account</NavLink>
              )}

              <hr className="border-green-400 my-2" />

              {(user?.role.toLowerCase() === "admin" || user?.role.toLowerCase() === "superadmin") && (
                <button
                  onClick={handleProduksiClick}
                  className="flex items-center justify-center space-x-2 px-4 py-2 font-bold text-green-700 bg-white rounded-full shadow-md transform transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-100 hover:shadow-lg active:scale-95"
                >
                  <FaRocket />
                  <span>PRODUKSI</span>
                </button>
              )}

              <button onClick={logout} className="flex items-center space-x-2 text-white hover:text-green-200 transition-colors">
                <FaSignOutAlt />
                <span>Logout</span>
              </button>
              {user && (
                <span className="text-white font-semibold text-center py-2">
                  Welcome, {user.name} ({user.role})
                </span>
              )}
            </nav>
          )}
        </div>
      </header>
    </>
  );
}

// Komponen NavLink tidak perlu diubah
function NavLink({ href, icon, children }: { href: string; icon: React.ReactNode; children: React.ReactNode; }) {
  return (
    <Link href={href} className="flex items-center space-x-2 text-white hover:text-green-200 transition-colors">
      {icon}
      <span>{children}</span>
    </Link>
  );
}