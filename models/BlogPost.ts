import mongoose, { Document, Schema } from "mongoose";

interface IComment {
  name: string;
  email: string;
  comment: string;
  postedAt: Date;
}

interface IBlogPost extends Document {
  title: string;
  content: string;
  images: mongoose.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
  comments: IComment[];
}

const CommentSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  comment: { type: String, required: true },
  postedAt: { type: Date, default: Date.now },
});

const BlogPostSchema: Schema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  images: { type: [Schema.Types.ObjectId], ref: "uploads" }, // Reference to GridFS
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  comments: { type: [CommentSchema], default: [] },
});

//  Types

export interface Comment {
  name: string;
  comment: string;
  postedAt: string;
}

export interface BlogPost extends Document {
  _id: string;
  title: string;
  content: string;
  images: string[];
  comments?: Comment[];
  createdAt: Date;
  updatedAt: Date;
}

BlogPostSchema.pre<IBlogPost>("save", function (next) {
  this.updatedAt = new Date();
  next();
});

const BlogPost =
  mongoose.models.BlogPost ||
  mongoose.model<IBlogPost>("BlogPost", BlogPostSchema);

export default BlogPost;
