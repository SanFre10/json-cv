import locales from './locale.json';

export type Locales = 'es' | 'en';

type Locale = {
    [key in Locales]: {
        [key: string]: string;
    };
};

export const getLocaleText = (key: string, locale: Locales = 'es') => {
    return (locales as Locale)[locale][key.toLowerCase()] || key;
}