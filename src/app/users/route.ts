export const users = [
    {id: 1, name: "Rosen Georgiev"},
    {id: 2, name: "Georgi Hristov"},
];

export async function GET(){
    return Response.json(users);
}
export async function POST(request: Request){
    const user = await request.json();
    const newUser = {
        id: users.length + 1,
        name: user.name
    }
}