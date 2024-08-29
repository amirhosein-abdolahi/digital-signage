import { getSubtitles } from "@/lib/subtitles";

export async function GET(request) {
  try {
    const subtitles = await getSubtitles();

    return new Response(JSON.stringify(subtitles), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching subtitles:", error);
    return new Response("Internal server error", { status: 500 });
  }
}
