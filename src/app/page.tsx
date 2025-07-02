import Header from "@/components/layout/Header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Header />
      <main className="mt-18 container mx-auto max-w-7xl flex">
        <section className="first-section-height grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <Badge
                variant="outline"
                className="py-1.5 px-4 bg-cyan-50/50 border border-cyan-300/30 text-cyan-400 text-sm"
              >
                Simplifie le parcours de soins
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-700">
                  Votre santé, votre contrôle<br />
                  <span className="gradient-title">partout au Sénégal</span>
              </h1>
            <p className="text-slate-500 text-lg md:text-xl max-w-md">
                  Fini les attentes et les tracasseries ! Prenez rendez-vous, 
                  gérez votre dossier médical et trouvez vos médicaments en quelques clics.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-cyan-500 text-white hover:bg-cyan-700 py-5.5 rounded-md"
              >
                <Link href="/onboarding">
                  Commencez <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-slate-700/30 hover:bg-muted/80 py-5.5 rounded-md"
              >
                <Link href="#">Prenez Rendez-vous</Link>
              </Button>
            </div>
          </div>
          <div className="relative rounded-[80px] h-[400px] lg:h-[500px] overflow-hidden">
            <Image
              src="/img/banner3.png"
              alt="Doctor consultation"
              fill
              className="object-cover"
            />
          </div>
        </section>
      </main>
    </>
  );
}
