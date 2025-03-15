import { NextResponse } from 'next/server';
import { SignJWT } from 'jose';
import { z } from 'zod';

// Schema for API key validation
const ApiKeySchema = z.object({
  apiKey: z.string().min(32) // Require API key to be at least 32 characters
});

// Environment variable validation
const API_KEY = process.env.API_KEY;
const JWT_SECRET = process.env.JWT_SECRET;

if (!API_KEY || !JWT_SECRET) {
  throw new Error('API_KEY and JWT_SECRET must be defined in environment variables');
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate request body
    const { apiKey } = ApiKeySchema.parse(body);

    // Verify API key
    if (apiKey !== API_KEY) {
      return NextResponse.json(
        { error: 'Invalid API key' },
        { status: 401 }
      );
    }

    // Generate JWT token
    const token = await new SignJWT({})
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('24h')
      .sign(new TextEncoder().encode(JWT_SECRET));

    return NextResponse.json({ token });

  } catch (error) {
    console.error('Error generating token:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid request format', details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to generate token' },
      { status: 500 }
    );
  }
}