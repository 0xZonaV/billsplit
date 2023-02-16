import {FC} from "react";
import {MenuItem} from "@/store/menu/menu-types";
import ItemCardModule from "@/components/Menu/ItemCard/ItemCard.module";
import {CartItemType} from "@/store/cart/cart-types";

type CardsRenderProps = {
    menu: MenuItem[],
    cart: CartItemType[]
}

const ItemCardsRender: FC<CardsRenderProps> = ({menu, cart}) => {
    const AllMenuCards = menu.map((element) => {
        const CartItem = () => {
            if (cart) {
                return cart.find((value) => value.id === element.id)
            }

            return undefined;
        }
        return(
            <ItemCardModule key={element.id} item={element} cartItem={CartItem()} />
        )
    })

    return(
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}
        >
            {AllMenuCards}
        </div>
    )
}

export default ItemCardsRender;