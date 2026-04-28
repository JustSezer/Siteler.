import Image from "next/image";

export default function SocialSidebar() {
  return (
    <div className="fixed right-3 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3">
      <a href="https://wa.me/905424136532" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:opacity-70 transition-opacity">
        <Image src="/images/instagram-icon.png" alt="WhatsApp" width={28} height={28} className="w-7 h-7 object-contain" unoptimized />
      </a>
      <a href="https://instagram.com/birinciogluticaret" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-70 transition-opacity">
        <Image src="/images/facebook-icon.png" alt="Instagram" width={36} height={36} className="w-7 h-7 object-contain" unoptimized />
      </a>
      <a href="https://facebook.com/birinciogluticaret" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:opacity-70 transition-opacity">
        <Image src="/images/whatsapp-icon.png" alt="Facebook" width={36} height={36} className="w-8 h-8 object-contain" unoptimized />
      </a>
    </div>
  );
}
