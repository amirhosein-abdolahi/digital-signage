import { getVideos } from "@/lib/videos";

export async function GET(request) {
  try {
    const videos = await getVideos();

    return new Response(JSON.stringify(videos), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching videos:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
