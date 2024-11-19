import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full space-y-6">
        <h1 className="text-3xl font-bold text-center">
          Welcome to Pollito&#39;s user_manager_frontend
        </h1>

        <p className="text-center">
          This is a demonstration on how to consume a RESTful API following{" "}
          <a
            href="https://en.wikipedia.org/wiki/Design_by_contract"
            className="text-primary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Design by Contract principles.
          </a>
        </p>

        <div className="border-l-4 border-yellow-500 p-4 rounded" role="alert">
          <p className="font-bold">Note:</p>
          <p>
            When going to /users, the first request may be slow. The backend API
            is hosted on a free{" "}
            <a
              href="https://render.com/"
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Render
            </a>{" "}
            instance that spins down with inactivity, resulting in cold starts
            of a few minutes.
          </p>
        </div>

        <div className="text-center">
          <Link
            href="/users"
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-2 px-4 rounded transition duration-300"
          >
            Go to /users
          </Link>
        </div>

        <p className="text-center">
          You can check the source code on{" "}
          <a
            href="https://github.com/franBec/user_manager_frontend"
            className="text-primary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>

        <footer className="text-center text-sm">
          Made with Next.js and ❤️
        </footer>
      </div>
    </main>
  );
}
