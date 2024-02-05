export const getUsers = async() => {
    const res = await fetch(`https://e-commerce-app-server.vercel.app/users`);
    const data = await res.json();
    return data;
}