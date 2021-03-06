import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpErrorInterceptor } from './http-error.interceptor';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Interceptor } from './auth/token.interceptor';
import { AuthService } from './auth/auth.service';

import { AppComponent } from './app.component';
import { MusicComponent } from './music/music.component';
import { LoginComponent } from './login/login.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

/* Material Design */
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatRippleModule} from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import {MatSliderModule} from '@angular/material/slider';



import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { PlayerComponent } from './player/player.component';
import { CoverComponent } from './cover/cover.component';
import { LibraryComponent } from './library/library.component';
import { PlaylistsComponent } from './library/playlists/playlists.component';
import { TrackListComponent } from './track-list/track-list.component';
import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'music', component: MusicComponent, children: [
    {
      path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
      path: 'home', component: HomeComponent
    },
    {
      path: 'library', component: LibraryComponent
    },
    {
      path: 'track-list/:list', component: TrackListComponent
    },
    {
      path: 'album/:list', component: AlbumComponent
    },
    {
      path: 'artist/:list', component: ArtistComponent
    }
  ] },
  { path: 'music/:access', component: MusicComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MusicComponent,
    LoginComponent,
    ToolbarComponent,
    UserComponent,
    HomeComponent,
    PlayerComponent,
    CoverComponent,
    LibraryComponent,
    PlaylistsComponent,
    TrackListComponent,
    AlbumComponent,
    ArtistComponent
  ],
  imports: [
    Interceptor,
    RouterModule.forRoot(
      appRoutes, { enableTracing: false }
     ),
    BrowserModule,
    AgGridModule.withComponents([]),
    HttpClientModule,
    MatAutocompleteModule,
    FlexLayoutModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatDialogModule,
    MatMenuModule,
    MatTabsModule,
    MatDividerModule,
    MatListModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatRippleModule,
    MatTableModule,
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
      deps: []
    }
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
