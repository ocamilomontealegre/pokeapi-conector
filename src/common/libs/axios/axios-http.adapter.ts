import { HttpException, Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { catchError, map, Observable } from "rxjs";
import type { AxiosError, AxiosRequestConfig } from "axios";
import type { GenericObject } from "@common/types";

@Injectable()
export class AxiosHttpAdapter {
  public constructor(private readonly _httpService: HttpService) {}

  public get<T>(url: string, options?: AxiosRequestConfig): Observable<T> {
    return this._httpService.get<T>(url, options).pipe(
      map((response) => response.data),
      catchError(this.handleError),
    );
  }

  public post<T>(url: string, data?: GenericObject, options?: AxiosRequestConfig): Observable<T> {
    return this._httpService.post<T>(url, data, options).pipe(
      map((response) => response.data),
      catchError(this.handleError),
    );
  }

  public put<T>(url: string, data?: GenericObject, options?: AxiosRequestConfig): Observable<T> {
    return this._httpService.put<T>(url, data, options).pipe(
      map((response) => response.data),
      catchError(this.handleError),
    );
  }

  public delete<T>(url: string, options?: AxiosRequestConfig): Observable<T> {
    return this._httpService.delete<T>(url, options).pipe(
      map((response) => response.data),
      catchError(this.handleError),
    );
  }

  private handleError(error: AxiosError): Observable<never> {
    const message =
      (error.response?.data as { message?: string }).message || "Something went wrong!";
    const status = error.response?.status || 500;
    return new Observable((observer) => {
      observer.error(new HttpException(message, status));
    });
  }
}
