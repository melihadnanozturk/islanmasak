export default function imageLoader({ src }) {
    if (process.env.NODE_ENV === 'production') {
        return `${src.startsWith('/') ? src.slice(1) : src}`;
    }
    return src;
} 