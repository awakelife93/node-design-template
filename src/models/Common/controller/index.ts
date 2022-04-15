import { IRequest, IResponse } from "@/lib";
import { HandlerParamsType } from "@/lib/function";
import { CommonAPIResponseType } from "@/lib/type";
import { _health } from "../service";

export const health = (
  request: IRequest,
  response: IResponse
): CommonAPIResponseType<HandlerParamsType> => {
  return _health();
};
