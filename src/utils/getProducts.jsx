export const getProducts = async () => {
    const res = await fetch(`https://e-commerce-app-server.vercel.app/products`, {next:{revalidate:10}})
    const data = await res.json();
    return data;
};

  