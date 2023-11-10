import { Folder } from "../../types";
import Link from "../link";

interface IProps {
  folder: string;
  bookmarks: Folder;
}

export default ({ folder, bookmarks }: IProps) => {
  return (
    <div className="flex gap-4 flex-col h-auto">
      <h2 className="truncate text-lg font-medium leading-7 text-slate-900 dark:text-white uppercase">
        {folder}
      </h2>
      <div className="flex gap-4 flex-col">
        {bookmarks.map((bookmark) => (
          <Link bookmark={bookmark} />
        ))}
      </div>
    </div>
  );
};
