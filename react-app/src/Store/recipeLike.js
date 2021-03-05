import { updateRecipeLikes } from "./recipes";

export const recipeLike = (like) => async (dispatch) => {
    const res = await fetch(`/api/recipeLikes/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(like),
    });
    if (res.ok) {
        dispatch(updateRecipeLikes(like));
        return res;
    }
};
