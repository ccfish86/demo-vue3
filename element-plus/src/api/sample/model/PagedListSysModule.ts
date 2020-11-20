import SysModule from "./SysModule";

export default interface PagedListSysModule {
  data: SysModule[];
  pageNum: number;
  pageSize: number;
  pages: number;
  total: number;
}
