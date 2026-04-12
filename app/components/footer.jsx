"use client";

export default function Footer() {

  return (
    <footer className="bg-neutral-100 text-neutral-900 px-4 sm:px-6 pb-2">
      <div>
        <div className="relative overflow-hidden rounded-[2rem] bg-black text-white px-6 sm:px-10 py-16 sm:py-20">
          <div className="absolute inset-x-0 -top-40 h-72 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.75),rgba(255,255,255,0.2),transparent_75%)] pointer-events-none" />
          <div className="relative max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight">
              Ready to code the next big idea?
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-300">
              Join Hack&apos;O&apos;Relay 5.0 by GDG on Campus DCE and bring your innovation to life.
            </p>
            <a
              href="https://forms.gle/ytyKBTuh1VU5kt5H8"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block bg-white text-black px-6 py-3 rounded-2xl text-sm font-semibold hover:bg-neutral-200 transition-colors"
            >
              Register Now
            </a>
          </div>
        </div>

        <div className="mt-6 rounded-[2rem] bg-white border border-neutral-200 shadow-[0_1px_0_rgba(0,0,0,0.03)] px-6 sm:px-10 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.8fr_0.8fr] gap-10">
            <div>
              <h3 className="text-2xl font-semibold text-black">Hack&apos;O&apos;Relay 5.0</h3>
              <p className="mt-4 text-sm leading-6 text-neutral-600 max-w-md">
                An innovation challenge by GDG on Campus DCE where builders collaborate, compete,
                and ship impactful ideas.
              </p>
              <div className="mt-6 flex items-center gap-4">
                {/* X / Twitter */}
                <a
                  href="https://x.com/gdgdce"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-800 hover:text-black transition-colors"
                  aria-label="X (Twitter)"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/gdg.dce?igsh=MXNmaHdrYjRlc3k1aQ%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-800 hover:text-black transition-colors"
                  aria-label="Instagram"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/gdgdce"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-800 hover:text-black transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                {/* GitHub */}
                <a
                  href="https://github.com/Sohan-Rout/GDGHackathon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-800 hover:text-black transition-colors"
                  aria-label="GitHub"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
                {/* Discord */}
                <a
                  href="https://discord.com/invite/KzGhr4whKn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-800 hover:text-black transition-colors"
                  aria-label="Discord"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9460 2.4189-2.1568 2.4189z" />
                  </svg>
                </a>
              </div>
            </div>


            <div>
              <h4 className="text-lg font-semibold text-black">Resources</h4>
              <div className="mt-4 flex flex-col gap-3 text-sm">
                <a
                  href="https://github.com/Sohan-Rout/GDGHackathon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-800 hover:bg-neutral-100 hover:border-neutral-300 transition-all w-fit"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                  <span className="font-medium">⭐ Star on GitHub</span>
                </a>
                <a
                  href="https://forms.gle/ytyKBTuh1VU5kt5H8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-800 hover:bg-neutral-100 hover:border-neutral-300 transition-all w-fit"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                  <span className="font-medium">Registration Form</span>
                </a>
                <a
                  href="https://discord.com/invite/KzGhr4whKn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-800 hover:bg-neutral-100 hover:border-neutral-300 transition-all w-fit"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" /></svg>
                  <span className="font-medium">Community Discord</span>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-black">Tagline</h4>
              <div className="mt-4 space-y-3 text-sm text-neutral-600">
                <p>Built by GDG DCE Team</p>
                <p className="inline-block px-3 py-1 rounded-full border border-neutral-300 text-neutral-700 bg-neutral-50">
                  Applications Open
                </p>
                <p>Code. Create. Conquer.</p>
              </div>
            </div>
          </div>

        <div className="pt-4 pb-6 px-6 sm:px-10 text-center">
          <p className="text-lg font-medium flex items-center justify-center gap-2 text-black">
            <span className="text-red-500 text-xl">❤️</span> Made with love by
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm">
            <a
              href="https://www.linkedin.com/in/sohan-rout/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 underline underline-offset-4 decoration-neutral-300 hover:text-black hover:decoration-black transition-colors"
            >
              Sohan Rout
            </a>
            <a
              href="https://www.linkedin.com/in/ayush-thakur-542bb4202/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 underline underline-offset-4 decoration-neutral-300 hover:text-black hover:decoration-black transition-colors"
            >
              Ankit Yadav
            </a>
            <a
              href="https://www.linkedin.com/in/akshitbhandaricodes/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 underline underline-offset-4 decoration-neutral-300 hover:text-black hover:decoration-black transition-colors"
            >
              Manas Thakur
            </a>
            <a
              href="https://www.linkedin.com/in/sohan-rout/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 underline underline-offset-4 decoration-neutral-300 hover:text-black hover:decoration-black transition-colors"
            >
              Amol Kumar
            </a>
            <a
              href="https://www.linkedin.com/in/sohan-rout/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 underline underline-offset-4 decoration-neutral-300 hover:text-black hover:decoration-black transition-colors"
            >
              Uttkarsh Bhardwaj
            </a>
          </div>
          <div className="mt-6 flex items-center justify-center gap-3 text-sm text-neutral-500">
            <span>Star the repo on</span>
            <a
              href="https://github.com/Sohan-Rout/GDGHackathon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white font-semibold text-sm hover:bg-neutral-800 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
              Github
            </a>
          </div>
        </div>

        </div>
      </div>
    </footer>
  );
}
