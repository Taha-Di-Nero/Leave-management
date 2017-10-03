
import { UsedMaterialModule } from '../shared/used-material.module';
import {AccessDeniedComponent} from './access-denied.component';

describe('Component: AccessDenied', () => {
  it('should create an instance', () => {
    const component = new AccessDeniedComponent();
    expect(component).toBeTruthy();
  });

  it('should log ngOnInit', () => {
    const component = new AccessDeniedComponent();
    expect(component).toBeTruthy();

    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    component.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  });

});
