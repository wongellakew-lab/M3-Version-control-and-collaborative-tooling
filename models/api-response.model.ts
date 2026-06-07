import { Temporal } from "@js-temporal/polyfill";
import { resolveModuleName } from "typescript";

export type ApiResponse<T> = 
    |{
        status:"Loading"
    }
    |{
      status:"Success"; 
      data: T; 
      fetchedAt: Temporal.Instant   
    }
    |{
        status:"Error";
        message: string;
        statusCode: number
    };

    export function renderResponse<T>(response: ApiResponse<T>, formatter: (data: T) => string,):string{
        switch (response.status){
            case "Loading":
                return "Loading...";
            case "Success":
                return formatter(response.data);
            case "Error":
                return `Error ${response.statusCode}: ${response.message}`;
            default:{
                const _check:never = response;
                throw new Error(`Unhandled response status: ${JSON.stringify(_check)}`);
                
            }
        }
    }