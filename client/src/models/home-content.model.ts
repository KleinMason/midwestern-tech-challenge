import { IPage } from "./page.model";

export interface IHomeContent {
  id: number;
  page_id: number;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
  page: IPage
}