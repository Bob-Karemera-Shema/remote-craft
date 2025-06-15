export function slugify(text: string): string {
    return text
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-');
}

export function deslugify(slug: string, names: string[]): string | undefined {
    return names.find(name => slugify(name) === slug);
}