import { TokenStorageService } from '../shared/_services/token-storage.service';
import { ConfigJson } from '../shared/models/ConfigModel';
import { ActivatedRoute, Router } from '@angular/router';


import { ChangeDetectionStrategy, Component, EventEmitter, Inject, LOCALE_ID, NgZone, OnDestroy, OnInit, Output, ViewChild, Input } from '@angular/core';
import Swal from 'sweetalert2'
import { BehaviorSubject, Subject } from 'rxjs';
import { take } from 'rxjs/operators';

import { UserService } from 'src/app/shared/_services/user.service';
import { TimeService } from '../shared/_services/time.service';
import { CartItem, Promotion } from '../shared/models/ConfigModel';
import { QrScannerComponent } from 'angular2-qrscanner';
import { BarcodeScannerLivestreamComponent } from 'ngx-barcode-scanner';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})

export class BlogComponent implements OnInit {
  isReadMore = true

  private unsubscribe: Subject<any> = new Subject<any>();
product:any[];

  blogsData:any;

  loader=true;
   constructor(@Inject(LOCALE_ID) private locale: string,
    private zone: NgZone,
    private service: UserService,
    private timeService: TimeService,
    private act: ActivatedRoute,
    private ser:UserService,
    private t:TokenStorageService,
    private route:Router) {


  }


  ngOnInit() {
    this.getAllBlogs();





}

  showText() {
     this.isReadMore = !this.isReadMore
  }




  getAllBlogs(){
    this.loader=true;
    this.service.getAllBlogs().subscribe(
     (data) => {
       this.blogsData = data;

       this.loader=false;
       console.log(data);
     },
     (err) => { console.log(err) }

    )
   }

  getData(data:any){

    this.blogsData=data;

    this.loader=false;
  }







}
