import { ShoppingCartSimple } from '@phosphor-icons/react'
import { useState } from 'react'
import { IconButton } from '../../primitives/Buttons/IconButton'
import { SelectAmount } from '../../primitives/Select'
import { CardContainer, CardInfo, CardOptions } from './card.style'

export const ProductCard = () => {
  const [quantity, setQuantity] = useState(1)

  const changeProductQuantity = (value: number) => setQuantity(value)

  return (
    <CardContainer>
      <img src="/example" alt="product preview" />
      <CardInfo>
        <div id="info">
          <strong>Expresso Tradicional</strong>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
        </div>
        <CardOptions>
          Price
          <div>
            <SelectAmount onChange={changeProductQuantity} value={quantity} />
            <IconButton variant="secondary">
              <ShoppingCartSimple weight="fill" />
            </IconButton>
          </div>
        </CardOptions>
      </CardInfo>
    </CardContainer>
  )
}
