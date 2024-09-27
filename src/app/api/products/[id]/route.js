
export async function GET(request, { params }) {
    let result = await fetch('https://us-west-2.aws.data.mongodb-api.com/app/data-hsvzqts/endpoint/products?url=' + params.id, {
        headers: {
            "Content-Type": "application/json",
            "api-key": "ZSaZGX6b6JYetEAyZu4ZUdZ94prbIk6Pox3KhMOaMe8elbzKLuCwv6xbGLzxCY4h",
            "Store-Id": "Conforama"
        },
        cache: 'no-store'
    })
    const product = await result.json();
    //console.log('product', product[0]);
    if(product?.length > 0)
        return Response.json({"product" : product[0]});
    else
        return Response.json({"product" : undefined})
}