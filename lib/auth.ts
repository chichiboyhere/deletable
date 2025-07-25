// import CredentialsProvider from "next-auth/providers/credentials";
// import type { NextAuthOptions } from "next-auth";

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
//             role: "admin", // 👈 important for /admin/blog/new
//           };
//         }

//         return null;
//       },
//     }),
//   ],
//   callbacks: {
//     async session({ session, token }) {
//       if (token?.role) {
//         session.user.role = token.role;
//       }
//       return session;
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
//     error: "/auth/error", // You can create this if you want
//   },
//   session: {
//     strategy: "jwt",
//   },
//   secret: process.env.NEXTAUTH_SECRET,

// };

import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";
import { Session } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const adminEmail = process.env.ADMIN_EMAIL;
        const adminPassword = process.env.ADMIN_PASSWORD;

        if (
          credentials?.email === adminEmail &&
          credentials?.password === adminPassword
        ) {
          return {
            id: "admin-id",
            name: "Admin",
            email: adminEmail,
            role: "admin",
          };
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      // if (token?.role) {
      //   session.user.role = token.role;
      // }
      // return session;
      const userSession = session as Session;
      if (token?.role) {
        userSession.user.role = token.role as string;
      }
      return userSession;
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
  },
  pages: {
    signIn: "/auth/login",
    error: "/auth/error", // You can create this if you want
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
