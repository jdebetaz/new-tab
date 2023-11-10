import "./app.scss";
import Bookmarks from "./components/bookmarks";

export function App() {
  return (
    <div className="relative h-screen bg-slate-50 dark:bg-slate-900">
      <header class="bg-white dark:bg-slate-800 shadow">
        <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex items-center justify-center">
          <h1 class="text-3xl font-bold text-gray-900 dark:text-white uppercase tracking-tight">
            RedNetwork Home
          </h1>
        </div>
      </header>
      <div className="overflow-y-auto h-screen pb-24">
        <Bookmarks />
      </div>
    </div>
  );
}
