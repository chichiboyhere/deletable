// import { CredentialsSignin } from "next-auth";
// import { authOptions } from "@/lib/auth";
// import { redirect } from "next/navigation";
// import NewBlogPostForm from "@/components/NewBlogPostForm";

// export default async function NewBlogPost() {
//   //const session = await getServerSession(authOptions);
//   const session = await CredentialsSignin(authOptions);

//   if (!session || session.user.role !== "admin") {
//     redirect("/auth/login");
//   }

//   return (
//     <div className="my-15">
//       <NewBlogPostForm />
//     </div>
//   );
// }

import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import NewBlogPostForm from "@/components/NewBlogPostForm";

export default async function NewBlogPost() {
  const session = await auth();

  if (!session || session.user.role !== "admin") {
    redirect("/auth/login");
  }

  return (
    <div className="my-15">
      <NewBlogPostForm />
    </div>
  );
}
