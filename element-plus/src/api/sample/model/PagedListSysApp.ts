import SysApp from "./SysApp";

export default interface PagedListSysApp {
  data: SysApp[];
  pageNum: number;
  pageSize: number;
  pages: number;
  total: number;
}
