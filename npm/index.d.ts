declare module '@apiverve/markdowntoimage' {
  export interface markdowntoimageOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface markdowntoimageResponse {
    status: string;
    error: string | null;
    data: MarkdowntoImageData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface MarkdowntoImageData {
      imageName:      null | string;
      format:         null | string;
      downloadURL:    null | string;
      expires:        number | null;
      markdownLength: number | null;
      htmlLength:     number | null;
      dimensions:     Dimensions;
  }
  
  interface Dimensions {
      width:  number | null;
      height: number | null;
  }

  export default class markdowntoimageWrapper {
    constructor(options: markdowntoimageOptions);

    execute(callback: (error: any, data: markdowntoimageResponse | null) => void): Promise<markdowntoimageResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: markdowntoimageResponse | null) => void): Promise<markdowntoimageResponse>;
    execute(query?: Record<string, any>): Promise<markdowntoimageResponse>;
  }
}
