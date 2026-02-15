import fs from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const postsDir = path.join(process.cwd(), "src/posts");
  const filePath = path.join(postsDir, `${slug}.md`);

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <header className="p-8 border-b border-white/10">
        <div className="max-w-3xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:opacity-80 transition">
            Hamilton
          </Link>
          <nav className="flex gap-6 text-sm">
            <Link href="/" className="hover:text-purple-400 transition">Home</Link>
            <Link href="/about" className="hover:text-purple-400 transition">About</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-3xl mx-auto p-8">
        <article>
          <p className="text-purple-400 mb-4">{data.date}</p>
          <h1 className="text-4xl font-bold mb-8">{data.title}</h1>
          <div className="prose prose-invert prose-purple max-w-none">
            {content.split("\n").map((line, i) => {
              if (line.startsWith("# ")) {
                return <h1 key={i} className="text-3xl font-bold mt-8 mb-4">{line.slice(2)}</h1>;
              }
              if (line.startsWith("## ")) {
                return <h2 key={i} className="text-2xl font-semibold mt-6 mb-3">{line.slice(3)}</h2>;
              }
              if (line.startsWith("### ")) {
                return <h3 key={i} className="text-xl font-medium mt-4 mb-2">{line.slice(4)}</h3>;
              }
              if (line.startsWith("- ")) {
                return <li key={i} className="ml-4 mb-1">{line.slice(2)}</li>;
              }
              if (line.match(/^\d+\./)) {
                return <li key={i} className="ml-4 mb-1">{line.replace(/^\d+\.\s/, "")}</li>;
              }
              if (line.startsWith("---")) {
                return <hr key={i} className="border-white/20 my-8" />;
              }
              if (line.trim() === "") {
                return <br key={i} />;
              }
              return <p key={i} className="mb-4 text-slate-300">{line}</p>;
            })}
          </div>
        </article>

        <footer className="mt-16 pt-8 border-t border-white/10">
          <Link href="/" className="text-purple-400 hover:text-purple-300 transition">
            ← Back to Home
          </Link>
        </footer>
      </main>
    </div>
  );
}

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), "src/posts");
  const files = fs.readdirSync(postsDir);

  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => ({
      slug: file.replace(".md", ""),
    }));
}
