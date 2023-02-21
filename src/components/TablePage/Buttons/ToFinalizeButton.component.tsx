import {Button} from "@mui/material";
import OrderIcon from "../../../../public/OrderIcon.svg"
import {Box} from "@mui/system";
import {useRouter} from "next/router";

const ToFinalizeButton = () => {
    const Router = useRouter();

    const { nameOfRestaurant, numberOfTable } = Router.query;
    const ToFinalizeOnClick = async () => {
        await Router.push(`/${nameOfRestaurant}/table/${numberOfTable}/finalize`);
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
                justifyContent: 'space-between',
                padding: "0 48px 0 35px",

                background: "linear-gradient(90.57deg, #1F5F5B 5.49%, #1F5F5B 99.5%)",
                borderRadius: "15px",

                textTransform: "none",

                color: '#FFFFFF',
                width: '268px',
                height: '62px',
                marginTop: '5%',
            }}
                    startIcon={<OrderIcon />}
                    onClick={ToFinalizeOnClick}
            >
                Оплатить счет
            </Button>
        </Box>
    )
}

export default ToFinalizeButton;