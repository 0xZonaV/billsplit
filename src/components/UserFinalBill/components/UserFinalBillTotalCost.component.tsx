import {Box} from "@mui/system";
import {UserFinalBillTotalCost} from "@/components/UserFinalBill/style/UserFinalBillMainForm.style";
import {FC} from "react";

const UserFinalBillTotalCostComponent:FC<{ billTotal: number }> = ({ billTotal }) => {
    return(
        <Box
            sx={{
                justifyContent: "space-between",
                display: "flex",
                maxHeight: "100px",
                height: "100px",
                width: "326px",
                marginTop: "10px",
                alignItems: "center"
            }}
        >
            <UserFinalBillTotalCost>
                Итого:
            </UserFinalBillTotalCost>
            <UserFinalBillTotalCost
                style={{
                    justifyContent: "right",
                    padding: "0 15px 0 0"
                }}
            >
                {billTotal}
            </UserFinalBillTotalCost>
        </Box>
    )
}

export default UserFinalBillTotalCostComponent;