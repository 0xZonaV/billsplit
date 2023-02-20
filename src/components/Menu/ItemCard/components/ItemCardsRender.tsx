import {FC} from "react";
import {MenuItem} from "@/store/menu/menu-types";
import ItemCardModule from "@/components/Menu/ItemCard/ItemCard.module";
import {CartItemType} from "@/store/cart/cart-types";
import {CategoryRender} from "../../../../../@types";

type CardsRenderProps = {
    menu: MenuItem[],
    cart: CartItemType[],
    categoryRender: CategoryRender,
}

const ItemCardsRender: FC<CardsRenderProps> = ({menu, cart, categoryRender}) => {
    const AllMenuCards = menu.map((element) => {

        // @ts-ignore
        if (categoryRender[element.category]) {

            const CartItem = () => {
                if (cart) {
                    return cart.find((value) => value.id === element.id)
                }

                return undefined;
            }

            return (
                <ItemCardModule key={element.id} item={element} cartItem={CartItem()}/>
            )
        }

        return
    })

    return(
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: "column"
        }}
        >
            {AllMenuCards}
        </div>
    )
}

export default ItemCardsRender;