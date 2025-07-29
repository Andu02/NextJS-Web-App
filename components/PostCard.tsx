import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const PostCard = ({ post }: { post: PostCardType }) => {
  const {
    _createdAt,
    views,
    author: { _id: authorId, name, profilePicture },
    category,
    _id,
    image,
    title,
    description,
  } = post;

  return (
    <li className="post-card mb-10 group relative">
      <div className="post-card-top">
        <p className="post-card-date">{formatDate(_createdAt)}</p>
        <div className="post-card-views">
          <EyeIcon className="size-4" />
          <span>{views}</span>
        </div>
      </div>

      <div className="flex justify-between items-start gap-3 mb-2">
        <div className="flex-1">
          <Link href={`/user/${authorId}`}>
            <p className="post-card-author">{name}</p>
          </Link>
          <p className="post-card-title">{title}</p>
          <p className="post-card-desc">{description}</p>
        </div>

        {profilePicture && (
          <Image
            src={profilePicture}
            alt={name}
            width={80}
            height={80}
            className="post-card-profile"
          />
        )}
      </div>

      <img src={image} alt={title} className="post-card-img" />

      <div className="post-card-footer">
        <Link href={`/?query=${category.toLowerCase()}`}>
          <span className="post-card-category">{category}</span>
        </Link>
        <Link href={`/post/${_id}`}>
          <button className="post-card-btn">Details</button>
        </Link>
      </div>
    </li>
  );
};

export default PostCard;
