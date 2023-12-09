import MiniSearch from "mini-search";
import documents from "../data/documents.json" with { type: "json" };

interface Document {
  name: string;
  description: string;
  keywords: string[];
  link: string;
}

const main = () => {
  const keywords = Deno.args;

  const miniSearch = new MiniSearch({
    fields: ["keywords"],
    storeFields: ["name", "description", "link"],
  });

  miniSearch.addAll(
    documents.map((document, index) => ({ id: index, ...document })),
  );

  const searchResults = miniSearch.search(keywords.join(","));

  console.log(searchResults);
};

main();
