export const addItemCart = ( GetDataList ) => ({
    type: 'add',
    payload: {
        id: GetDataList.id,
        picture: GetDataList.picture,
        description: GetDataList.description,
        saucer: GetDataList.saucer,
        amount: GetDataList.amount,
        price: GetDataList.price,
    }
})

export const deleteRowCart = ( GetRowToDelete ) => ({
    type: 'delete',
    payload: {
        GetRowToDelete
    }
})

export const cleanCartList = () => ({
    type: 'deleteall',
})