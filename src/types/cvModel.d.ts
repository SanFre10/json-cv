import { Locales } from "@/utils/locale/locale";

type Theme = 'cvThemeLight' | 'cvThemeDark';

export interface cvModel {
    _id?: ObjectId;
    number: number;
    path: string;
    passphrase: string;
    data: CV;
    locale: Locales;
    theme: Theme;
    isPrivate: boolean;
}