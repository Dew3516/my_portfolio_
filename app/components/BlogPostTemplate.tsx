"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface BlogPostTemplateProps {
  title: string;
  date: string;
  children: ReactNode;
}

export default function BlogPostTemplate({
  title,
  date,
  children,
}: BlogPostTemplateProps) {
  return (
    <div className="px-6 md:px-40 py-16">
      <Link
        href="/#blog"
        className="text-fuchsia-600 hover:underline mb-6 inline-block"
      >
        ← Back to Blog
      </Link>

      <h1 className="text-5xl font-bold mb-4">{title}</h1>
      <p className="text-gray-500 mb-10">{date}</p>

      <article className="prose prose-lg dark:prose-invert max-w-full">
        {children}
      </article>
    </div>
  );
}
