const dataBlog = {
    blog: []
}

export const blog = (state = dataBlog, action) => {
    switch (action.type) {
        case "BLOG":
            state = {
                ...state,
                blog: action.payload
            }
            break

        default:
    }
    return state
}