"use client";
import { navItems } from "@/lib/utils";
import NavItem from "@/components/NavItem";
// import {Button} from "@/components/ui/button"
import { LoaderCircle, LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import { useState } from "react";

export default function Sidebar() {
    const [isPending, setIsPending] = useState(false);

    const handleSignOut = async () => {
            setIsPending(true);
            await signOut({ callbackUrl: "/" });
            setIsPending(false);
        };
    return (
        <aside className="w-64 hidden lg:block fixed">
            <nav className="p-4 space-y-4 h-[400px] border-r border-slate-400/30">
                <ul className="space-y-2">
                    {
                        navItems.map(item => (
                            <NavItem key={item.label} navItem={item}/>
                        ))
                    } 
                    <button
                        onClick={handleSignOut} 
                        className="w-full flex items-center p-2 bg-transparent text-slate-700 hover:bg-slate-100/40 border border-transparent hover:border-slate-200  rounded-sm">
                            {isPending ? 
                                (
                                    <span className="animate-spin mx-auto"><LoaderCircle size={16} className="text-slate-700"/></span>
                                    
                                ) : (
                                    <div className="flex items-center justify-center">
                                        <LogOut size={16} strokeWidth={1.5} className="mr-2" />
                                        Se Déconnecter
                                    </div>
                                )
                            }
                    </button>
                </ul>
            </nav>
    </aside>
  );
}