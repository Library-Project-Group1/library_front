import {User} from '../user/user';
import {Product} from '../product/product';


export class Transaction {
  id: number;
  user: User;
  product: Product;
}
