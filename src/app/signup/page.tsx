import { AuthLayout } from "@/components/shared/AuthLayout";
import Link from "next/link";
import { GitFork, DatabaseZap, ArrowRight } from "lucide-react";

export default function SignupPage() {
  return (
    <AuthLayout>
      <div className="w-full">
        <div className="mb-10">
          <h1 className="text-3xl font-semibold mb-3 tracking-tight text-white">Initialize Node</h1>
          <p className="text-gray-400 text-lg">Provision your first Sunabase cluster in seconds.</p>
        </div>

        <div className="space-y-4 mb-8">
          <button className="w-full flex items-center justify-center px-4 py-3.5 bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 rounded-xl transition-all duration-300 font-medium text-gray-200 group">
            <GitFork className="w-5 h-5 mr-3 text-gray-400 group-hover:text-white transition-colors" />
            Provision with GitHub
          </button>
          <button className="w-full flex items-center justify-center px-4 py-3.5 bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 rounded-xl transition-all duration-300 font-medium text-gray-200 group">
            <svg className="w-5 h-5 mr-3 opacity-80 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                <path d="M1 1h22v22H1z" fill="none"/>
            </svg>
            Provision with Google
          </button>
        </div>

        <div className="relative mb-8 text-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <span className="relative bg-black px-4 text-xs font-mono text-gray-500 uppercase tracking-widest">or standard auth</span>
        </div>

        <form className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
             <div>
               <label className="block text-sm font-medium text-gray-400 mb-2 font-mono">First.Name</label>
               <input 
                 type="text" 
                 className="w-full px-4 py-3.5 bg-white/[0.02] border border-white/10 rounded-xl focus:outline-none focus:border-emerald-500/50 focus:bg-emerald-500/[0.02] transition-colors text-white placeholder-gray-700 font-mono text-sm"
                 placeholder="Admin"
               />
             </div>
             <div>
               <label className="block text-sm font-medium text-gray-400 mb-2 font-mono">Last.Name</label>
               <input 
                 type="text" 
                 className="w-full px-4 py-3.5 bg-white/[0.02] border border-white/10 rounded-xl focus:outline-none focus:border-emerald-500/50 focus:bg-emerald-500/[0.02] transition-colors text-white placeholder-gray-700 font-mono text-sm"
                 placeholder="User"
               />
             </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2 font-mono">Email.Address</label>
            <input 
              type="email" 
              className="w-full px-4 py-3.5 bg-white/[0.02] border border-white/10 rounded-xl focus:outline-none focus:border-emerald-500/50 focus:bg-emerald-500/[0.02] transition-colors text-white placeholder-gray-700 font-mono text-sm"
              placeholder="sysadmin@network.local"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2 font-mono">Auth.Key</label>
            <input 
              type="password" 
              className="w-full px-4 py-3.5 bg-white/[0.02] border border-white/10 rounded-xl focus:outline-none focus:border-emerald-500/50 focus:bg-emerald-500/[0.02] transition-colors text-white placeholder-gray-700 font-mono text-sm tracking-widest"
              placeholder="••••••••••••"
            />
          </div>

          <button className="group relative w-full flex items-center justify-center py-4 px-4 bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 hover:border-emerald-500/50 text-emerald-400 font-medium rounded-xl transition-all duration-300 mt-4 overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
             <DatabaseZap className="w-5 h-5 mr-2" />
             Deploy Cluster
          </button>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an active session?{" "}
          <Link href="/login" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-medium group transition-colors">
            Connect
            <ArrowRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
