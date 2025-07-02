"use client";
import { geistMono } from "@/ui/fonts";
import Link from "next/link";
// import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import { useActionState } from 'react';
import { login } from '@/lib/actions';
import { useSearchParams } from 'next/navigation';
import { LoaderCircle } from "lucide-react";

const LoginForm = () => {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';
    const [errorMessage, formAction, isPending] = useActionState(
        login,
        undefined,
    );

    return (
        <Card className="w-full space-y-4">
            <CardHeader>
                <CardTitle>
                    <h1 className={`text-3xl ${geistMono.className}`}>Connexion</h1>
                </CardTitle>
                <CardDescription className="text-base">Entrez votre email pour accéder à votre espace santé</CardDescription>
            </CardHeader>
            <CardContent>
                <form className="space-y-8" action={formAction}>
                    <div>
                        <Label htmlFor="email" className="mb-2">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Votre email"
                            className="py-5"
                        />
                    </div>
                    <div>
                        <Label htmlFor="password" className="flex items-center justify-between mb-2">
                            <div>Mot de passe</div>
                            <Link href="#" className="hover:underline text-slate-500 hover:text-slate-700">Mot de passe oublié?</Link>
                        </Label>
                        <Input
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Votre mot de passe"
                            className="py-5"
                        />
                    </div>
                    {errorMessage && (
                        <div className="text-red-500 text-sm">
                            {errorMessage}
                        </div>
                    )}
                    <input type="hidden" name="redirectTo" value={callbackUrl} />
                    <Button type="submit" className="w-full py-5 bg-cyan-600 text-white hover:bg-cyan-700 transition-colors">
                        {isPending ? <span className="animate-spin"><LoaderCircle size={4}/></span> : "Se connecter"}
                    </Button>
                </form>
            </CardContent>
            <CardFooter className="flex justify-center">
                <span className="text-sm font-medium text-slate-500">
                    Pas de compte ?{" "}
                    <Link href="/register" className="text-cyan-500 hover:underline">
                        Inscrivez-vous
                    </Link>
                </span>
            </CardFooter>
        </Card>
    );
};

export default LoginForm;