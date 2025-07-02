import { LogIn, Stethoscope } from 'lucide-react'
import {Button} from "@/components/ui/button"
import Link from 'next/link'
import { signOut, auth } from '@/auth'


async function Header() {
    const session = await auth();
    console.log(session)
  return (
    <header className='fixed top-0 z-10 w-full flex items-center bg-white/5 backdrop-blur-lg justify-between h-18 px-6 border-b border-slate-300 '> 
        <Link href="/" className="flex items-center gap-2 font-semibold text tracking-wide gradient-title">
            <Stethoscope size={24} strokeWidth={1.75} className='text-cyan-500'/>
            MediLink SN
        </Link>

        {/* <nav className='md:flex items-center hidden'>
            <div>navItem1</div>
            <div>navItem2</div>
            <div>navItem3</div>
            <div>navItem4</div>
        </nav> */}

        <div className='flex items-center gap-2'>
            {
                session?.user ? (
                    <>
                        <div className='flex items-center gap-2'>
                            <span className='text-sm font-medium text-slate-700'>{session.user?.name}</span>
                            <div className='relative border border-1.5 border-slate-200 flex items-center justify-center p-1 rounded-full overflow-hidden hover:border-2 transition-all duration-150'>
                                <img 
                                    src={session.user?.image || '/img/default-avatar.jpg'} 
                                    alt="User Avatar"
                                    
                                    className='w-8 h-8 bg-amber-50'
                                />
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <Button 
                            asChild
                            variant="outline"
                            className='bg-white text-slate-700 hover:bg-slate-100 py-5'
                        >
                            <Link href="/login">
                                <LogIn size={16} className='mr-2' />
                                Se Connecter
                            </Link>
                        </Button>

                        <Button 
                            asChild
                            className='bg-cyan-500 hover:bg-cyan-600 rounded-sm text-sm py-5 tracking-wide'
                        >
                            <Link href="/register">S'inscrire</Link>
                        </Button>
                    </>

                )
            }
        </div>
    </header>
  )
}

export default Header