import { consultarCep } from "correios-brasil";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const cep = searchParams.get("cep");

  const address = await consultarCep(`${cep}`);

  return Response.json({ address });
}
