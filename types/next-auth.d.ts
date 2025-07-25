// types/next-auth.d.ts
import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: string | null;
    };
  }

  interface User extends DefaultUser {
    role?: string | null;
  }
}

// types/next-auth.d.ts
// import NextAuth from "next-auth";

// declare module "next-auth" {
//   interface Session {
//     user: {
//       name?: string;
//       email?: string;
//       image?: string;
//       role?: string;
//     };
//   }

//   interface User {
//     role?: string;
//   }
// }
//next-auth.d.ts
// import NextAuth from "next-auth";

// declare module "next-auth" {
//   interface Session {
//     user: {
//       id: string;
//       name: string;
//       email: string;
//       role?: string; // Add the role property here
//     };
//   }

//   interface User {
//     id: string;
//     name: string;
//     email: string;
//     role?: string; // Add the role property here
//   }
// }
