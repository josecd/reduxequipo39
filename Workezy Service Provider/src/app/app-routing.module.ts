import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./pages/signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () =>
      import('./pages/forgot/forgot.module').then(m => m.ForgotPageModule)
  },
  {
    path: 'slide',
    loadChildren: () =>
      import('./pages/slide/slide.module').then(m => m.SlidePageModule)
  },
  {
    path: 'request-list',
    loadChildren: () =>
      import('./pages/request-list/request-list.module').then(
        m => m.RequestListPageModule
      )
  },
  {
    path: 'approved-booking',
    loadChildren: () =>
      import('./pages/approved-booking/approved-booking.module').then(
        m => m.ApprovedBookingPageModule
      )
  },
  {
    path: 'payment',
    loadChildren: () =>
      import('./pages/payment/payment.module').then(m => m.PaymentPageModule)
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'setting',
    loadChildren: () =>
      import('./pages/setting/setting.module').then(m => m.SettingPageModule)
  },
  {
    path: 'notification',
    loadChildren: () =>
      import('./pages/notification/notification.module').then(
        m => m.NotificationPageModule
      )
  },
  {
    path: 'set-time',
    loadChildren: () =>
      import('./pages/set-time/set-time.module').then(m => m.SetTimePageModule)
  },
  {
    path: 'select-service',
    loadChildren: () =>
      import('./pages/select-service/select-service.module').then(
        m => m.SelectServicePageModule
      )
  },
  {
    path: 'select-price',
    loadChildren: () =>
      import('./pages/select-price/select-price.module').then(
        m => m.SelectPricePageModule
      )
  },
  {
    path: 'change-password',
    loadChildren: () =>
      import('./pages/change-password/change-password.module').then(
        m => m.ChangePasswordPageModule
      )
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
