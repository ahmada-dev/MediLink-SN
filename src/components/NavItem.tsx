import {type NavItem as NavItemTypes} from "@/lib/types";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { usePathname } from "next/navigation";
import clsx from "clsx";


function NavItem({navItem }: {navItem: NavItemTypes}) {
    const pathname = usePathname()
    const isActive = pathname === navItem.url;
  return (
    <li>
        <Link href={navItem.url} className={clsx(
            {
                "bg-slate-100/40 !border-slate-200": isActive,
                "flex items-center justify-between p-2 text-slate-700 hover:bg-slate-100/40 border border-transparent hover:border-slate-200  rounded-sm": true,
            }
        )}>
            <div className="flex items-center">
                {navItem.icon && <navItem.icon size={16} strokeWidth={1.5} className="mr-2" />}
                {navItem.label}
            </div>
            {
                navItem.url === "/appointments" ? 
                (
                    <Badge 
                        variant="outline"
                        className="size-6 flex items-center justify-center bg-cyan-50/50 border border-cyan-300/30 text-cyan-400 text-xs rounded-sm"
                    >2</Badge>
                ) : (
                    ""
                )
            }
        </Link>
    </li>
  )
}

export default NavItem