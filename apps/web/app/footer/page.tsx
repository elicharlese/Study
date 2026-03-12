export default function Footer() {
  return (
    <footer className="flex gap-6 flex-wrap items-center justify-center p-8 font-[family-name:var(--font-geist-sans)]">
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="#"
      >
        About
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="#"
      >
        Privacy
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="#"
      >
        Terms
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="#"
      >
        Contact
      </a>
      <p className="text-sm text-gray-500">
        © 2026 All rights reserved.
      </p>
    </footer>
  );
}
