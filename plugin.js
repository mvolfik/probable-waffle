import fs from "node:fs";

function sleep(x) {
  return new Promise((resolve) => {
    setTimeout(resolve, x);
  });
}

export default {
  name: "myPlugin",
  resolveId(id) {
    if (["@kitten1", "@kitten2"].includes(id)) return id;
  },
  async load(id, ssr) {
    if (!["@kitten1", "@kitten2"].includes(id)) return;

    if (ssr === (id === "@kitten1")) await sleep(100);
    const ref = this.emitFile({
      type: "asset",
      name: id.slice(1),
      source: fs.readFileSync("kitten.jpeg"),
    });
    return `export default "__VITE_ASSET__${ref}__";`;
  },
};
