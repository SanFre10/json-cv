import { Locales } from "@/utils/locale/locale";

export interface cvModel {
    _id?: ObjectId;
    number: number;
    path: string;
    passphrase: string;
    data: CV;
    locale: Locales;
    theme: string;
    isPrivate: boolean;
}