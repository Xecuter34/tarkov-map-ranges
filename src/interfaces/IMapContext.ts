export default interface IMapContext {
    currentMap: string;
    setFunc(mapName: string): any;
}