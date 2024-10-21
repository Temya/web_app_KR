import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: "",
		loadComponent: () => import("./main-page/main-page.component").then((i) => i.MainPageComponent),
	},
	{
		path: "numbers",
		loadComponent: () => import("./numbers/numbers.component").then((i) => i.NumbersComponent),
	},
    {
		path: "reservation",
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
	{
		path: "table",
		loadComponent: () => import("./table-of-information/table-of-information.component").then((i) => i.TableOfInformationComponent),
	}
];
