import { collections, connectToDatabase } from "@/lib/mongodb";
import { CV } from "@/types/cv";
import { ObjectId } from "mongodb";

interface CvDto {
    _id: ObjectId;
    path: string;
    data: CV;
}

export class CvService {
    getCv = async (path: string) => {
        if(!collections.cv)
            await connectToDatabase();
        
        const data = (await collections.cv?.findOne({ path: path })) as CvDto;
        return data.data;
    };

    saveCv = async (path: string, passphrase: string, data: CV) => {
        if(!collections.cv)
            await connectToDatabase();
        
        const cv = await collections.cv?.updateOne(
            { path: path },
            { $set: { passphrase: passphrase, data: data } },
            { upsert: true }
        )
        return cv;
    }
        
}
