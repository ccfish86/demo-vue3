import Tenant from "./Tenant";

export default interface PagedListTenant {
  data: Tenant[];
  pageNum: number;
  pageSize: number;
  pages: number;
  total: number;
}
