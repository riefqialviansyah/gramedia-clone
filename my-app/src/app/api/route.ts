export async function GET(request: Request) {
  console.log(process.env.MONGO);
  return Response.json({
    data: [],
  });
}
