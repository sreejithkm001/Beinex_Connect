import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { BadgeComponent } from './widget/atom/badge/badge.component';
import { ButtonComponent } from './widget/atom/button/button.component';
import { InputComponent } from './widget/atom/input/input.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HeaderBottomComponent } from './widget/organism/header-bottom/header-bottom.component';
import { HeaderTopComponent } from './widget/organism/header-top/header-top.component';
import { FormSectionComponent } from './widget/organism/form-section/form-section.component';
import { CardComponent } from './widget/molecule/card/card.component';
import { OfferingsComponent } from './widget/organism/offerings/offerings.component';
import { FooterCardComponent } from './widget/molecule/footer-card/footer-card.component';
import { FooterrComponent } from './widget/organism/footerr/footerr.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BadgeComponent,
    ButtonComponent,
    InputComponent,
    ContactusComponent,
    HeaderBottomComponent,
    HeaderTopComponent,
    FormSectionComponent,
    CardComponent,
    OfferingsComponent,
    FooterCardComponent,
    FooterrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
