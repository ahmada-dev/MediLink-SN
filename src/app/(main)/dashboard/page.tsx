import ContentHeader from "@/components/ContentHeader";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { AlertCircle, Brain, CalendarCheck2, FileText, Pill, SearchIcon, Star } from "lucide-react";
import Image from "next/image";

export default function Dasboard () {
    return (
        <>
            <ContentHeader title="Tableaux de bord" description="Votre portail santé. Gérez vos rendez-vous et consultez vos informations en toute simplicité."/>
            

            <div className="grid grid-cols-4 gap-4">
                <div className="border border-slate-400/30 rounded-xl p-4">
                    <div className="flex flex-col gap-2.5">
                        <div className="flex gap-3">
                            <CalendarCheck2 size={24} strokeWidth={1.5} className="text-cyan-500"/>
                            <span className="text-sm text-slate-500 ">Prochains Rendez-vous</span>
                        </div>
                        <div className="text-right mr-2">
                            <span className="text-4xl font-bold">2</span>
                        </div>
                    </div>
                </div>
                <div className="border border-slate-400/30 rounded-xl p-4">
                    <div className="flex flex-col gap-2.5">
                        <div className="flex gap-3">
                            <FileText size={24} strokeWidth={1.5} className="text-cyan-500"/>
                            <span className="text-sm text-slate-500 ">Analyses récentes</span>
                        </div>
                        <div className="text-right mr-2">
                            <span className="text-4xl font-bold">3</span>
                        </div>
                    </div>
                </div>
                <div className="border border-slate-400/30 rounded-xl p-4">
                    <div className="flex flex-col gap-2.5">
                        <div className="flex gap-3">
                            <Pill size={24} strokeWidth={1.5} className="text-cyan-500"/>
                            <span className="text-sm text-slate-500 ">Pharmacies proches</span>
                        </div>
                        <div className="text-right mr-2">
                            <span className="text-4xl font-bold">4</span>
                        </div>
                    </div>
                </div>
                <div className="border border-slate-400/30 rounded-xl p-4">
                    <div className="flex flex-col gap-2.5">
                        <div className="flex gap-3">
                            <Brain size={24} strokeWidth={1.5} className="text-cyan-500"/>
                            <span className="text-sm text-slate-500 ">Recommandations IA</span>
                        </div>
                        <div className="text-right mr-2">
                            <span className="text-4xl font-bold">4</span>
                        </div>
                    </div>
                </div>
            </div>
           <div className="mt-10">
                 <h2 className="font-medium">Prochains rendez-vous</h2>
                <div className="grid grid-cols-2 gap-6 mt-6 h-36">
                    <div className="relative border flex gap-4 p-4 rounded-xl cursor-pointer hover:bg-slate-100/20" >
                        <div className="relative w-24 h-24 rounded-xl bg-slate-50">
                            <Image 
                                src="/img/doctor_3.jpg" 
                                alt="medecin_1"
                                fill
                                className="object-cover rounded-xl"
                            />
                        </div>
                        <div>
                            <p>Dr. Aminata Fall</p>
                            <p className="text-slate-500 text-sm mb-1">Généraliste</p>
                            <p className="flex items-center text-sm font-medium gap-3 mb-1"><Star strokeWidth={1.75} size={16} className="text-cyan-500 "/> 5.0</p>
                            <p className="text-slate-600 text-sm mb-2 font-semibold">2024-01-20 à 10:00</p>
                        </div>

                        <Badge 
                            variant="outline"
                            className="absolute right-4  h-7 px-2 flex items-center justify-center bg-cyan-50/50 border border-cyan-300/30 text-cyan-400 text-xs rounded-sm"
                        >Confirmé</Badge>
                    </div>
                    <div className="relative border flex gap-4 p-4 rounded-xl cursor-pointer hover:bg-slate-100/20" >
                        <div className="relative w-24 h-24 rounded-xl bg-slate-50">
                            <Image 
                                src="/img/doctor_2.jpg" 
                                alt="medecin_2"
                                fill
                                className="object-cover rounded-xl"
                            />
                        </div>
                        <div>
                            <p>Dr. Ablaye Mbodj</p>
                            <p className="text-slate-500 text-sm mb-1">Dentiste</p>
                            <p className="flex items-center text-sm font-medium gap-3 mb-1"><Star strokeWidth={1.75} size={16} className="text-cyan-500 "/> 5.0</p>
                            <p className="text-slate-600 text-sm mb-2 font-semibold">2024-01-20 à 10:00</p>
                        </div>

                        <Badge 
                            variant="outline"
                            className="absolute right-4  h-7 px-2 flex items-center justify-center bg-cyan-50/50 border border-cyan-300/30 text-cyan-400 text-xs rounded-sm"
                        >Confirmé</Badge>
                    </div>
                </div>
           </div>
           <div className="mt-10">
                 <div>
                    <h2 className="font-medium">Recommandations IA</h2>
                    <p className="text-sm text-slate-500">Suggestions personnalisées basées sur vos données de santé</p>
                 </div>
                <div className="grid grid-cols-2 gap-6 mt-6 h-36">
                    <div className="border gap-4 p-4 rounded-xl cursor-pointer hover:bg-slate-100/20">
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <h2 className="font-medium text-slate-600">Amélioration du sommeil</h2>
                                <h3 className="text-xs text-slate-500">Priorité moyenneConfiance: <span className="text-cyan-600 ">85%</span></h3>
                            </div>
                            {/* <AlertCircle size={18} strokeWidth={1.5} className="text-cyan-500 "/> */}
                        </div>
                        <p className="text-sm  text-slate-500">Basé sur vos données de santé, nous recommandons d'améliorer votre hygiène de sommeil. Essayez de vous coucher à la même heure chaque soir.</p>
                    </div>
                    <div className="border gap-4 p-4 rounded-xl cursor-pointer hover:bg-slate-100/20">
                        <div className="mb-4">
                            <h2 className="font-medium text-slate-600">Rappel vitamine D</h2>
                            <h3 className="text-xs text-slate-500">Priorité basseConfiance: <span className="text-cyan-600 ">92%</span></h3>
                        </div>
                        <p className="text-sm  text-slate-500">Il est temps de renouveler votre prescription de vitamine D. Contactez votre médecin pour une nouvelle ordonnance.</p>
                    </div>
                    <div className="border gap-4 p-4 rounded-xl cursor-pointer hover:bg-slate-100/20">
                        <div className="mb-4">
                            <h2 className="font-medium text-slate-600">Activité physique</h2>
                            <h3 className="text-xs text-slate-500">Priorité hauteConfiance: <span className="text-cyan-600 ">89%</span></h3>
                        </div>
                        <p className="text-sm  text-slate-500">Vos métriques de santé suggèrent qu'une augmentation de l'activité physique pourrait être bénéfique. 30 minutes de marche quotidienne recommandées.</p>
                    </div>
                    <div className="border gap-4 p-4 rounded-xl cursor-pointer hover:bg-slate-100/20">
                        <div className="mb-4">
                            <h2 className="font-medium text-slate-600">Contrôle cardiologique</h2>
                            <h3 className="text-xs text-slate-500">Priorité moyenneConfiance: <span className="text-cyan-600 ">78%</span></h3>
                        </div>
                        <p className="text-sm  text-slate-500">Votre dernier contrôle cardiaque date de 6 mois. Nous recommandons un nouveau rendez-vous dans les 2 prochaines semaines.</p>
                    </div>
                </div>
           </div>

            {/* Add more dashboard content here */}
        </>
    );
}