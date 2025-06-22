
let key = c
export async function GET(request){
    const res = await fetch('https://api.petfinder.com/v2/animals',
        method:"GET",
        headers:{
            'Authorization':
        }
    );
    const data = await res.json()

    


    return new Response(JSON.stringify(data))
}