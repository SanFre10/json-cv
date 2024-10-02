import { CvService } from '@/services/cv.service';
import { cvSchema } from '@/schemas/cvSchema';
import { type CV } from '@/types/cv';
import { NextRequest, NextResponse } from 'next/server';
import { cvModel } from '@/types/cvModel';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const path = searchParams.get('path');
    if(!path) return NextResponse.json({ message: "Not found" }, { status: 404 });
    const passphrase = searchParams.get('passphrase');
    
    if (passphrase) {
        const cv = await CvService.getCvModelByPassphrase(path, passphrase);
        if (cv === null) return NextResponse.json({ message: "Not found" }, { status: 404 });
        return NextResponse.json({cv: cv.data, locale: cv.locale, theme: cv.theme}, { status: 200 });
    }
    
    const cv = await CvService.getCvModel(path);
    if (cv === null || cv.isPrivate) return NextResponse.json({ message: "Not found" }, { status: 404 });
    
    return NextResponse.json({cv: cv.data, locale: cv.locale, theme: cv.theme}, { status: 200 });
}

export async function POST(req: NextRequest){
    const data = await req.json() as cvModel;
    try {
        const cv = cvSchema.parse(data.data) as CV;
        CvService.saveCv(data.path, data.passphrase, cv, data.locale, data.theme, data.isPrivate);
        return NextResponse.json({ message: "Success" })
    }
    catch (e) {
        return NextResponse.json({ message: "Invalid data" }, { status: 400 })
    }
}