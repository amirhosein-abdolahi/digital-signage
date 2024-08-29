import { getNews } from "@/lib/news";

export async function GET(request) {
  try {
    const news = await getNews();

    return new Response(JSON.stringify(news), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching news:", error);
    return new Response("Internal server error", { status: 500 });
  }
}
