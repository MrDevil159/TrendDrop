import { Link } from 'react-router-dom'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

// --- EMAILJS CONFIGURATION ---
const EMAILJS_SERVICE_ID = "service_otttqcq"; // Get from EmailJS dashboard
const EMAILJS_TEMPLATE_ID = "template_qryn1kb"; // Get from EmailJS dashboard
const EMAILJS_PUBLIC_KEY = "uuRetCrKZahvSkBbx"; // Get from EmailJS dashboard
// -----------------------------

const Home = () => {
  const form = useRef()
  const [status, setStatus] = useState('')

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
          setStatus('JOINED!')
          form.current.reset()
      }, (error) => {
          console.log(error.text)
          setStatus('FAILED.')
      })
  }

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative w-full h-[65vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover grayscale-[0.2]" 
            src="/hero.png" 
            alt="Trend Drop Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
        </div>
        <div className="relative z-10 px-margin-mobile md:px-margin-desktop w-full">
          <div className="max-w-4xl">
            <h1 className="font-headline text-7xl md:text-9xl text-white uppercase leading-[0.9] mb-8">
              NEW DROP:<br/>
              <span className="text-primary-container">NEON PULSE</span>
            </h1>
            <Link 
              to="/shop"
              className="inline-block bg-primary-container text-on-primary-fixed font-body text-xs font-bold px-10 py-4 uppercase tracking-[0.2em] hover:scale-105 transition-transform duration-300"
            >
              Shop the Latest
            </Link>
          </div>
        </div>
      </section>

      {/* Aesthetics Carousel */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop">
        <h2 className="font-headline text-5xl md:text-6xl mb-12 uppercase leading-none">Curated<br className="md:hidden"/> Aesthetics</h2>
        <div className="flex gap-gutter overflow-x-auto hide-scrollbar -mx-margin-mobile px-margin-mobile md:mx-0 md:px-0">
          {[
            {
              title: "Y2K",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjOA07HOd3XuKnZDjxq6tOBGfTl0vIO7Mfximu704I8sfHIYE7FL1bNvsgdFyJK8OOZ-4wkspbjq8ZcVhJfRgBiLceYEzQ4G_DVOfwo42sutCv_h5MDdCwIXIAgNo4zeHxOj11DtLKUX00O9cb24fLPI7nB-Z-n6EA-RQfDvTk0MPY9pLuVMXexNexyq1o3CHEUX-fVjIViBSlsbhRJireT3rh4e4OumGeBgRruKaynGcjEGlCjcoxYE5fPotuEgAXpmZrG7DbuzNh"
            },
            {
              title: "Grunge",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKbPEtYdaP6ztsKU6ektCJHL3RRZSZTJzxSmUvzYAaHwumSz0cfjVSj69mwox879XuyT-Zy_iDNFjdph_nxtZEgQbIVodbBPS7LUg4vyxCYzItUGYUebMwbsaq3N3HRGM4NwrtahOYdVmDr5Dcs7Scx7EcVVSoYBgfOgfL-ktGOKS3-kp5wiHO0c-G6BVrx1J08-LUkry_CCut15numCftNpW7NxBY2wi9pHEqKOkD9-lYrhy7AqMJv6R56iLZORnpcROB8d4tFYIP"
            },
            {
              title: "Cyberpunk",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAArpsPMmomytJnlA_K8TPnwboAk7u9nc2EsWukieTPQztwdvJolZg0zn2VZ2AaNxUqwG6NteM01-TxMdqyS1Mw1ZTH4VIFGIM30wVrgRLIdaCV-F6rn-skMaLkMMuH6LHuvZ_X9uK65pzstKY0wPAgggEgfEnWuYfGS1PjTtvA3nnEm9rpWwrB0vwAkNOYmnm7r4YoFVAzHH-eGOLty7rU3N1qYXh9vSRm4hTLR1IBr6jjOfOHTnI3WH9z-2t-sVmOkaZLqtweIRnG"
            }
          ].map((item, idx) => (
            <Link to={`/shop?aesthetic=${item.title}`} key={idx} className="flex-shrink-0 w-[320px] md:w-[450px] group cursor-pointer">
              <div className="glass-container aspect-[3/4] overflow-hidden mb-4">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  src={item.img} 
                  alt={item.title}
                />
              </div>
              <div className="flex justify-between items-center border-b border-white/20 pb-2">
                <span className="font-headline text-3xl uppercase">{item.title}</span>
                <span className="material-symbols-outlined text-secondary">arrow_outward</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Face of the Brand Wall */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <span className="font-body text-xs font-bold text-primary-container uppercase tracking-[0.2em] mb-4 block">COMMUNITY FIRST</span>
            <h2 className="font-headline text-5xl md:text-6xl uppercase leading-none">Face of the Brand</h2>
          </div>
          <p className="font-body text-lg max-w-md text-on-surface-variant">
            Tag @TRENDDROP in your fits to be featured on the main wall. Real style, real people.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="relative group overflow-hidden bg-surface-container h-[400px]">
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3aN7JC8q2qc6ONLgW9G6iWlZl_QV49FA4bmwy3HALlcHKwTJNBSIxAxbBn_1xcs5L25h8r1igXnuezg312U0tpnPDpYUqvFxCI1IQU8a8OW1Yr2qErSTkYTpk1ahp2VoqzHOAzaI6IG_Cyqs4D44x6m7625NfbkN1jJYIepBpQW4uY6whP_shnsjEEOwwP2ar-7r13_4HdjFEw6WiXsHe4rCvdRzHVOZYFp-bOilyVKYRyVgRwDmN4bFiLcbR-_VPXtax2MLg-HSj" alt="Community 1" />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="font-body text-xs text-white mb-2">@user_fit</span>
              <Link to="/featured" className="bg-white text-black font-body text-[10px] font-bold py-2 px-4 uppercase w-full text-center">Featured info</Link>
            </div>
          </div>
          <div className="relative group overflow-hidden bg-surface-container h-[500px]">
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYg7fcufCfBSnh-dMTIsfqQiUOX3PDKmBCRuwm8Km-5YLp2mi8uKgWI_o0wHFdDzlJu_NFjx920DwdBlKFLxNiNJSYgFGJBCcFVOtm9x3IzeQuj3HjeDxK-84MHTKeELwNO4N926CoBJRLK3yT6unbxy38YFURu06vtWi175r21hFyLlapxlw12NfHWe1DI4YkYc6bS-KSRsPdgC9QWY-GLdh0Zz8TL5ItL8y_DK-jleYo4R9hzLBtB6IW-yXU2cTJ3y6GcCbKkcmP" alt="Community 2" />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="font-body text-xs text-white mb-2">@street_vibe</span>
              <Link to="/shop?aesthetic=Cyberpunk" className="bg-white text-black font-body text-[10px] font-bold py-2 px-4 uppercase w-full text-center">Shop this look</Link>
            </div>
          </div>
          <div className="relative group overflow-hidden bg-surface-container h-[450px]">
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-NCKupgfpr4qayeuWvpCuJ1dpNBbtHeYd0Ygc4vfTCA_RZwBIkdWbMTTHqEWJE4L7WjoFBg5SYudLj6aCbaXFuRM0rXLK_j2vuTLoYOoYTyC6YMn_-ciu54O19uJvPUGdXt_vv-4G-DcjCQD66wM0oXqTM5Wtie-H5-mJ2qzdFHQp1F6Jr3Y6ItghO8TomMI5QVdcsJZdsqCpbNS8eM_rr9CNc_9Le5VQuC0jTfXRPEUVA68WEK7mEfrMQ3Iovoa_XPZCMxgoMaDo" alt="Community 3" />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="font-body text-xs text-white mb-2">@cyber_fit</span>
              <Link to="/shop?aesthetic=Grunge" className="bg-white text-black font-body text-[10px] font-bold py-2 px-4 uppercase w-full text-center">Shop this look</Link>
            </div>
          </div>
          <div className="relative group overflow-hidden bg-surface-container h-[550px]">
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBomc2J-IP9B2j-vF1ZoLey9ZIhKaPKSyO2pEpazv55G611uQjGGx2eElpks5NjwGyWyQJ-zmAn5Y1_4_f4W9dS8uLGXeE0YRUhsI4u2U6LaxqW2iaV6totlSeZkNmmtpC89p65lFRk99ImME-GmMd5FjN8pOqWcTdI6dG0ua_5D7DioCoef_nc2BZVzqFa-i4LU8Vu_5dqY1uwQ7KcFh7-p38O6cZ85Vyc61J39M9uFk6HzAtP7FnYC7CQzqyjvv9iX09fZyh7OwOX" alt="Community 4" />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="font-body text-xs text-white mb-2">@night_crawl</span>
              <Link to="/shop?aesthetic=Y2K" className="bg-white text-black font-body text-[10px] font-bold py-2 px-4 uppercase w-full text-center">Shop this look</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop">
        <div className="glass-panel p-12 md:p-24 flex flex-col items-center text-center">
          <h2 className="font-headline text-6xl md:text-8xl uppercase mb-8 leading-none">GET EARLY ACCESS<br/>TO THE NEXT DROP</h2>
          <p className="font-body text-lg mb-12 max-w-2xl text-on-surface-variant">Join the inner circle and receive notification 1 hour before every release. Limited stock only.</p>
          <form 
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col md:flex-row w-full max-w-xl gap-4"
          >
            <input 
              name="user_email"
              className="bg-transparent border-b border-white/20 py-4 px-2 focus:border-primary-container focus:ring-0 font-headline text-3xl uppercase w-full outline-none transition-colors" 
              placeholder="YOUR@EMAIL.COM" 
              type="email"
              required
            />
            <button 
              type="submit" 
              disabled={status === 'SENDING...'}
              className="bg-primary-container text-on-primary-fixed font-body text-xs font-bold px-12 py-4 uppercase whitespace-nowrap hover:scale-105 transition-all disabled:opacity-50"
            >
              {status || 'SIGN ME UP'}
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Home
