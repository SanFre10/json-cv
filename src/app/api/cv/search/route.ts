import { CvService } from '@/services/cv.service';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const path = searchParams.get('path');
    if(!path) return NextResponse.json({ message: "Not found" }, { status: 404 });
    
    const cvs = await CvService.searchCvModel(path);
    return NextResponse.json({cvs}, { status: 200 });
}