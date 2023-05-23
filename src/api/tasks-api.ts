import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    // headers: {
    //     // Не забываем заменить API-KEY на собственный
    //     'API-KEY': '794181ab-6d62-4cfb-bc9f-d539dfac55f1',
    // },
})

type TasksType = {
    description: string
    title: string
    status: number
    priority: number
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string
}


export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}

type GetTasksResponse = {
    error: string | null
    totalCount: number
    items: TasksType[]
}

type UpdateTaskModel = {
    title:string
    description: string
    status: number
    priority: number
    startDate: string
    deadline: string
}


export const tasksAPI = {

    getTasks(todolistId:string) {
        return instance.get<GetTasksResponse>(`todo-lists/${todolistId}/tasks`)
    },

    postTasks(title: string, todolistId:string) {
        return instance.post<ResponseType<{item:TasksType}>>(`todo-lists/${todolistId}/tasks`, {title})
    },

    deleteTask(todolistId: string, taskId:string) {
        return instance.delete<ResponseType>(`todo-lists/${todolistId}/tasks/${taskId}`)
    },

    putTask(todolistId: string, taskId:string, model: UpdateTaskModel) {
        return instance.put<ResponseType <UpdateTaskModel>>(`todo-lists/${todolistId}/tasks/${taskId}`, {model})
    }
}