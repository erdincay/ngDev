import { Component, OnInit } from '@angular/core';
import { VouchersService } from '../vouchers/voucher.service';
import { Voucher } from '../vouchers/vouchers.model';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-struct-directives',
  templateUrl: './struct-directives.component.html',
  styleUrls: ['./struct-directives.component.scss'],
})
export class StructDirectivesComponent implements OnInit {
  constructor(private vs: VouchersService) {}

  persons = of([
    { name: 'Heinz' },
    { name: 'Brunhilde' },
    { name: 'Susi' },
  ]).pipe(delay(300));
  selectedPerson: string = this.persons[0]?.name;

  // vouchers: Voucher[];
  vouchers = this.vs.getVouchers();

  showDivOne = true;

  currentDirection: DirectionEnum = DirectionEnum.East;
  direction = DirectionEnum;

  changeToSouth() {
    this.currentDirection = DirectionEnum.South;
  }

  ngOnInit() {
    // this.vs.getVouchers().subscribe(
    //   (data) => {
    //     this.vouchers = data;
    //   },
    //   (err) => console.log('err: ', err)
    // );
  }

  showVoucher(v: Voucher) {
    console.log(
      `navigating to voucher with text "${v.Text}" - covered later in more detail`
    );
  }
}

export enum DirectionEnum {
  East,
  West,
  North,
  South,
}
