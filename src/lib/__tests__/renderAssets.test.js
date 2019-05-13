import renderAssets from "../renderAssets";
describe("renderAssets", () => {
  it("returns meaningful html for given assets", () => {
    const { cssLinks, scripts } = renderAssets({
      "main.css": "/static/css/main.2cce8147.chunk.css",
      "main.js": "/static/js/main.fc0a5c8a.chunk.js",
      "main.js.map": "/static/js/main.fc0a5c8a.chunk.js.map",
      "runtime~main.js": "/static/js/runtime~main.a8a9905a.js",
      "runtime~main.js.map": "/static/js/runtime~main.a8a9905a.js.map",
      "vendors~main.js": "/static/js/vendors~main.edc27f40.chunk.js",
      "vendors~main.js.map": "/static/js/vendors~main.edc27f40.chunk.js.map",
      "index.html": "/index.html",
      "precache-manifest.351f8cc005335bc94e365df879f4889f.js":
        "/precache-manifest.351f8cc005335bc94e365df879f4889f.js",
      "service-worker.js": "/service-worker.js",
      "static/css/main.2cce8147.chunk.css.map":
        "/static/css/main.2cce8147.chunk.css.map",
      "static/media/logo.svg": "/static/media/logo.5d5d9eef.svg"
    });
    expect(cssLinks).toMatchInlineSnapshot(
      `"<link rel=\\"stylesheet\\" href=\\"/static/css/main.2cce8147.chunk.css\\" async />"`
    );
    expect(scripts).toMatchInlineSnapshot(
      `"<script src=\\"/static/js/runtime~main.a8a9905a.js\\" defer></script><script src=\\"/static/js/vendors~main.edc27f40.chunk.js\\" defer></script><script src=\\"/static/js/main.fc0a5c8a.chunk.js\\" defer></script>"`
    );
  });
  it("returns empty string for rubbish", () => {
    const { cssLinks, scripts } = renderAssets({});
    expect(cssLinks).toBe("");
    expect(scripts).toBe("");
  });
});
