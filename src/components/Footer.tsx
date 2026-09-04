import { Sun } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 text-white mb-6">
              <Sun className="w-6 h-6 text-amber-500" />
              <span className="font-semibold text-lg tracking-wide">SolarTech</span>
            </div>
            <p className="text-neutral-400 text-sm max-w-xs leading-relaxed">
              Accelerating the world's transition to sustainable energy with uncompromising technology.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-white mb-4">Research</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Efficiency Lab</a></li>
              <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Materials</a></li>
              <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Architecture</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-white mb-4">Products</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Nova Panel</a></li>
              <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Nova Cell</a></li>
              <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Inverter</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-white mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-neutral-900 text-xs text-neutral-500">
          <p>Â© 2026 SolarTech Nova. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
