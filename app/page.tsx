import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex flex-1 flex-col items-center justify-center text-center max-w-md mx-auto px-6 py-12">
        {/* Logo */}
        <Image
          src="/twelveinc_logo.png"
          alt="Twelve USA Inc."
          width={280}
          height={140}
          priority
          className="mb-12"
        />

        {/* Maintenance Message */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="inline-block w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
            <p className="text-lg text-zinc-600 font-medium tracking-wide uppercase">
              Under Maintenance
            </p>
          </div>
          <p className="text-zinc-500 text-sm">
            We&apos;re working on something great. Check back soon.
          </p>
        </div>

        {/* Contact Info */}
        <div className="border-t border-zinc-200 pt-8 text-sm text-zinc-600">
          <a 
            href="mailto:info@twelveusainc.com"
            className="hover:text-zinc-900 transition-colors"
          >
            info@twelveusainc.com
          </a>
          <p className="mt-3 text-zinc-400">
            999 Eller Bay Drive, Bay 4, Fort Lauderdale, FL 33316
          </p>
        </div>
      </main>

      {/* Sticky Footer */}
      <footer className="sticky bottom-0 w-full bg-white border-t border-zinc-100 py-4">
        <p className="text-center text-xs text-zinc-400">
          © {new Date().getFullYear()} Twelve USA Inc. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
