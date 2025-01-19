import { inject, Injectable } from "@angular/core";
import { signalSlice } from 'ngxtension/signal-slice';
import { ApiService } from "./api.service";
import { catchError, map, of } from "rxjs";

interface State {
  data: any[],
  status: 'loading' | 'success' | 'error';
}

@Injectable({providedIn: 'root'})
export class ServicesStateService {

  private apiService = inject(ApiService);

  private initialState: State = {
    data: [] as any,
    status: 'loading' as const,
  };
  state = signalSlice({
    initialState: this.initialState,
    sources: [
      this.apiService.
      getServices().
      pipe(
        map((data) => ({data, status: 'success' as const})),
        catchError(() => of({ data: [], status: 'error' as const }))
      ),

    ],
  });
}
