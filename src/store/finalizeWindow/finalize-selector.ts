import {createSelector} from "reselect";
import {FinalizeWindowType} from "./finalize-types";
import {RootState} from "../store";

const selectFinalizeWindowReducer = (state: RootState): FinalizeWindowType => state.finalizeWindow;

export const selectWindow = createSelector(
    [selectFinalizeWindowReducer],
    (window) => window
);
