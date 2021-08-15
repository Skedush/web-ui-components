declare module '*.css';
declare module '*.png';
declare module '*.less' {
  const content: any;
  export default content;
}

declare interface Window {
  cancelRequest: any;
  less: any;
}
