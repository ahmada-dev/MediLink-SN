"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { geistMono } from "@/ui/fonts";

const RegisterForm: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (!email) {
            setError("L'email est requis.");
            return;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            setError("Veuillez entrer un email valide.");
            return;
        }
        if (!password) {
            setError("Le mot de passe est requis.");
            return;
        }
        // Ici, vous pouvez ajouter la logique d'authentification réelle
    };


    return (
        <Card className="w-full space-y-4">
            <CardHeader>
                <CardTitle>
                    <h1 className={`text-3xl ${geistMono.className}`}>Inscription</h1>
                </CardTitle>
                <CardDescription className="text-base">Créez votre compte pour commencer à gérer votre santé</CardDescription>
            </CardHeader>
            <CardContent>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="flex gap-4">
                        <div>
                            <Label htmlFor="prenom" className="mb-2">Prénom</Label>
                            <Input
                                id="prenom"
                                type="text"
                                name="prenom"
                                placeholder="Votre prénom"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                className="py-5"
                            />
                        </div>
                        <div>
                            <Label htmlFor="nom" className="mb-2">Nom</Label>
                            <Input
                                id="nom"
                                type="text"
                                name="nom"
                                placeholder="Votre Nom"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                className="py-5"
                            />
                        </div>
                    </div>
                    <div>
                        <Label htmlFor="email" className="mb-2">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="Votre email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="py-5"
                        />
                    </div>
                    <div>
                        <Label htmlFor="password" className="mb-2">Mot de passe</Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="Votre mot de passe"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className="py-5"
                        />
                    </div>
                    <div>
                        <Label htmlFor="password" className="mb-2">Confirmez le mot de passe</Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="Votre mot de passe"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className="py-5"
                        />
                    </div>
                    
                    {error && (
                        <div className="text-red-600 text-sm">{error}</div>
                    )}
                    <Button type="submit" className="w-full py-5 bg-cyan-600 text-white hover:bg-cyan-700 transition-colors">
                        Se connecter
                    </Button>
                </form>
            </CardContent>
            <CardFooter className="flex justify-center">
                <span className="text-sm font-medium text-slate-500">
                    Vous avez déjà un compte?{" "}
                    <Link href="/login" className="text-cyan-500 hover:underline">
                        Se Connecter
                    </Link>
                </span>
            </CardFooter>
        </Card>
    );
};

export default RegisterForm;