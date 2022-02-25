import { RouteItemType } from "@/lib/route/routes";
import * as Common from "@/models/Common/controller";

const CommonRoute: RouteItemType[] = [
  {
    path: "/health",
    method: "get",
    next: Common.health,
    auth: false,
  },
];

export default CommonRoute;
