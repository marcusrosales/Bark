const token = process.env.PETFINDER_TOKEN

export default async function GET(request){
    const res = await fetch('https://api.petfinder.com/v2/animals',{
        method:"GET",
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    const data = await res.json();

    return new Response(JSON.stringify(data))

}