import { Pipe, PipeTransform } from '@angular/core';
import { Voucher } from '../vouchers/vouchers.model';

@Pipe({
  name: 'VoucherFilter',
})
export class VoucherFilterPipe implements PipeTransform {
  transform(items: Voucher[], filter: string, field: string): Voucher[] {
    if (!items || !filter || !field) {
      return items;
    }
    return items.filter((item) =>
      item[field].trim().toLowerCase().includes(filter.trim().toLowerCase())
    );
  }
}
