export const setCookie = (name, value) => {
    let expires = new Date();
    expires.setDate(expires.getDate() + 10);

    document.cookie = `${name}=${JSON.stringify(value)}; path=/; expires=${expires}`;
}