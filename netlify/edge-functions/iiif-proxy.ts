import type { Config } from "@netlify/edge-functions";

export default async (request: Request) => {
    const url = new URL(request.url);
    const path = url.pathname.replace(/^\/iiif/, "");

    const res = await fetch(`https://www.artic.edu/iiif${path}`, {
        headers: {
            "AIC-User-Agent": "art-school-project (rob@robrodriguez.dev)",
            "User-Agent":
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        },
    });

    const headers = new Headers(res.headers);
    headers.delete("content-encoding");
    headers.delete("content-length");
    headers.set("Cache-Control", "public, max-age=86400, s-maxage=604800");

    return new Response(res.body, {
        status: res.status,
        headers,
    });
};

export const config: Config = {
    path: "/iiif/*",
};
