import { connectToDatabase } from "@/lib/mongodb";
import { CV } from "@/types/cv";
import { cvModel } from "@/types/cvModel";

export class CvService {
    static getCv = async (path: string): Promise<CV | null> => {
        try {
            const db = await connectToDatabase();
            const collection = db.collection<cvModel>('cv');
        
            const data = await collection.findOne({ path: path });
            return data?.data;
        }
        catch (e) {
            console.error(e);
        }
        return null;
    }

    static getCvModel = async (path: string): Promise<cvModel | null> => {
        try {
            const db = await connectToDatabase();
            const collection = db.collection<cvModel>('cv');
        
            const data = await collection.findOne({ path: path });
            return data;
        }
        catch (e) {
            console.error(e);
        }
        return null;
    }

    static getCvByPassphrase = async (path: string, passphrase: string): Promise<CV | null> => {
        try {
            const db = await connectToDatabase();
            const collection = db.collection<cvModel>('cv');
        
            const data = await collection.findOne({ path: path, passphrase: passphrase });
            return data?.data;
        }
        catch (e) {
            console.error(e);
        }
        return null;
    }

    static saveCv = async (path: string, passphrase: string, data: CV) => {        
        try {
            const db = await connectToDatabase();
            const collection = db.collection<cvModel>('cv');

            const cv = (collection.updateOne(
                { path: path },
                { $set: { passphrase: passphrase, data: data } },
                { upsert: true }
            ))
            return cv;
        }
        catch (e) {
            console.error(e);
        }
    }
}
