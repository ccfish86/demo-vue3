import ApiOperationPageDto from "./ApiOperationPageDto";

export default interface PagedListApiOperationPageDto {
  data: ApiOperationPageDto[];
  pageNum: number;
  pageSize: number;
  pages: number;
  total: number;
}
