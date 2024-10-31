import { getNew } from "@/lib/news";

export async function GET(request, { params }) {
  try {
    const _new = await getNew(params?.slug);

    return new Response(JSON.stringify(_new), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching new:", error);
    return new Response("Internal server error", { status: 500 });
  }
}
