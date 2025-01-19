import { inject, Injectable } from "@angular/core";
import { signalSlice } from 'ngxtension/signal-slice';
import { ApiService } from "./api.service";
import { catchError, map, Observable, of, Subject, switchAll, switchMap } from "rxjs";
import { ServiceDetailResponse } from "../interfaces/service.interface";

interface State {
  data: ServiceDetailResponse | null;
  status: 'loading' | 'success' | 'error';
}

@Injectable({ providedIn: 'root' })
export class ServiceDetailStateService {
  private apiService = inject(ApiService);

  private initialState: State = {
    data: null,
    status: 'loading',
  };


  state = signalSlice({
    initialState: this.initialState,
    actionSources: {
      getById: (_state, $: Observable<number>) =>
        $.pipe(
        switchMap((id: number) => this.apiService.GetServiceDetailById(id)),
        map(data => ({ data: data, status: 'success' as const })),
      ),
    }
  })
}
