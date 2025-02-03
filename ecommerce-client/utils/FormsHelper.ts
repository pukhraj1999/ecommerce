export const updateFormValue = (payload: { id: string, value: string }, state: any) => {
    const { id, value } = payload;
    const updatedState = state.map((item: any) => {
        if (item.id === id) {
            return {
                ...item,
                value: value,
            }
        }
        return item;
    });
    return updatedState
}

export const getFormResult = (state: any) => {
    const updatedUserDetailArr = state.map((item: any) => {
        return {
            [item.id as string]: item.value
        }
    })
    const updatedUserDetails = updatedUserDetailArr.reduce((prev: any, curr: any) => ({ ...prev, ...curr }), {});
    return updatedUserDetails;
}