import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LatestreleaseComponent } from './latestrelease/latestrelease.component';
import { MollywoodmoodComponent } from './mollywoodmood/mollywoodmood.component';
import { CelebratingloveComponent } from './celebratinglove/celebratinglove.component';
import { AhaoriginalsComponent } from './ahaoriginals/ahaoriginals.component';
import { TrendingnowComponent } from './trendingnow/trendingnow.component';
import { WatchforfreeComponent } from './watchforfree/watchforfree.component';
import { WatchinteluguandtamilComponent } from './watchinteluguandtamil/watchinteluguandtamil.component';
import { TamiltimelessclassicComponent } from './tamiltimelessclassic/tamiltimelessclassic.component';
import { InthespotlightComponent } from './inthespotlight/inthespotlight.component';
import { HandpickedforyouComponent } from './handpickedforyou/handpickedforyou.component';


@NgModule({
  declarations: [
    AppComponent,
    LatestreleaseComponent,
    MollywoodmoodComponent,
    CelebratingloveComponent,
    AhaoriginalsComponent,
    TrendingnowComponent,
    WatchforfreeComponent,
    WatchinteluguandtamilComponent,
    TamiltimelessclassicComponent,
    InthespotlightComponent,
    HandpickedforyouComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
