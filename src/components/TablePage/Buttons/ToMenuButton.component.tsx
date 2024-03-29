import {Button} from "@mui/material";
import BookIcon from "../../../../public/icons/bookIcon.svg"
import {Box} from "@mui/system";
import {useRouter} from "next/router";

const ToMenuButton = () => {
    const Router = useRouter();

    const { nameOfRestaurant, numberOfTable } = Router.query;
    const ToMenuOnClick = async () => {
        await Router.push(`/${nameOfRestaurant}/table/${numberOfTable}/menu`);
    }

    return(
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <Button sx={{
                fontFamily: 'Doloman Pavljenko',
                fontStyle: 'normal',
                fontWeight: '300',
                fontSize: '24px',
                lineHeight: '23px',
                display: 'flex',
                alignItems: 'center',

                background: "linear-gradient(90.57deg, #3DAC5E 5.49%, #1A9C4A 99.5%)",
                borderRadius: "15px",

                textTransform: "none",

                color: '#FFFFFF',
                width: '268px',
                height: '62px',
                marginTop: '5%',
            }}
                    startIcon={<BookIcon />}
                    onClick={ToMenuOnClick}
            >
                Меню ресторана
            </Button>
        </Box>
    )
}

export default ToMenuButton;