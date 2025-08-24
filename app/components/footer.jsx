"use client";
import { Heart, Github } from "lucide-react";

export default function Footer() {
  return (
    <main className="bg-black">
      <div className="flex flex-col items-center py-8">
        <div className="text-2xl py-2 text-neutral-300">@2025, Hack'O'Relay</div>
        <div className="text-blue-500 gap-1 items-center flex flex-row">
          <Heart color="red" size={20}/>
          <span className="text-neutral-300 text-sm">
            Made with love by
          </span>
        </div>
        <div className="flex flex-row gap-2 items-center text-xs text-neutral-300 underline underline-offset-2 py-2">
          <a href="https://www.linkedin.com/in/sohan-rout/">Sohan Rout</a>
          <a href="https://www.linkedin.com/in/ayush-thakur-542bb4202/">Ayush Thakur</a>
          <a href="https://www.linkedin.com/in/akshitbhandaricodes/">Akshit Bhandari</a>
          </div>
        <div className="text-white flex gap-2 items-center">
            <span className="text-sm">Star the repo on</span>
          <button
            onClick={() =>
              window.open("https://github.com/Sohan-Rout/GDGHackathon")
            }
            className="bg-white items-center gap-2 flex rounded-full shadow-xl hover:scale-105 duration-300 shadow-neutral-800 text-black px-4 py-1"
          >
            <Github size={20}/>Github
          </button>
        </div>
      </div>
      <div className="border-t flex flex-row justify-between border-dashed border-neutral-700 text-neutral-400 py-2 px-8 text-sm">
        <div>
            <span>Sitemaps</span>
        </div>
        <div>
            <span>Find the builders on : </span>
            <a className="underline underline-offset-2" href="">Linktree</a>
        </div>
      </div>
    </main>
  );
}
