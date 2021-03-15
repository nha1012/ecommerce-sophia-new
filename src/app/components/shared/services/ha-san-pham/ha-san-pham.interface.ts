import { ProductEntity } from '../product/product.interface';

export interface HinhAnhSanPhamEntity {
  hinhAnhSanPhamId?: string;
  url?: string;
  alt?: string;
  productId?: string;
  product?: ProductEntity;
}
