const Editorial = () => {
  return (
    <div className="animate-fade-in bg-[#0A0A0A] min-h-screen pb-section-gap">
      {/* Editorial Hero */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover opacity-60" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAArpsPMmomytJnlA_K8TPnwboAk7u9nc2EsWukieTPQztwdvJolZg0zn2VZ2AaNxUqwG6NteM01-TxMdqyS1Mw1ZTH4VIFGIM30wVrgRLIdaCV-F6rn-skMaLkMMuH6LHuvZ_X9uK65pzstKY0wPAgggEgfEnWuYfGS1PjTtvA3nnEm9rpWwrB0vwAkNOYmnm7r4YoFVAzHH-eGOLty7rU3N1qYXh9vSRm4hTLR1IBr6jjOfOHTnI3WH9z-2t-sVmOkaZLqtweIRnG" 
            alt="Editorial Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A0A0A]"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <span className="font-body text-sm font-bold text-primary-container tracking-[0.4em] uppercase mb-6 block">Vol. 04 / Cyber-Street</span>
          <h1 className="font-headline text-[15vw] md:text-[12vw] leading-none text-white uppercase tracking-tighter">
            THE<br/>UNAPOLOGETIC
          </h1>
          <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-xl mx-auto mt-8 uppercase tracking-widest">
            A digital exploration of form and silhouette in the urban landscape.
          </p>
        </div>
      </section>

      {/* Feature Section 1 */}
      <section className="px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter items-center mt-section-gap">
        <div className="md:col-span-7 aspect-[4/5] overflow-hidden glass-panel p-4">
          <img 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCewd5C3Atte59xsYJQocWaBOk7dHldg46RwOcpAMHRa-xbS85qtTz4LuHvFHpCUQd07QujQAeoQX6dg1VBh5Rw9WJ5B_cx-J_OyVEU9e-nTSTn0fM_3aQF29hcYaYct0DJrZpbBpwBlVND46qLpJPh0OZn-4mestd0p5hEpUEamh-AkdrFuPD1DKJ62yoevLUKiVYgLgNl87bQtNpFGcgfem0lzCMJevzr3QK2ytkGNka024gxTup9HrUuA77Z8UEOy85lheee644r" 
            alt="Model 1"
          />
        </div>
        <div className="md:col-span-5 md:pl-12">
          <h2 className="font-headline text-6xl text-white uppercase mb-8">NEON<br/>STRUCTURE</h2>
          <p className="font-body text-lg text-on-surface-variant mb-8 leading-relaxed">
            Where architecture meets apparel. Our Season 04 collection focuses on the rigid lines of brutalist design, translated into fluid techwear silhouettes.
          </p>
          <div className="flex gap-4">
            <span className="font-body text-xs font-bold text-white border border-white/20 px-4 py-2 uppercase tracking-widest">Techwear</span>
            <span className="font-body text-xs font-bold text-white border border-white/20 px-4 py-2 uppercase tracking-widest">Minimalist</span>
          </div>
        </div>
      </section>

      {/* Grid Layout Section */}
      <section className="px-margin-mobile md:px-margin-desktop mt-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="flex flex-col gap-gutter">
            <div className="aspect-square glass-panel overflow-hidden">
              <img className="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYg7fcufCfBSnh-dMTIsfqQiUOX3PDKmBCRuwm8Km-5YLp2mi8uKgWI_o0wHFdDzlJu_NFjx920DwdBlKFLxNiNJSYgFGJBCcFVOtm9x3IzeQuj3HjeDxK-84MHTKeELwNO4N926CoBJRLK3yT6unbxy38YFURu06vtWi175r21hFyLlapxlw12NfHWe1DI4YkYc6bS-KSRsPdgC9QWY-GLdh0Zz8TL5ItL8y_DK-jleYo4R9hzLBtB6IW-yXU2cTJ3y6GcCbKkcmP" alt="E1" />
            </div>
            <h3 className="font-headline text-3xl text-white uppercase mt-4">DIGITAL DRIFT</h3>
            <p className="font-body text-sm text-on-surface-variant uppercase tracking-widest">The movement of light across synthetic fabrics.</p>
          </div>
          <div className="flex flex-col gap-gutter md:pt-24">
            <div className="aspect-[3/4] glass-panel overflow-hidden">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIDcav_n42TEyM83tsOdejBWiu8PfPE00ldlxpOZ8uOyawhU1EZgFuic9knIeBtJ8AVkQAFGRop3og5EnGhTFqye6Wmymi9booQW24CkVAmLLBvdMjbXmykS2urh4jsDSXjiIfd9rQFAif1jPRNT-3s-0vD5GMGXUzmd0lYgrDPGbQLCEvhUw2-15yr8Zep90j8HBXQ4BnmUH8_v8qIRuMnJNEjozB4D9N8y9hblMenH1sQYwIA7eAx0zrGjFkLytiPtxJBBi5lGB" alt="E2" />
            </div>
            <h3 className="font-headline text-3xl text-white uppercase mt-4">CYBER FORM</h3>
            <p className="font-body text-sm text-on-surface-variant uppercase tracking-widest">A study in high-contrast silhouettes.</p>
          </div>
          <div className="flex flex-col gap-gutter">
            <div className="aspect-[3/2] glass-panel overflow-hidden">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKbPEtYdaP6ztsKU6ektCJHL3RRZSZTJzxSmUvzYAaHwumSz0cfjVSj69mwox879XuyT-Zy_iDNFjdph_nxtZEgQbIVodbBPS7LUg4vyxCYzItUGYUebMwbsaq3N3HRGM4NwrtahOYdVmDr5Dcs7Scx7EcVVSoYBgfOgfL-ktGOKS3-kp5wiHO0c-G6BVrx1J08-LUkry_CCut15numCftNpW7NxBY2wi9pHEqKOkD9-lYrhy7AqMJv6R56iLZORnpcROB8d4tFYIP" alt="E3" />
            </div>
            <h3 className="font-headline text-3xl text-white uppercase mt-4">URBAN DECAY</h3>
            <p className="font-body text-sm text-on-surface-variant uppercase tracking-widest">Finding beauty in the industrial landscape.</p>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-section-gap text-center px-4">
        <blockquote className="font-headline text-4xl md:text-7xl text-primary-container uppercase max-w-5xl mx-auto leading-tight italic">
          "Fashion is no longer about the clothes, it's about the frequency you broadcast to the world."
        </blockquote>
        <cite className="font-body text-sm text-white uppercase tracking-[0.5em] mt-8 block not-italic">— Trend Drop Editorial Team</cite>
      </section>
    </div>
  )
}

export default Editorial
