import {Grid} from "@mui/material";
import {
    ItemCardBottomCurrency,
    ItemCardBottomGrammar,
    ItemCardBottomPrice,
    ItemCardBottomPRiceBox
} from "@/components/Menu/ItemCard/styles/ItemCardBottom.style";
import {FC} from "react";
import {MenuItem} from "@/store/menu/menu-types";

type ItemCardBottomProps = {
    item: MenuItem;

}

const ItemCardBottom:FC<ItemCardBottomProps> = ({item}) => {
    return(
        <Grid container spacing={2} sx={{ marginTop: "2%" }}>
            <ItemCardBottomGrammar item xs={6}>
                {item.grammar}
            </ItemCardBottomGrammar>
            <ItemCardBottomPRiceBox>
                <ItemCardBottomPrice>
                    {item.price}
                </ItemCardBottomPrice>
                <ItemCardBottomCurrency>
                    РУБ.
                </ItemCardBottomCurrency>
            </ItemCardBottomPRiceBox>
        </Grid>
    )
}

export default ItemCardBottom;