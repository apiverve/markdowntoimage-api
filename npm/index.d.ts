declare module '@apiverve/markdowntoimage' {
  export interface markdowntoimageOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface markdowntoimageResponse {
    status: string;
    error: string | null;
    data: MarkdowntoImageData;
    code?: number;
  }


  interface MarkdowntoImageData {
      imageName:      string;
      format:         string;
      downloadURL:    string;
      expires:        Date;
      markdownLength: number;
      htmlLength:     number;
      dimensions:     Dimensions;
  }
  
  interface Dimensions {
      width:  number;
      height: number;
  }

  export default class markdowntoimageWrapper {
    constructor(options: markdowntoimageOptions);

    execute(callback: (error: any, data: markdowntoimageResponse | null) => void): Promise<markdowntoimageResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: markdowntoimageResponse | null) => void): Promise<markdowntoimageResponse>;
    execute(query?: Record<string, any>): Promise<markdowntoimageResponse>;
  }
}
