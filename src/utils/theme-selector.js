export const ThemeSelector = (theme) => {
    const root = document.documentElement;
    root.style.setProperty("--base-r", theme.r);
    root.style.setProperty("--base-g", theme.g);
    root.style.setProperty("--base-b", theme.b);
    root.style.setProperty("--base-2", theme.base2);
    root.style.setProperty("--text", theme.text);
    root.style.setProperty("--load", theme.load);
}