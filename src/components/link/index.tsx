import { Link } from "../../types";
import "./index.scss";

interface IProps {
  bookmark: Link;
}

export default ({ bookmark }: IProps) => {
  const icon = () => {
    if (bookmark.svg) {
      return `https://cdn.simpleicons.org/${bookmark.svg}`;
    }
    const url = new URL(bookmark.furl || bookmark.url);
    return (
      bookmark.icon ||
      `https://sexual-gray-swallow.faviconkit.com/${url.hostname}/32`
    );
  };
  return (
    <a
      href="#"
      className="flex px-2 bg-white dark:bg-slate-800 rounded-lg ring-1 ring-slate-900/5 shadow-xl"
    >
      <div className="icon flex justify-center items-center">
        <img src={icon()} alt={`${bookmark.name} icon`} />
      </div>
      <div className="name py-2 px-4 text-slate-500 dark:text-slate-400">
        {bookmark.name}
      </div>
    </a>
  );
};
