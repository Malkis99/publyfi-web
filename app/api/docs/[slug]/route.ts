import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  if (!slug || !/^[a-z0-9-]+$/.test(slug)) {
    return NextResponse.json({ error: 'Invalid slug' }, { status: 400 });
  }

  const filePath = path.join(process.cwd(), 'content', 'docs', `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: 'Documentation not found' }, { status: 404 });
  }

  try {
    const source = fs.readFileSync(filePath, 'utf-8');

    const mdxSource = await serialize(source, {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        // Add rehype plugins here if needed
      },
      parseFrontmatter: false, // We are not using frontmatter in our MDX files
    });

    return NextResponse.json({ source: mdxSource });
  } catch (error) {
    console.error(`Error processing MDX for slug: ${slug}`, error);
    return NextResponse.json({ error: 'Failed to process MDX content' }, { status: 500 });
  }
}