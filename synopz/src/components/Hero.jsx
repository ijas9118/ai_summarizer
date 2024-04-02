import React from "react";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex w-full justify-between items-center mb-10 pt-3">
        <h3>SYNOPZ</h3>
        <button
          type="button"
          onClick={() => window.open("https://github.com/ijas9118")}
          className="black_btn"
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Synopz, an open source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
