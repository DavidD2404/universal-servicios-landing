import { NextResponse } from 'next/server';

const BEHOLD_FEED_URL = 'https://feeds.behold.so/95M3J2YDWQWRAFgslmQx';

export async function GET() {
  try {
    const response = await fetch(BEHOLD_FEED_URL, {
      next: {
        revalidate: 3600, 
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch Instagram posts');
    }

    const data = await response.json();

    return NextResponse.json({
      posts: data.posts.slice(0, 6),
      timestamp: new Date().toISOString(),
    });
  } catch (error) {

    return NextResponse.json(
      { error: 'Failed to fetch Instagram posts' },
      { status: 500 }
    );
  }
}
