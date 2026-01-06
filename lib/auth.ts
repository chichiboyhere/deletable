// import CredentialsProvider from "next-auth/providers/credentials";
// import type { NextAuthOptions } from "next-auth";
// import { Session } from "next-auth";

// export const authOptions: NextAuthOptions = {
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "text" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         const adminEmail = process.env.ADMIN_EMAIL;
//         const adminPassword = process.env.ADMIN_PASSWORD;

//         if (
//           credentials?.email === adminEmail &&
//           credentials?.password === adminPassword
//         ) {
//           return {
//             id: "admin-id",
//             name: "Admin",
//             email: adminEmail,
//             role: "admin",
//           };
//         }

//         return null;
//       },
//     }),
//   ],
//   callbacks: {
//     async session({ session, token }) {
//       const userSession = session as Session;
//       if (token?.role) {
//         userSession.user.role = token.role as string;
//       }
//       return userSession;
//     },
//     async jwt({ token, user }) {
//       if (user) {
//         token.role = user.role;
//       }
//       return token;
//     },
//   },
//   pages: {
//     signIn: "/auth/login",
//     error: "/auth/error",
//   },
//   session: {
//     strategy: "jwt",
//   },
//   secret: process.env.NEXTAUTH_SECRET,
// };
// lib/auth.ts
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        // validate user
        return user ?? null;
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.role = token.role;
      return session;
    },
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
  },
});
