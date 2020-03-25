import {Category} from '../category/category';

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

  // Remplissage constructor pas encore nécessaire
  constructor() {
  }
}
