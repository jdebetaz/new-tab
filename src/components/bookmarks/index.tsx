import { useEffect, useState } from "preact/hooks";
import Folder from "../folder";
import { Bookmarks } from "../../types";

export default () => {
  const [bookmarks, setBookmarks] = useState<Bookmarks>();

  useEffect(() => {
    const loadBookmarks = async () => {
      const bookmarks = await fetch("/bookmarks.json").then((res) =>
        res.json()
      );
      setBookmarks(bookmarks);
    };
    loadBookmarks();
  }, []);
  return (
    <div className="bookmarks grid grid-cols-2 md:grid-cols-4 gap-4 overflow-x-auto">
      {bookmarks &&
        Object.keys(bookmarks).map((folder) => {
          return <Folder folder={folder} bookmarks={bookmarks[folder]} />;
        })}
    </div>
  );
};
