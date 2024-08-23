import { CvService } from '@/services/cv.service';
import { cvSchema } from '@/schemas/cvSchema';
import { type CV } from '@/types/cv';
import { NextRequest, NextResponse } from 'next/server';
import { cvModel } from '@/types/cvModel';
import { NextApiRequest, NextApiResponse } from 'next';

export async function GET(req: NextApiRequest){
    const path = req.query['path'] as string;
    const cv = CvService.getCv(path);
    return NextResponse.json(cv)
}

export async function POST(req: NextApiRequest){
    const data = await req.body as cvModel;
    try {
        const cv = cvSchema.parse(data.data) as CV;
        CvService.saveCv(data.path, data.passphrase, cv);
        return NextResponse.json({ message: "Success" })
    }
    catch (e) {
        return NextResponse.json({ message: "Invalid data" }, { status: 400 })
    }

}