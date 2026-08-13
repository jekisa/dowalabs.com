"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";

const whatsappUrl =
  "https://wa.me/6282298062959?text=Halo%20Dowa%20Labs%2C%20saya%20ingin%20bertanya%20tentang%20layanan%20Anda";

export default function WhatsAppFab() {
  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat dengan kami di WhatsApp"
      title="Chat dengan kami"
      className="group fixed bottom-4 right-4 z-[70] grid size-12 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition-shadow duration-200 hover:shadow-xl md:bottom-8 md:right-8 md:size-14"
      animate={{ scale: [1, 1.04, 1] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.96 }}
    >
      <MessageCircle className="size-6 md:size-7" strokeWidth={2.2} />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-slate-950 px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 md:block">
        Chat dengan kami
      </span>
    </motion.a>
  );
}
