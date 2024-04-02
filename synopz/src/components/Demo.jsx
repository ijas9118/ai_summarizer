import { useState, useEffect } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import LinkIcon from "@mui/icons-material/Link";
import DoneIcon from "@mui/icons-material/Done";

const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });
  const handleSubmit = async (e) => {
    alert("Submitted");
  };

  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative justify-center flex items-center"
          onSubmit={handleSubmit}
        >
          <LinkIcon className="absolute left-0 my-2 ml-3 w-5" />
          <input
            type="url"
            placeholder="Enter a URL"
            value={article.url}
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
            required
            className="url_input peer"
          />
          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
          >
            ↵
          </button>
        </form>
      </div>
    </section>
  );
};

export default Demo;
