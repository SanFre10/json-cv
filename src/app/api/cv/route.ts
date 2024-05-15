import { SaveCv } from '@/types/saveCv';

import { CvService } from '@/services/cv.service';

export async function POST(req: Request, res: Response){
    const data = await req.json() as SaveCv;
    
    const cvService = new CvService();
    cvService.saveCv(data.path, data.passphrase, data.data);

    return Response.json({ message: 'success' });

}