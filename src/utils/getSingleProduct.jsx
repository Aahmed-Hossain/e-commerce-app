export const getSingleProduct = async (id) => {
    const res = await fetch(`https://e-commerce-app-server.vercel.app/products/${id}`, {cache:'no-store'});
    const data = await res.json();
    return data;
}