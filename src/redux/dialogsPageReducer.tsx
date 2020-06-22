import {v1} from "uuid";

export type dialogsType = {
    id: string
    name: string
}
export type messagesType = {
    id: string
    message: string
}
export type dialogsPageType = {
    dialogs: Array<dialogsType>
    messages: Array<messagesType>
    newMessageDialogBody: string
}
export type actionDialogsPageType = {
    type: string
    body: string
}

const UPDATE_NEW_MESSAGE_DIALOG_BODY: string = "UPDATE_NEW_MESSAGE_DIALOG_BODY"
const SEND_DIALOG_MESSAGE: string = "SEND_DIALOG_MESSAGE"

let initialState = {
    dialogs: [
        {id: v1(), name: 'Dima'},
        {id: v1(), name: 'Sweta'},
        {id: v1(), name: 'Katya'},
        {id: v1(), name: 'Nadya'},
        {id: v1(), name: 'Dan'},
    ],
    messages: [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'How are you?'},
        {id: v1(), message: 'Fine'},
        {id: v1(), message: 'Ok'},
        {id: v1(), message: 'i love'},
    ],
    newMessageDialogBody: ""
}

const dialogsPageReducer = (state: dialogsPageType = initialState, action: actionDialogsPageType) => {

    // делаем поверхностную копию стейта СПРЕД ОПЕРАТОРОМ(...). Таким образов копируются только примитивы, без вложенных объектов!!!
    let stateCopy
    // stateCopy = {...state}
    // stateCopy.messages = [...state.messages]

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_DIALOG_BODY:
            stateCopy = {
                ...state,
                newMessageDialogBody: action.body
            }
            // stateCopy.newMessageDialogBody = action.body
            return stateCopy
        case SEND_DIALOG_MESSAGE:
            let newBody = {id: v1(), message: state.newMessageDialogBody}
            stateCopy = {
                ...state,
                messages: [...state.messages, newBody],
                newMessageDialogBody: ""
            }
            // stateCopy.newMessageDialogBody = ""
            // stateCopy.messages.push(newBody)
            return stateCopy
        default:
            return state
    }
}
// Функция ActionCreator dispatch
export const sendDialogMessageActionCreator = () => {
    return {
        type: SEND_DIALOG_MESSAGE
    }
}
// Функция ActionCreator dispatch
export const updateNewMessageDialogBodyActionCreator = (body: string | null) => {
    return {
        type: UPDATE_NEW_MESSAGE_DIALOG_BODY,
        body: body
    }
}

export default dialogsPageReducer
