import {Box} from "@mui/system";
import {UserFinalBillTotalCost} from "@/components/UserFinalBill/style/UserFinalBillMainForm.style";
import {FC} from "react";

const UseFinalBillTips: FC<{ tipsAmount: number }> = ({tipsAmount}) => {
    return(
        <Box
            sx={{
                justifyContent: "space-between",
                display: "flex",
                maxHeight: "25px",
                height: "25px",
                width: "316px",
                marginTop: "5px",
                alignItems: "center"
            }}
        >
            <UserFinalBillTotalCost>
                Чаевые:
            </UserFinalBillTotalCost>
            <UserFinalBillTotalCost
                style={{
                    justifyContent: "right",
                    padding: "0 20px 0 0"
                }}
            >
                {tipsAmount}
            </UserFinalBillTotalCost>
        </Box>
    )
}

export default UseFinalBillTips;