// app/api/blog/[id]/comment/route.ts

import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import BlogPost from "@/models/BlogPost";

export async function POST(
  req: NextRequest,
  {
    params,
  }: {
    params: Promise<{ id: string }>;
  }
) {
  const id = (await params).id;
  try {
    await connectDB();

    const { name, email, comment } = await req.json();

    if (!name || !email || !comment) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    const post = await BlogPost.findById(id);
    if (!post) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }

    post.comments.unshift({
      name,
      email,
      comment,
      postedAt: new Date(),
    });

    await post.save();

    return NextResponse.json({ message: "Comment added successfully" });
  } catch (error) {
    console.error("Comment API error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
