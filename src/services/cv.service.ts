import { client, connectToDatabase, collections } from "@/lib/mongodb";
import { CV } from "@/types/cv";
import { cvModel } from "@/types/cvModel";

export class CvService {
    static getCv = async (path: string) => {
        try {
            await connectToDatabase();
            const data = (await collections.cv?.findOne({ path: path })) as cvModel;
            return data.data;
        }
        catch (e) {
            console.error(e);
        }
        finally{
            client.close();
        }
    };

    static saveCv = async (path: string, passphrase: string, data: CV) => {        
        try {
            await connectToDatabase();
            const cv = (await collections.cv?.updateOne(
                { path: path },
                { $set: { passphrase: passphrase, data: data } },
                { upsert: true }
            ))
            return cv;
        }
        catch (e) {
            console.error(e);
        }
        finally{
            client.close();
        }
    }
        
}
