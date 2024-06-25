import { CvService } from '@/services/cv.service';
import { cvSchema } from '@/schemas/cvSchema';
import { type CV } from '@/types/cv';
import { NextResponse } from 'next/server';

interface SaveCv {
    path: string;
    passphrase: string;
    data: CV;
}

export async function POST(req: Request){
    const data = await req.json() as SaveCv;
    let cv: CV;
    try {
        cv = cvSchema.parse(data.data) as CV;
    }
    catch (e) {
        return NextResponse.json({ message: "Invalid data" }, { status: 400 })
    }
    const cvService = new CvService();
    cvService.saveCv(data.path, data.passphrase, cv);

    return NextResponse.json({ message: "Success" })

}