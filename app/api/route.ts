const content = require("@/lib/data");

export async function GET(request: Request) {
  return new Response("bsfasfasfsa");
}


export async function POST(request: Request) {
  const bla = content
  const body = request.json();
  console.log(body);

  return new Response(JSON.stringify(bla));


}