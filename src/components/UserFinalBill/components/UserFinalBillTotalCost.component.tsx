import {Box} from "@mui/system";
import {UserFinalBillTotalCost} from "@/components/UserFinalBill/style/UserFinalBillMainForm.style";

const UserFinalBillTotalCostComponent = () => {
    return(
        <Box
            sx={{
                justifyContent: "space-between",
                display: "flex",
                maxHeight: "100px",
                height: "100px",
                width: "316px",
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
                    padding: "0 20px 0 0"
                }}
            >
                2500
            </UserFinalBillTotalCost>
        </Box>
    )
}

export default UserFinalBillTotalCostComponent;