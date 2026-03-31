/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Menu, User, Play, Clapperboard, Copyright, Music, AudioLines, X, ChevronDown } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#c49548] selection:text-black font-sans pb-8 lg:pb-0 lg:h-screen lg:flex lg:flex-row lg:overflow-hidden">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-6 lg:px-12 bg-gradient-to-b from-black/80 via-black/40 to-transparent">
        <div className="flex items-center gap-4">
          <Menu 
            className="w-8 h-8 text-white cursor-pointer hover:text-[#c49548] transition-colors" 
            strokeWidth={1.5} 
            onClick={() => setIsMenuOpen(true)}
          />
          <a href="https://creativeartistworld.net/" className="flex flex-col hover:opacity-80 transition-opacity">
            <span className="text-3xl font-display font-medium leading-none tracking-wide text-white">CAM</span>
            <span className="text-[7px] uppercase tracking-[0.25em] text-white/90 mt-1">Creative Artist World</span>
          </a>
        </div>
        <div className="flex items-center gap-5">
          <a href="https://creativeartistworld.net/my-account/?register">
            <User className="w-6 h-6 text-white fill-current cursor-pointer hover:text-[#c49548] transition-colors" />
          </a>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] flex">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Drawer */}
          <div className="relative w-[85%] max-w-[320px] h-full bg-[#0a0a0a] border-r border-white/10 flex flex-col shadow-2xl animate-in slide-in-from-left duration-300">
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <span className="text-xl font-display font-bold text-white tracking-widest uppercase">Menu</span>
              <button onClick={() => setIsMenuOpen(false)} className="p-2 -mr-2 text-white/70 hover:text-[#c49548] transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto py-4">
              <a href="https://creativeartistworld.net/" className="flex items-center justify-between px-6 py-4 text-sm font-medium text-white/90 uppercase tracking-wider border-b border-white/5 hover:bg-white/5 hover:text-[#c49548] transition-all">
                Home
              </a>
              <a href="https://creativeartistworld.net/discover-top-creative-talents/" className="flex items-center justify-between px-6 py-4 text-sm font-medium text-white/90 uppercase tracking-wider border-b border-white/5 hover:bg-white/5 hover:text-[#c49548] transition-all">
                Artist Archive
              </a>
              <a href="https://creativeartistworld.net/hire-creative-professionals/" className="flex items-center justify-between px-6 py-4 text-sm font-medium text-white/90 uppercase tracking-wider border-b border-white/5 hover:bg-white/5 hover:text-[#c49548] transition-all">
                Find Artist
              </a>
              <a href="https://creativeartistworld.net/film-distribution-services/" className="flex items-center justify-between px-6 py-4 text-sm font-medium text-white/90 uppercase tracking-wider border-b border-white/5 hover:bg-white/5 hover:text-[#c49548] transition-all">
                Film Distribution
              </a>
              <a href="https://creativeartistworld.net/about-creative-talent-management/" className="flex items-center justify-between px-6 py-4 text-sm font-medium text-white/90 uppercase tracking-wider border-b border-white/5 hover:bg-white/5 hover:text-[#c49548] transition-all">
                About Us
              </a>
              <a href="https://creativeartistworld.net/sync-licensing/" className="flex items-center justify-between px-6 py-4 text-sm font-medium text-white/90 uppercase tracking-wider border-b border-white/5 hover:bg-white/5 hover:text-[#c49548] transition-all">
                Sync Licensing
              </a>
              <a href="https://creativeartistworld.net/copyright/" className="flex items-center justify-between px-6 py-4 text-sm font-medium text-white/90 uppercase tracking-wider border-b border-white/5 hover:bg-white/5 hover:text-[#c49548] transition-all">
                Copyright
              </a>
              <a href="https://creativeartistworld.net/my-account/" className="flex items-center justify-between px-6 py-4 text-sm font-medium text-white/90 uppercase tracking-wider border-b border-white/5 hover:bg-white/5 hover:text-[#c49548] transition-all">
                My account
              </a>
              <a href="https://creativeartistworld.net/contact-us/" className="flex items-center justify-between px-6 py-4 text-sm font-medium text-white/90 uppercase tracking-wider border-b border-white/5 hover:bg-white/5 hover:text-[#c49548] transition-all">
                Contact Us
              </a>
            </div>
            
            <div className="p-6 mt-auto border-t border-white/10">
              <a href="https://creativeartistworld.net/add-listing/" className="flex items-center justify-center w-full py-4 bg-gold-gradient rounded-md text-black font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity">
                Get Representation
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Video Modal Overlay */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity"
            onClick={() => setIsVideoModalOpen(false)}
          />
          
          {/* Video Container */}
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300 z-10">
            <button 
              onClick={() => setIsVideoModalOpen(false)} 
              className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-md transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <iframe 
              src="https://www.youtube.com/embed/HDODufZ19sE?autoplay=1" 
              title="YouTube video player" 
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* Hero Image */}
      <div className="relative w-full h-[60vh] min-h-[450px] lg:h-full lg:w-1/2 lg:min-h-screen bg-[#1a0b0b] shrink-0">
        <img 
          src="/artist.jpg" 
          alt="Shifupro" 
          className="w-full h-full object-cover object-[center_15%] lg:object-[center_20%]"
          referrerPolicy="no-referrer"
        />
        {/* Top gradient for header blending */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/90 via-[#0a0a0a]/20 via-20% to-transparent pointer-events-none" />
        {/* Bottom gradient for seamless content blending (mobile only) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/90 via-25% to-transparent pointer-events-none lg:hidden" />
        {/* Right gradient for desktop blending */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-transparent via-[#0a0a0a]/40 to-[#0a0a0a] pointer-events-none" />
      </div>

      {/* Content */}
      <main className="px-5 -mt-32 relative z-10 max-w-md mx-auto lg:max-w-2xl lg:mx-0 lg:w-1/2 lg:mt-0 lg:h-full lg:flex lg:flex-col lg:justify-center lg:px-16 lg:py-20 lg:overflow-y-auto">
        <div className="space-y-3">
          <h2 className="text-[10px] uppercase tracking-[0.15em] text-white/90 font-medium">
            Featured Artist of the Month
          </h2>
          <a href="https://creativeartistworld.net/listing/shifupro/" className="inline-block px-4 py-1.5 rounded-full border border-[#c49548] text-[#c49548] text-[11px] font-semibold uppercase tracking-widest hover:bg-[#c49548]/10 transition-colors">
            June 2026
          </a>
        </div>

        <h1 className="text-[3.5rem] lg:text-[5rem] font-display font-bold tracking-tight leading-none mt-3">
          <span className="text-white">SHIFU</span>
          <span className="text-gold-gradient">PRO</span>
        </h1>

        <div className="mt-4 space-y-1 lg:space-y-2 lg:mt-6">
          <p className="text-[10px] lg:text-[12px] font-medium uppercase tracking-[0.15em] text-white">Producer • Mix & Master Engineer</p>
          <p className="text-[10px] lg:text-[12px] font-medium uppercase tracking-[0.15em] text-[#c49548]">Afrobeats Architect</p>
        </div>

        <div className="mt-6 lg:mt-8 text-[15px] lg:text-[18px] font-medium leading-relaxed space-y-1 lg:space-y-2">
          <p className="text-white">
            Shaping the Future of Afrobeats from <br className="lg:hidden"/>
            <span className="text-[#c49548]">Nigeria to the World.</span>
          </p>
          <p className="text-white">
            Innovation. Sound. Global Impact.
          </p>
        </div>

        <div className="w-full h-[1px] bg-[#c49548]/40 my-6 lg:my-10" />

        {/* Buttons */}
        <div className="space-y-3 lg:space-y-0 lg:flex lg:gap-4">
          <button 
            onClick={() => setIsVideoModalOpen(true)}
            className="w-full lg:w-auto lg:px-8 bg-gold-gradient py-3.5 lg:py-4 rounded-md flex items-center justify-center gap-2 text-black font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            <Play className="w-4 h-4 fill-current" />
            Watch the Promo
          </button>

          <div className="grid grid-cols-2 gap-3 lg:flex lg:gap-4">
            <a href="https://creativeartistworld.net/listing/shifupro/" className="flex items-center justify-center py-3.5 lg:py-4 lg:px-8 rounded-md border border-[#c49548] text-[#c49548] font-semibold text-[10px] lg:text-xs uppercase tracking-wider hover:bg-[#c49548]/10 transition-colors text-center">
              Book Shifupro
            </a>
            <a href="https://forms.gle/cfENG6v6jA2jgfge8" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center py-3.5 lg:py-4 lg:px-8 rounded-md bg-[#2A2A2A] text-white font-semibold text-[10px] lg:text-xs uppercase tracking-wider hover:bg-[#333] transition-colors text-center">
              Explore Partnership
            </a>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-4 mt-8 pt-2 lg:mt-12 lg:gap-8">
          <a href="https://www.beatstars.com/shifupro" className="flex flex-col items-center justify-start gap-3 border-r border-white/10 lg:border-none hover:opacity-80 transition-opacity">
            <AudioLines className="w-7 h-7 lg:w-8 lg:h-8 text-[#c49548]" strokeWidth={1.5} />
            <div className="text-center">
              <div className="text-[8px] lg:text-[10px] font-semibold uppercase tracking-widest text-[#c49548]">Beats</div>
              <div className="text-[8px] lg:text-[10px] font-semibold uppercase tracking-widest text-[#c49548]">Created</div>
            </div>
          </a>

          <a href="https://creativeartistworld.net/sync-licensing/" className="flex flex-col items-center justify-start gap-3 border-r border-white/10 lg:border-none hover:opacity-80 transition-opacity">
            <Clapperboard className="w-7 h-7 lg:w-8 lg:h-8 text-[#c49548]" strokeWidth={1.5} />
            <div className="text-center">
              <div className="text-[8px] lg:text-[10px] font-semibold uppercase tracking-widest text-[#c49548]">Film</div>
              <div className="text-[8px] lg:text-[10px] font-semibold uppercase tracking-widest text-[#c49548]">Sound</div>
            </div>
          </a>

          <a href="https://creativeartistworld.net/copyright/" className="flex flex-col items-center justify-start gap-3 border-r border-white/10 lg:border-none hover:opacity-80 transition-opacity">
            <Copyright className="w-7 h-7 lg:w-8 lg:h-8 text-[#c49548]" strokeWidth={1.5} />
            <div className="text-center">
              <div className="text-[8px] lg:text-[10px] font-semibold uppercase tracking-widest text-[#c49548]">Copyright</div>
              <div className="text-[8px] lg:text-[10px] font-semibold uppercase tracking-widest text-[#c49548]">& Rights</div>
            </div>
          </a>

          <a href="https://creativeartistworld.net/sync-licensing/" className="flex flex-col items-center justify-start gap-3 hover:opacity-80 transition-opacity">
            <Music className="w-7 h-7 lg:w-8 lg:h-8 text-[#c49548]" strokeWidth={1.5} />
            <div className="text-center">
              <div className="text-[8px] lg:text-[10px] font-semibold uppercase tracking-widest text-[#c49548]">Sync</div>
              <div className="text-[8px] lg:text-[10px] font-semibold uppercase tracking-widest text-[#c49548]">Licensing</div>
            </div>
          </a>
        </div>

        {/* Footer */}
        <footer className="mt-12 lg:mt-auto lg:pt-12 text-center lg:text-left">
          <span className="text-[9px] lg:text-[11px] uppercase tracking-[0.3em] text-white/70 font-medium">CreativeArtistWorld.net</span>
          <div className="w-32 h-1 bg-white mx-auto lg:mx-0 mt-6 rounded-full lg:hidden" />
        </footer>
      </main>
    </div>
  );
}
