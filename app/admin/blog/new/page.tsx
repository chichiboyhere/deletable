// 2. /app/admin/blog/new.tsx - Admin Blog Submission Form

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import NewBlogPostForm from "@/components/NewBlogPostForm";

export default async function NewBlogPost() {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "admin") {
    redirect("/auth/login");
  }

  return (
    <div className="my-15">
      <NewBlogPostForm />
    </div>
  );
}
