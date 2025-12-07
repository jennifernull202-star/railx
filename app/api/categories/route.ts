import { NextResponse } from 'next/server';
import { CATEGORIES } from '@/lib/categories';

export async function GET() {
  try {
    return NextResponse.json({ categories: CATEGORIES });
  } catch (error) {
    console.error('Categories API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch categories' },
      { status: 500 }
    );
  }
}
