
import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: 'products' })
export class Product {

  @PrimaryColumn({ name: 'product_id', type: 'bigint' })
  productId: string;

  @Column({ name: 'product_name', type: 'text' })
  productName: string;

  @Column({ name: 'base_price', type: 'decimal' })
  basePrice: string;

  @Column({ name: 'active', type: 'boolean' })
  active: boolean;
}
