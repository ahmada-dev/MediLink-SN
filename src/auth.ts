import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);
 
        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          // Here you would typically fetch the user from your database
          // For demonstration, we'll use a mock user
          const user = { id: 1, name: 'Mouhamad Gaye', email: email };
          // Simulate a password check
          if (password === 'password123') {
            return user; // Return the user object if credentials are valid
          }

          if (!user) return null;
        }
        
        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
});