export declare type UploadFileStatus = 'error' | 'success' | 'done' | 'uploading' | 'removed';
/**
 * 布局配置，指定路由的布局
 */
export interface LayoutConfig {
  /**
   * 规则名称
   */
  name: string;
  /**
   * 包含的路由，正则过滤
   */
  include: RegExp[];
  /**
   * 排除的路由，正则过滤
   */
  exlude: RegExp[];
}

/**
 * 路由列表
 */
export interface RouteList {
  id: number;
  parentId: number;
  level: number;
  name: string;
  icon: string;
  route: string;
  children: RouteList[];
}

export interface UploadFile<T = any> {
  uid: string;
  size: number;
  name: string;
  fileName?: string;
  lastModified?: number;
  lastModifiedDate?: Date;
  url?: string;
  status?: UploadFileStatus;
  percent?: number;
  thumbUrl?: string;
  originFileObj?: File | Blob;
  response?: T;
  error?: any;
  linkProps?: any;
  type: string;
  xhr?: T;
  preview?: string;
}
