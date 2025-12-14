export function enableGridInteraction(renderer) {
  renderer.svg.addEventListener("click", e => {
    if (e.target.tagName !== "rect") return;


  });
}