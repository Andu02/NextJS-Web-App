import { client } from "@/sanity/lib/client";
import { POST_BY_ID_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import React from "react";

export const experimetnal_ppr = true;

export const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  const post = await client.fetch(POST_BY_ID_QUERY, { id });

  if (!post) return notFound();

  return (
    <>
      <section className="header-container animated-gradient">
        <h1 className="heading">{post.title}</h1>
      </section>
    </>
  );
};

export default Page;
