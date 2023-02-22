import {Grid} from "@mui/material";
import BackButtonComponent from "@/components/AppHeader/components/BackButton.component";
import {AppHeaderStyle} from "@/components/AppHeader/styles/index.styles";
import {FC} from "react";
import HomeButtonComponent from "@/components/AppHeader/components/HomeButton.component";
import HeaderTitle from "@/components/AppHeader/components/HeaderTitle.component";

const AppHeaderModule: FC<{titleText: string }> = ({titleText }) => {

    return(
        <AppHeaderStyle>
            <Grid container>
                <BackButtonComponent />
                <HeaderTitle title={titleText} />
                <HomeButtonComponent />
            </Grid>
        </AppHeaderStyle>

    )
}

export default AppHeaderModule;