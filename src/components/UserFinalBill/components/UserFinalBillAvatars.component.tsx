import TableNumberGuestsAvatar from "@/components/TablePage/Body/components/TableNumberGuestsAvatar.component";

const UserFinalBillAvatars = () => {
    return(
        <div
            style={{
                width: "314px",
                maxWidth: "314px",
                display: "flex",
                justifyContent: "left",
                marginTop: "30px",
                overflowBlock: "visible"
            }}
        >
            <div
                style={{
                    overflow: "scroll",
                    display: "flex",
                    flexDirection: "row"
                }}
            >
                <TableNumberGuestsAvatar displayName={"ZonaV"} />
            </div>
        </div>
    )
}

export default UserFinalBillAvatars;