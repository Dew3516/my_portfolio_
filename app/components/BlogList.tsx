"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const posts = [
  {
    slug: "digital-marketing-roadmap",
    title: "Digital Marketing Roadmap 2025",
    excerpt: "Learn the exact roadmap to become a digital marketer in Sri Lanka.",
    date: "2025-01-10",
  },
  {
    slug: "react-beginner-guide",
    title: "React Beginner Guide",
    excerpt: "Everything you need to know to start as a React Developer.",
    date: "2025-02-05",
  }
];

export default function BlogList() {
  return (
    <section id="blog" className="py-20 px-6 md:px-16">
      <h2 className="text-5xl font-bold text-center mb-12 text-amber-50">Blog</h2>

      <div className="space-y-8">
        {posts.map((post) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-300 dark:border-gray-700"
          >
            <h3 className="text-3xl font-bold mb-2">{post.title}</h3>
            <p className="mb-3 text-gray-600 dark:text-gray-400">{post.excerpt}</p>
            <p className="text-sm text-gray-500 mb-4">{post.date}</p>

            <Link
              href={`/blog/${post.slug}`}
              className="text-fuchsia-600 font-semibold hover:underline"
            >
              Read More →
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
