import IRange from './IRange';

export default interface IMapRangeContext {
    mapRanges: IRange;
    setFunc(mapRanges: IRange): any;
}