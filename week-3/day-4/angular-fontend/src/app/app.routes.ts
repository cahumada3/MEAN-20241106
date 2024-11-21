import { Routes } from '@angular/router';
import { SalesComponent } from './sales/sales.component';

/**
 * each item in our route array is a single path
 * the path property is whatever is after the baseURL in the browser
 * the component property points to the component to load
 */
export const routes: Routes = [
    {
        path: 'sales',
        component: SalesComponent
    }
];
