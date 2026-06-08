"use client";

import Logo from "@/components/common/Logo";
import { cn } from "@/lib/utils";
import { navConfig } from "@/config/site";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function MobileDrawer({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  if (!mounted) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-[60] transition-opacity",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-full sm:w-80 bg-background z-[61] transform transition-transform border-l border-border",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-border">
          <Link href="/" onClick={onClose} className="flex items-center">
            <Logo className="h-8 w-auto" />
          </Link>
          <button
            onClick={onClose}
            className="p-2 text-foreground hover:text-accent transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="py-6 px-4 space-y-4">
          {navConfig.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block font-body text-lg text-foreground hover:text-accent hover:bg-accent/10 px-4 py-3 rounded transition-colors"
              onClick={onClose}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border">
          <Button
            asChild
            className="w-full bg-accent text-accent-foreground hover:bg-accent-hover"
            size="lg"
          >
            <a href="/contatti" onClick={onClose}>
              Parliamo del tuo progetto
            </a>
          </Button>
        </div>
      </div>
    </>
  );
}
