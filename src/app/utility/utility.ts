export class Utility {
    public static isRtl(): boolean {
        let lang = sessionStorage.getItem('languageFlag')
        return lang == 'fa';
    }
}