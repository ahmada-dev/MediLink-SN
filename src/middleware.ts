// middleware.ts
import { auth as middleware } from "@/auth"; // Assurez-vous que le chemin est correct

export default middleware((req) => {
  // Définir les routes publiques
  const publicRoutes = ["/login", "/register", "/"]; // Ajoutez vos routes publiques

  // Si l'utilisateur n'est pas authentifié et tente d'accéder à une route protégée
  if (!publicRoutes.includes(req.nextUrl.pathname) && !req.auth) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    return Response.redirect(url);
  }

  // Si l'utilisateur est déjà authentifié et tente d'accéder à /login ou /register, le rediriger vers la page d'accueil
  if (req.auth && ["/login", "/register"].includes(req.nextUrl.pathname)) {
    const url = req.nextUrl.clone();
    url.pathname = "/dashboard";
    return Response.redirect(url);
  }
});

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};