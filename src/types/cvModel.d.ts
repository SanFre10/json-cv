export interface cvModel {
    _id?: ObjectId;
    number: number;
    path: string;
    passphrase: string;
    data: CV;
    language: string;
    theme: string;
    isPrivate: boolean;
}