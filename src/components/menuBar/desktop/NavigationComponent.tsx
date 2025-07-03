import { RouteList } from "../../../constants/routes/RouteList";
import { Link } from "react-router-dom";

import clsx from "clsx";

export default function NavigationComponent() {
  return (
    <div className="grid  mt-4 self-center bg-[#191f1f] dark:bg-zinc-900 rounded-lg">
      <div className={clsx("grid self-center p-2 ")}>
        {RouteList.map((route, index) => (
          <div key={index}>
            <Link to={route.url}>{route.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
