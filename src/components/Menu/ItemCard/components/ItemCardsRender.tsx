import {FC} from "react";
import {MenuItem} from "@/store/menu/menu-types";
import ItemCardModule from "@/components/Menu/ItemCard/ItemCard.module";

const ItemCardsRender: FC<{ menu: MenuItem[] }> = ({menu}) => {
    const AllMenuCards = menu.map((element) => {
        return(
            <ItemCardModule item={element} />
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