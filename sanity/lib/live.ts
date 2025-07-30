import "server-only";
import { defineLive } from "next-sanity";
import { client } from "@/sanity/lib/client";

export const { sanityFetch, SanityLive } = defineLive({
  client,
  serverToken: false,  // dezactivează avertismentul serverToken
  browserToken: false, // dezactivează avertismentul browserToken
});
