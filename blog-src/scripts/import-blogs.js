import "dotenv/config";
import axios from "axios";
import { createClient } from "@sanity/client";

console.log("PROJECT:", process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
console.log("DATASET:", process.env.NEXT_PUBLIC_SANITY_DATASET);
console.log("VERSION:", process.env.NEXT_PUBLIC_SANITY_API_VERSION);
console.log("TOKEN:", process.env.SANITY_API_TOKEN);

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const WP_API = "https://lusoglass.com/wp-json/wp/v2";

async function getPosts() {
  const { data } = await axios.get(
    `${WP_API}/posts?per_page=100&_embed`
  );

  return data;
}

async function createAuthor() {
  const existing = await client.fetch(
    `*[_type=="author" && name=="Admin"][0]`
  );

  if (existing) return existing._id;

  const author = await client.create({
    _type: "author",
    name: "Admin",
  });

  return author._id;
}

async function createCategory(name) {
  const existing = await client.fetch(
    `*[_type=="category" && title==$title][0]`,
    { title: name }
  );

  if (existing) return existing._id;

  const category = await client.create({
    _type: "category",
    title: name,
  });

  return category._id;
}

console.log("✅ Part 1 Loaded");