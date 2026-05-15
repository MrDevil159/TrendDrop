import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [isLogin, setIsLogin] = useState(true)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Dummy login success
    navigate('/')
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-margin-mobile md:px-margin-desktop py-section-gap animate-fade-in relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary-container/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-secondary/10 rounded-full blur-[100px]"></div>

      <div className="glass-panel w-full max-w-md p-8 md:p-12 relative z-10">
        <div className="text-center mb-12">
          <h1 className="font-headline text-5xl text-white uppercase mb-4 tracking-tighter">
            {isLogin ? 'Access Portal' : 'Create Identity'}
          </h1>
          <p className="font-body text-sm text-on-surface-variant uppercase tracking-widest">
            Join the digital frontier of style
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {!isLogin && (
            <div className="flex flex-col gap-2">
              <label className="font-body text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em]">Username</label>
              <input 
                className="bg-transparent border-b border-white/20 focus:border-primary-container outline-none py-3 text-white font-body placeholder:text-white/10 transition-colors" 
                placeholder="TREND_SETTER_01" 
                type="text"
                required={!isLogin}
              />
            </div>
          )}

          <div className="flex flex-col gap-2">
            <label className="font-body text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em]">Email</label>
            <input 
              className="bg-transparent border-b border-white/20 focus:border-primary-container outline-none py-3 text-white font-body placeholder:text-white/10 transition-colors" 
              placeholder="user@trenddrop.com" 
              type="email"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-body text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em]">Password</label>
            <input 
              className="bg-transparent border-b border-white/20 focus:border-primary-container outline-none py-3 text-white font-body placeholder:text-white/10 transition-colors" 
              placeholder="••••••••" 
              type="password"
              required
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-primary-container text-on-primary-fixed py-6 font-body text-xs font-bold uppercase tracking-[0.2em] hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(195,244,0,0.2)]"
          >
            {isLogin ? 'Initialize Access' : 'Register ID'}
          </button>
        </form>

        <div className="mt-12 text-center space-y-4">
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="font-body text-xs text-on-surface-variant uppercase tracking-widest hover:text-white transition-colors"
          >
            {isLogin ? "Don't have an ID? Register" : "Already registered? Login"}
          </button>
          
          <div className="pt-8 border-t border-white/5">
            <Link to="/" className="font-body text-[10px] text-on-surface-variant/50 uppercase tracking-widest hover:text-primary-container transition-colors">
              Return to Grid
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
