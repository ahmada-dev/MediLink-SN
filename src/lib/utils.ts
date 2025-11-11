import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { type NavItem } from "./types"
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


import { Sparkles, Pill, Settings, Calendar1, LayoutDashboard,FileText } from "lucide-react";

export const navItems:NavItem[] = [
    {
        label: "Dashboard",
        url: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        label: "Rendez-vous",
        url: "/appointments",
        icon: Calendar1,
    },
    {
        label: "Carnet de santé",
        url: "/medical-record",
        icon: FileText,
    },
    {
        label: "Pharmacies",
        url: "/pharmacies",
        icon: Pill,
    },
    {
        label: "Assistant IA",
        url: "/ai-assistant",
        icon: Sparkles,
        
    },
    {
        label: "paramètres",
        url: "/settings",
        icon: Settings,
        
    },
];


export const _Specialities = [
  {
    numero: 1,
    nom: "Genéraliste",
    description: "Médecin de premier recours pour des soins généraux et préventifs."
  },
  {
    numero: 2,
    nom: "Neurologie",
    description: "Troubles du système nerveux (cerveau, moelle épinière, nerfs)."
  },
  {
    numero: 3,
    nom: "Cardiologie",
    description: "Maladies du cœur et des vaisseaux sanguins (ex. : infarctus, hypertension)."
  },
  {
    numero: 4,
    nom: "Pédiatrie",
    description: "Soins médicaux aux enfants et adolescents."
  },
  {
    numero: 5,
    nom: "Dermatologie",
    description: "Maladies de la peau, des ongles, des cheveux, des muqueuses."
  },
  {
    numero: 6,
    nom: "Psychiatrie",
    description: "Troubles mentaux et psychologiques (dépression, schizophrénie, etc.)."
  },
  {
    numero: 7,
    nom: "Génicologie",
    description: "Santé reproductive féminine, grossesse et accouchement."
  },
  {
    numero: 8,
    nom: "Oncologie",
    description: "Diagnostic et traitement des cancers."
  }
];

//  size={16} strokeWidth={1.5} 