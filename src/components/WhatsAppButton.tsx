import { site } from "@/lib/site";
import Icon from "./Icon";

export default function WhatsAppButton() {
  const href = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Hi Infi Books, I'd like to know more about your accounting services."
  )}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full bg-[#25D366] py-3 pl-3 pr-4 text-white shadow-soft transition-transform hover:scale-105 sm:bottom-7 sm:right-7"
    >
      <span className="flex h-8 w-8 items-center justify-center">
        <Icon name="whatsapp" className="h-7 w-7" strokeWidth={0} fill="currentColor" />
      </span>
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-[140px] sm:inline">
        Chat with us
      </span>
    </a>
  );
}
