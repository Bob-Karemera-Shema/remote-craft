export function decodeEscapedHtml(html: string) {
    return html
        .replace(/\\u003C/g, "<")
        .replace(/\\u003E/g, ">")
        .replace(/\\"/g, '"')
        .replace(/\\n/g, "")
        .replace(/\\u0026/g, "&")
        .replace(/\\u003D/g, "=");
}