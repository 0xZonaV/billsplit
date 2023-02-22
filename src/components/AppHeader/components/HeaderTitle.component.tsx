import {FC} from "react";
import {AppHeaderTitleStyle} from "@/components/AppHeader/styles/index.styles";

const HeaderTitle: FC<{title: string}> = ({title}) => {


    return(
        <AppHeaderTitleStyle item xs={8}>
            {title}
        </AppHeaderTitleStyle>
    )
}

export default HeaderTitle;