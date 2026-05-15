import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

// --- EMAILJS CONFIGURATION ---
const EMAILJS_SERVICE_ID = "service_otttqcq"; // Get from EmailJS dashboard
const EMAILJS_TEMPLATE_ID = "template_ehvjquk"; // Get from EmailJS dashboard
const EMAILJS_PUBLIC_KEY = "uuRetCrKZahvSkBbx"; // Get from EmailJS dashboard
// -----------------------------

const Featured = () => {
  const form = useRef()
  const fileInputRef = useRef()
  const [status, setStatus] = useState('')
  const [fileName, setFileName] = useState('')

  const handleUploadClick = () => {
    fileInputRef.current.click()
  }

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name)
    }
  }

  const sendEmail = (e) => {
    e.preventDefault()
    setStatus('SENDING...')

    emailjs.sendForm(
      EMAILJS_SERVICE_ID, 
      EMAILJS_TEMPLATE_ID, 
      form.current, 
      EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
          console.log(result.text)
          setStatus('SUBMITTED! WE\'LL CONTACT YOU FOR THE PHOTO.')
          form.current.reset()
          setFileName('')
      }, (error) => {
          console.log(error.text)
          setStatus('FAILED. TRY AGAIN.')
      })
  }

  return (
    <div className="animate-fade-in max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-section-gap">
      {/* Hero Title Section */}
      <div className="mb-16 md:mb-24 max-w-4xl">
        <span className="font-body text-xs font-bold text-primary-container tracking-[0.2em] uppercase block mb-4">Community Spotlight</span>
        <h1 className="font-headline text-7xl md:text-9xl uppercase leading-none text-white">Get <br className="hidden md:block"/>Featured</h1>
        <p className="mt-8 font-body text-lg text-on-surface-variant max-w-2xl">
          Our feed is a canvas for the unapologetic. Upload your best fit pic for a chance to be featured in our lookbook and across our global digital channels.
        </p>
      </div>

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
        {/* Upload Zone */}
        <div 
          onClick={handleUploadClick}
          className="lg:col-span-7 w-full aspect-square md:aspect-[4/5] glass-panel neon-border flex flex-col items-center justify-center p-8 text-center group cursor-pointer hover:bg-white/10 transition-all duration-500"
        >
          <div className="p-6 rounded-full bg-primary-container/10 mb-6 group-hover:scale-110 transition-transform duration-300">
            <span className="material-symbols-outlined text-primary-container !text-[48px]">
              {fileName ? 'check_circle' : 'cloud_upload'}
            </span>
          </div>
          <h3 className="font-headline text-4xl text-white mb-2 uppercase">
            {fileName ? 'IMAGE SELECTED' : 'DRAG YOUR FIT PIC HERE'}
          </h3>
          <p className="font-body text-xs font-bold text-on-surface-variant tracking-widest uppercase">
            {fileName ? fileName : 'MAX FILE SIZE 10MB • JPG OR PNG'}
          </p>
        </div>

        {/* Submission Form */}
        <div className="lg:col-span-5 glass-panel p-8 md:p-12">
          <form 
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-8"
          >
            {/* Hidden real file input */}
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileChange} 
              className="hidden" 
              accept="image/*"
            />
            <div className="flex flex-col gap-2">
              <label className="font-body text-xs font-bold text-on-surface-variant uppercase tracking-[0.2em]">Name</label>
              <input 
                name="user_name"
                className="bg-transparent border-b border-white/20 focus:border-primary-container outline-none py-3 text-white font-body placeholder:text-white/10 transition-colors duration-300" 
                placeholder="Your Full Name" 
                type="text"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-body text-xs font-bold text-on-surface-variant uppercase tracking-[0.2em]">Email Address</label>
              <input 
                name="user_email"
                className="bg-transparent border-b border-white/20 focus:border-primary-container outline-none py-3 text-white font-body placeholder:text-white/10 transition-colors duration-300" 
                placeholder="you@example.com" 
                type="email"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-body text-xs font-bold text-on-surface-variant uppercase tracking-[0.2em]">Social Handle (IG/TikTok)</label>
              <input 
                name="handle"
                className="bg-transparent border-b border-white/20 focus:border-primary-container outline-none py-3 text-white font-body placeholder:text-white/10 transition-colors duration-300" 
                placeholder="@username" 
                type="text"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-body text-xs font-bold text-on-surface-variant uppercase tracking-[0.2em]">Hashtag Used</label>
              <input 
                name="hashtag"
                className="bg-transparent border-b border-white/20 focus:border-primary-container outline-none py-3 text-white font-body placeholder:text-white/10 transition-colors duration-300" 
                placeholder="#TrendDropFit" 
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-body text-xs font-bold text-on-surface-variant uppercase tracking-[0.2em]">Item You're Wearing</label>
              <div className="relative">
                <select 
                  name="item"
                  className="w-full bg-transparent border-b border-white/20 focus:border-primary-container outline-none py-3 text-white font-body appearance-none cursor-pointer"
                >
                  <option className="bg-surface">Select Trend Piece</option>
                  <option className="bg-surface">Cyber-Pank Cargo Pants</option>
                  <option className="bg-surface">Neon Ghost Hoodie</option>
                  <option className="bg-surface">Oversized Mesh Tee</option>
                  <option className="bg-surface">Reflective Tactical Vest</option>
                </select>
                <span className="material-symbols-outlined absolute right-0 top-3 text-on-surface-variant pointer-events-none">expand_more</span>
              </div>
            </div>
            <div className="mt-8">
              <button 
                className="w-full bg-primary-container text-on-primary-container font-headline text-4xl py-6 px-10 uppercase hover:brightness-110 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(195,244,0,0.3)] disabled:opacity-50" 
                type="submit"
                disabled={status === 'SENDING...'}
              >
                {status || 'MAKE ME THE FACE'}
              </button>
            </div>
            <p className="font-body text-[10px] text-on-surface-variant/50 text-center uppercase tracking-widest">
              By submitting, you agree to our Content License Terms.
            </p>
          </form>
        </div>
      </section>

      {/* Inspiration Grid */}
      <section className="mt-section-gap">
        <h2 className="font-headline text-4xl text-white mb-12 uppercase tracking-tight">Recent Faces</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
          {[
            { handle: "@LUX_KIDD", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCm_gJLNmHBxVYZvs1N3v-ImEfx74xmV2YhSBMRhcJOAWiOppmsM1LJJI2rd0wMgcerrk-fTzu1SoX5MMx52muAiXsUhSL2unvocb2WAA0fNBnTA0X4ISVPtPPVprOS92HWs6b8Ojde8d3bcIh577xwkh66aJjnlKGIbdcVFwJD8w8KCsEBfj3CGVKIbKTejvxaesezUl4mAedVXC4WldXC1s8VHCAFqooHLON16QObWWgunUlE7LQpPJJfx6TLxOvpEAXcBe1y491F" },
            { handle: "@NEON_DRIFT", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGSAymv53gyGxl3LEoEtwinag2hz_ZM6gi01RwHEFrLWaeFh9VAxLdE1H9fov6s-6uDb7l9P-r4zNfQ3y6CvnBrbH665xEYusUBFPwRizkDiQYzEX5Cg54VCnp1URJk356pfeXidCwP7f7MSPZKqCMz3qhfNWZjrxteRfUnL-UYBLfxATxaPQEo-sjjrZnop4u5d4uhTCddlu_yYwPTgPNQPKTsj3BUahTInLQxZqIJpTRNjJkwmg64cltkgAkBPL7tLUFm8m27GNo" },
            { handle: "@WHITE_MIST", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBttdMac75eL1YJdwGD1uN2_0cAJrMwra5p4a719uyd3mfEhly_GnHGwGs5IEH4yXJfmfBEimoybegJF1050b2pdtjaF_7Gn665Co6tqNtUolpvXjUcOl6vtA9paSJZm7mjdMpidjhuK_CfDwFPNcuiNKObQvjjZbjcVAuQ8SWXWcKLp75euEoQroockuAaRcgM8GoekXLDhUKP83vogCA8WEuaeOi44njUCixuYX7dMYMUpn4lTfjqap3ngej9udw3RCR33WSo0AU6" },
            { handle: "@CYBER_ROOTS", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBRlk6He_Kv9A_QiZRfg5oL-gvj4Q0bfSihZYUnLL0fwQxj0hh5fJl4PtvoKXHz3mDswyVkWKL76SLJo4hWkKPECu_V2g3ph9KVHrYp5LRGQa-70hRTYnO066iP0Yc0ONhBRstzAuUiDYgCEYNQWakH8f54QCuWDTRIG9nx9nE2w9rFensTPUsUAMGDRe4pwsvtMGko7BYhREzfbUrYOTlHOzH_J-iW3jpeZBtIUX_Rmlta9UDuWszRpnk0CeChDJQaPXWQ7rvDssB" }
          ].map((face, idx) => (
            <div key={idx} className="relative aspect-[3/4] overflow-hidden group">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" src={face.img} alt={face.handle} />
              <div className="absolute bottom-0 left-0 p-4 w-full bg-gradient-to-t from-black/80 to-transparent">
                <p className="font-body text-xs font-bold text-white uppercase tracking-widest">{face.handle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Featured
