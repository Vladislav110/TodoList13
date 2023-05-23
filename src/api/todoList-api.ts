import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    // headers: {
    //     // Не забываем заменить API-KEY на собственный
    //     'API-KEY': '794181ab-6d62-4cfb-bc9f-d539dfac55f1',
    // },
})

type ToDoListApiType = {
    addedDate: string
    id: string
    order: number
    title: string
}


export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}


export const todoListAPI = {

    getTodoList() {
        return instance.get<ToDoListApiType[]>('todo-lists').then((res) => res.data)
    },

    postTodoList(title: string) {
        return instance.post<ResponseType<{item:ToDoListApiType}>>('todo-lists', {title}).then((res) => res.data)
    },

    deleteTodoList(todolistId: string) {
        return instance.delete<ResponseType>(`todo-lists/${todolistId}`).then((res) => res.data)
    },

    putTodoList(todolistId: string, title: string) {
        return instance.put<ResponseType>(`todo-lists/${todolistId}`, {title}).then((res) => res.data)
    }
}