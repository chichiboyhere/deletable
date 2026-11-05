"use client";

import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

const EndOfYearPromo = () => {
  const promoText = (
    <div className="flex items-center gap-8 shrink-0 pr-8">
      <span className="flex items-center gap-2">
        🎉{" "}
        <strong className="text-amber-300 font-semibold">
          Special End-of-Year Offer!
        </strong>{" "}
        Save up to 25% on Corporate & Private Security, Bouncers, Ushers, Body
        Guards, Airport Pickup, CCTV Camera Installations & Car rentals for the
        holiday season.
      </span>
      <span className="text-blue-300">•</span>
      <span className="flex items-center gap-2">
        🛡️ <strong>DCommando Security</strong> — Reliable protection for your
        festive events & travel.
      </span>
      <span className="text-blue-300">•</span>
      <span className="flex items-center gap-2">
        ⚡ Limited slot availability for December & January dates. Click here to
        book now!
      </span>
    </div>
  );

  return (
    <section>
      <Link
        href="/services"
        className="block bg-blue-900 dark:bg-blue-950 text-white border-b border-blue-800 dark:border-blue-900 hover:bg-blue-950 transition-colors duration-500 overflow-hidden group cursor-pointer py-1.5 marquee marquee2"
        aria-label="Special End of Year Offer Banner"
      >
        <div className="py-2.5 px-4 max-w-7xl mx-auto flex items-center justify-between">
          {/* Left badge */}
          <div className="flex items-center gap-2 shrink-0 bg-blue-800 dark:bg-blue-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-amber-300 shadow-sm z-10">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>Promo</span>
          </div>

          {/* Marquee Container */}
          <div className="relative w-full overflow-hidden mx-4 flex items-center">
            <div className="flex w-max animate-marquee whitespace-nowrap text-xs sm:text-sm font-medium tracking-wide hover:[animation-play-state:paused]">
              {promoText}
              {promoText}
            </div>
          </div>

          {/* Right action link */}
          <div className="flex items-center gap-1 text-xs font-semibold text-amber-300 group-hover:translate-x-1 transition-transform shrink-0 z-10">
            <span className="hidden md:inline">Claim Offer</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </Link>
    </section>
  );
};

export default EndOfYearPromo;
