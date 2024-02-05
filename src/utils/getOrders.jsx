export const getOrders = async() => {
    const res = await fetch(`https://e-commerce-app-server.vercel.app/orders`);
    const data = await res.json();
    return data;
}