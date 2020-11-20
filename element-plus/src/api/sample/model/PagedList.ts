import SysApp from "./SysApp";

export default interface PagedList<T> {
  data: T[];
  pageNum: number;
  pageSize: number;
  pages: number;
  total: number;
}
