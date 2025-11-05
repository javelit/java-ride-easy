/// <reference types="vite/client" />

// Type declaration for importing .java files as raw text
declare module '*.java?raw' {
  const content: string;
  export default content;
}
