import SysAppVersion from "./SysAppVersion";

export default interface PagedListSysAppVersion {
  data: SysAppVersion[];
  pageNum: number;
  pageSize: number;
  pages: number;
  total: number;
}
