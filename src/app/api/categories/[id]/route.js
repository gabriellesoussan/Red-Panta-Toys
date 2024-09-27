
export async function GET(request, { params }) {
    let result = await fetch('https://us-west-2.aws.data.mongodb-api.com/app/data-hsvzqts/endpoint/products/category?id=' + params.id, {
        headers: {
            "Content-Type": "application/json",
            "api-key": "ZSaZGX6b6JYetEAyZu4ZUdZ94prbIk6Pox3KhMOaMe8elbzKLuCwv6xbGLzxCY4h",
            "Store-Id": "Conforama"
        },
        cache: 'no-store'
    })
    const category = await result.json();
    //console.log('category', category);
    if(category?.length > 0)
        return Response.json({"products" : category});
    else
        return Response.json({"products" : undefined})
}