declare global {
  interface Window {
    $memberstackDom: any
    REACT_RENDER: Function
    REACT_UNMOUNT: Function
  }
}
export {};