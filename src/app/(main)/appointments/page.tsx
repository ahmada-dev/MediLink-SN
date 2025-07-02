import { Input } from "@/components/ui/input";
import {SearchIcon} from "lucide-react";
import DoctorCard from "@/components/DoctorCard";
import { Specialities } from "@/components/Specialities";



export default function Appointment () {
    return (
        <>
            <div className="relative">
                <div className="mt-6 relative">
                    <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input 
                        placeholder="Rechercher par nom, spécialité, ville..."
                        className="pl-10 py-5.5 focus:ring-slate-100"
                        defaultValue=""
                    />
                </div>
                <div className="relative space-x-2 mt-6">
                    <Specialities />
                </div>

            </div>
           <div className="mt-10">
                <h2 className="font-medium">Médecins disponibles</h2>
                <div className="grid grid-cols-3 gap-6 mt-6">
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(idx => (
                            <DoctorCard key={idx}/>
                        ))
                    }
                </div>
           </div>

            {/* Add more dashboard content here */}
        </>
    );
}