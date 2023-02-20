import {ItemCardDescription, ItemCardImageStyle} from "@/components/Menu/ItemCard/styles/ItemCardImage.style";
import {Grid} from "@mui/material";
import {FC} from "react";
import {MenuItem} from "@/store/menu/menu-types";

const ItemCardMiddle:FC<{ item: MenuItem }> = ({item}) => {


    return(
        <Grid container sx={{ marginTop: "5%" }} >
            <Grid item xs={6} >
                <ItemCardImageStyle src={item.imgUrl} alt={"Салат"} width={150} height={126}  />
            </Grid>
            <Grid item xs={6}>
                <ItemCardDescription>
                    {item.description}
                </ItemCardDescription>
            </Grid>
        </Grid>

    )
}

export default ItemCardMiddle;