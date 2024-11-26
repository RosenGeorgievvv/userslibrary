export const users = [
    {id: 1, name: "Rosen Georgiev"},
    {id: 2, name: "Georgi Hristov"},
];

export async function GET(){
    return Response.json(users);
}
export async function POST(){}