export default function (locale: string = 'en') {
    let result = locale;
    if (result.toLowerCase() === 'br') {
        result = 'pt';
    }
    return result;
}