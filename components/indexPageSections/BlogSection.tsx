import Link from "next/link";
import Image from "next/image";

interface WPPost {
  id: number;
  slug: string;
  link: string;
  date: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  _embedded?: {
    ["wp:featuredmedia"]?: {
      source_url: string;
    }[];
  };
}

async function fetchBlogs(): Promise<WPPost[]> {
  const res = await fetch(
    "https://blog.dcommandosecurity.com/wp-json/wp/v2/posts?_embed&per_page=3",
    {
      next: { revalidate: 120 },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch blog posts");
  }

  return res.json();
}

export default async function PremiumBlogSection() {
  const posts = await fetchBlogs();

  const featured = posts[0];
  const sidePosts = posts.slice(1);

  const getImage = (post: any) => {
    return (
      post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
      post.yoast_head_json?.og_image?.[0]?.url ||
      "/placeholder.png"
    );
  };

  return (
    <section
      className="py-20 px-6 bg-gradient-to-b from-white to-blue-50 dark:from-slate-950 dark:to-slate-900"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-blue-600 font-semibold">
              Security Intelligence
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 dark:text-white mt-2">
              Latest Insights & Updates
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl">
              Stay informed with expert security guidance, event protection
              strategies, and industry updates from Dcommando Security.
            </p>
          </div>

          <Link
            href="https://blog.dcommandosecurity.com"
            target="_blank"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-blue-700 text-white font-semibold hover:bg-blue-800 transition"
          >
            Visit Blog →
          </Link>
        </div>

        {/* Premium Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Left */}
          {featured && (
            <Link
              href={featured.link}
              target="_blank"
              rel="noopener noreferrer"
              className="lg:col-span-2 group"
            >
              <article className="relative overflow-hidden rounded-3xl shadow-xl min-h-[520px]">
                <Image
                  src={getImage(featured)}
                  alt={featured.title.rendered}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                <div className="absolute bottom-0 p-8 md:p-10 text-white">
                  <span className="inline-block bg-blue-600 px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
                    Featured Article
                  </span>

                  <h3
                    className="text-3xl md:text-4xl font-bold leading-tight mb-4"
                    dangerouslySetInnerHTML={{
                      __html: featured.title.rendered,
                    }}
                  />

                  <div
                    className="text-white/90 line-clamp-3 text-lg"
                    dangerouslySetInnerHTML={{
                      __html: featured.excerpt.rendered,
                    }}
                  />

                  <p className="mt-6 font-semibold text-blue-200">
                    Read Full Story →
                  </p>
                </div>
              </article>
            </Link>
          )}

          {/* Side Cards */}
          <div className="space-y-8">
            {sidePosts.map((post) => (
              <Link
                key={post.id}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <article className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                  <div className="relative h-52 w-full overflow-hidden">
                    <Image
                      src={getImage(post)}
                      alt={post.title.rendered}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-700"
                    />
                  </div>

                  <div className="p-6">
                    <h4
                      className="text-xl font-bold text-blue-950 dark:text-white line-clamp-2"
                      dangerouslySetInnerHTML={{
                        __html: post.title.rendered,
                      }}
                    />

                    <div
                      className="mt-3 text-gray-600 dark:text-gray-300 line-clamp-3"
                      dangerouslySetInnerHTML={{
                        __html: post.excerpt.rendered,
                      }}
                    />

                    <p className="mt-4 text-blue-600 font-semibold">
                      Continue Reading →
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
