export default function useDarkmode() {
    const mode =
        JSON.parse(localStorage.getItem('dark') ?? '') ?? window.matchMedia(`(prefers-color-scheme: dark)`).matches;
    document.body.classList.toggle('dark', mode);

    const storeMode = () => {
        const mode = document.body.classList.toggle('dark');
        localStorage.setItem('dark', JSON.stringify(mode));
    };

    return { mode, storeMode };
}
