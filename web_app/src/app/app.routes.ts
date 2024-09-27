import { Routes } from '@angular/router';

export const routes: Routes = [
    {
		path: "",
		loadComponent: () => import("./start-form/start-form.component").then((i) => i.StartFormComponent),
	},
    {
		path: "clients",
		loadComponent: () => import("./clients-info/clients-info.component").then((i) => i.ClientsInfoComponent),
	},
    {
		path: "payment",
		loadComponent: () => import("./payment/payment.component").then((i) => i.PaymentComponent),
	},
];
