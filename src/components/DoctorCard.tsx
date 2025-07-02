import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

function DoctorCard() {
  return (
    <div className="border rounded-xl p-4 flex flex-col gap-4 cursor-pointer hover:bg-slate-100/20">
        <div className="flex items-center gap-4 mb-2">
            <div className="relative size-18 rounded-full bg-slate-50 overflow-hidden">
                <Image
                    src={"/img/doctor_1.jpg"}
                    alt="medecin_1"
                    fill
                    className="object-cover rounded-full"
                />
            </div>
            <div>
                <p className="text-lg font-semibold">Dr. Ablaye Mbodj</p>
                <p className="text-sm text-slate-500">Dentiste</p>
                <p className="flex items-center text-sm font-medium gap-3 mt-1 mb-1"><Star strokeWidth={1.75} size={16} className="text-cyan-500 "/> 5.0</p>
                <div className="flex items-center gap-2 text-sm text-slate-500"><MapPin size={16} strokeWidth={1.75} className="text-cyan-500"/>Hôpital Le Dantec, Dakar</div>
            </div>
        </div>

        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <div className="relative bg-amber-50">
                        <Button 
                            type="button"
                            className="h-7 w-full px-2 py-4.5 flex items-center justify-center border border-cyan-300/30 bg-cyan-500 hover:bg-cyan-600 text-sm rounded-sm"
                        >Prendre Rendez-vous
                        </Button>
                    </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                    Make changes to your profile here. Click save when you&apos;re
                    done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                    <div className="grid gap-3">
                    <Label htmlFor="name-1">Name</Label>
                    <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
                    </div>
                    <div className="grid gap-3">
                    <Label htmlFor="username-1">Username</Label>
                    <Input id="username-1" name="username" defaultValue="@peduarte" />
                    </div>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    </div>
  )
}

export default DoctorCard