import {SpinnerContainer, SpinnerOverlay} from "@/components/LoadingSpinner/LoadingSpinner.style";

const LoadingSpinner = () => {
    return(
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    )
}

export default LoadingSpinner;