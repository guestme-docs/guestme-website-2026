"use client"

import Image from 'next/image'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Badge } from '@/components/ui/badge'

const blogs = [
  {
    id: 1,
    image: 'https://ui.shadcn.com/placeholder.svg',
    date: 'Mar 15, 2024',
    category: 'Tutorial',
    title: 'Getting Started with shadcn/ui: A Complete Guide',
    description:
      'Learn how to set up and maximize your development workflow with shadcn/ui\'s powerful component library.',
  },
  {
    id: 2,
    image: 'https://ui.shadcn.com/placeholder.svg',
    date: 'Mar 12, 2024',
    category: 'Development',
    title: 'Building Dark Mode with Next.js and Tailwind CSS',
    description:
      'Implement a seamless dark mode toggle in your Next.js application using Tailwind CSS and shadcn/ui.',
  },
  {
    id: 3,
    image: 'https://ui.shadcn.com/placeholder.svg',
    date: 'Mar 8, 2024',
    category: 'Advanced',
    title: 'Mastering React Server Components',
    description:
      'Deep dive into React Server Components and learn how they can improve your application\'s performance.',
  },
  {
    id: 4,
    image: 'https://ui.shadcn.com/placeholder.svg',
    date: 'Mar 5, 2024',
    category: 'Insights',
    title: 'The Future of Web Development in 2024',
    description:
      'Explore the latest trends and technologies shaping the future of web development this year.',
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="py-24 sm:py-32 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="outline" className="mb-4">Latest Insights</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            From our blog
          </h2>
          <p className="text-lg text-muted-foreground">
            Stay updated with the latest trends, best practices, and insights from our team of experts.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {blogs.map(blog => (
            <a href="#" key={blog.id} className="group block">
              <div className="flex flex-col gap-4 rounded-xl transition-all duration-200">
                <AspectRatio ratio={4 / 3} className="overflow-hidden rounded-xl">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
                    loading="lazy"
                  />
                </AspectRatio>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-left">
                    <span className="text-muted-foreground text-sm">{blog.date}</span>
                    <span className="text-muted-foreground text-sm">·</span>
                    <span className="text-muted-foreground text-sm">{blog.category}</span>
                  </div>

                  <h3 className="text-base leading-normal font-semibold group-hover:underline">
                    {blog.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-normal">
                    {blog.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
