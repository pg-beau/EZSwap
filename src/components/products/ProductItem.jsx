/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-27 03:36:36
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-28 20:25:38
 * @FilePath: \workspace\ez-swap\src\components\products\ProductItem.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */

import Image from 'next/image';
import classes from './ProductItem.module.scss';
import Card from '../ui/Card';

function ProductItem({ value }) {
  return (
    <ul className={classes.products}>
      <Card>
        <li>
          <Image
            className={classes.productImg}
            src="/image/image 3.png"
            alt="productLogo"
            width={95}
            height={95}
          />

          <div className={classes.container}>
            <div className={classes.title}>{value.title}</div>

            <div className={classes.footer}>
              <div>
                <span>Listings:{'\u00A0'}</span>
                <Image
                  src="/svg/eth-icon.svg"
                  alt="eth-icon"
                  width={16}
                  height={16}
                  className={classes.ethIcon}
                />
                {value.listings}
              </div>
              <div>
                <span>Floor Price:{'\u00A0'}</span>
                <Image
                  src="/svg/eth-icon.svg"
                  alt="eth-icon"
                  width={16}
                  height={16}
                  className={classes.ethIcon}
                />
                {value['floor-price']}
              </div>
              <div>
                <span>Best offer:{'\u00A0'}</span>
                <Image
                  src="/svg/eth-icon.svg"
                  alt="eth-icon"
                  width={16}
                  height={16}
                  className={classes.ethIcon}
                />
                {value['best-offer']}
              </div>
              <div>
                <span>Volume:{'\u00A0'}</span>
                <Image
                  src="/svg/eth-icon.svg"
                  alt="eth-icon"
                  width={16}
                  height={16}
                  className={classes.ethIcon}
                />
                {value.volume}
              </div>
            </div>
          </div>
        </li>
      </Card>
    </ul>
  );
}

export default ProductItem;
