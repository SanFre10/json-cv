import { connectToDatabase } from "@/lib/mongodb";
import { CV } from "@/types/cv";
import { cvModel, Theme } from "@/types/cvModel";
import { Locales } from "@/utils/locale/locale";

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

    static getCvModelByPassphrase = async (path: string, passphrase: string): Promise<cvModel | null> => {
        try {
            const db = await connectToDatabase();
            const collection = db.collection<cvModel>('cv');
        
            const data = await collection.findOne({ path: path, passphrase: passphrase });
            return data;
        }
        catch (e) {
            console.error(e);
        }
        return null;
    }

    static searchCvModel = async (path: string): Promise<cvModel[] | null> => {
        try {
            const db = await connectToDatabase();
            const collection = db.collection<cvModel>('cv');
        
            const data = await collection.find({
                path: { $regex: `^${path}`, $options: "i" }, // Case-insensitive search
                isPrivate: false
            }).limit(10).toArray();
            return data.map((cv) => {
                return {
                    data: cv.data,
                    path: cv.path
                } as cvModel
            });

        }
        catch (e) {
            console.error(e);
        }
        return null;
    }

    static saveCv = async (path: string, passphrase: string, data: CV, locale: Locales, theme: Theme, isPrivate: boolean) => {        
        try {
            const db = await connectToDatabase();
            const collection = db.collection<cvModel>('cv');

            const cv = (collection.updateOne(
                { path: path },
                { $set: { passphrase: passphrase, data: data, locale:locale, theme:theme, isPrivate:isPrivate } },
                { upsert: true }
            ))
            return cv;
        }
        catch (e) {
            console.error(e);
        }
    }
}
