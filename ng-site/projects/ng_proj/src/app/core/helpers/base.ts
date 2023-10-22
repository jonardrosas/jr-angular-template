import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';

export interface StoreHelperInterface {
  data: any;
  getObjectSubscription: Subscription;
  selectObject: any;
}

export class StoreHelper implements StoreHelperInterface {
  public data!: any;
  public getObjectSubscription!: Subscription;
  public selectObject: any;

  constructor(private store: Store<any>) {}

  getObject(): void {
    this.getObjectSubscription = this.store.pipe(select(this.selectObject)).subscribe((data) => {
      this.data = data;
    });
  }

  storeUnsubscibe() {
    this.getObjectSubscription.unsubscribe();
  }
}
