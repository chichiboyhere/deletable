// types/next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      name?: string;
      email?: string;
      image?: string;
      role?: string;
    };
  }

  interface User {
    role?: string;
  }
}
// next-auth.d.ts
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
