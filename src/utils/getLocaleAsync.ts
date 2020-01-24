export async function getLocaleAsync(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const locales: string[] = [
                'en', 'ru', 'kz'
            ];
            const index: number =
                Math.floor(Math.random() * 3)
            resolve(locales[index]);
        }, 10000);
    })
}
