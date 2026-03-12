'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">LearnPlatform</h3>
            <p className="text-gray-600 text-sm">
              Empowering learners worldwide with quality education.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/courses" className="hover:text-black">Courses</Link></li>
              <li><Link href="/features" className="hover:text-black">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-black">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/about" className="hover:text-black">About</Link></li>
              <li><Link href="/contact" className="hover:text-black">Contact</Link></li>
              <li><Link href="#" className="hover:text-black">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="#" className="hover:text-black">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-black">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-black">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-500">
          © 2026 LearnPlatform. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
