import {Category} from '../category/category';
import {Theme} from '../theme/theme';

export class Product {
  id: number;
  title: string;
  creator: string;
  releaseDate: Date;
  description: string;
  quantityTotal: number;
  quantityAvailableToRent: number;
  quantityIsRenting: number;
  price: number;
  pictureName: string;
  category: Category;

  category: Category;
  theme: Theme;

  // Remplissage constructor pas encore nécessaire
  constructor() {
  }
}
