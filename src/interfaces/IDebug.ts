import { Dispatch, Reducer } from "react";
import IRange from "./IRange";

export default interface IDebug {
  radiusX: number;
  radiusY: number;
  radiusPositionY: number;
  radiusPositionX: number;
  currentMap: string;
  currentRanges: IRange;
  dispatch?: Dispatch<Object>;
}