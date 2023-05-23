import React, {useEffect, useState} from 'react'
import axios from "axios";
import {tasksAPI} from "../api/tasks-api";

export default {
    title: 'API'
}

const title = 'TEST TASK'
const model = {
    title:"dd",
    description: "sss",
    status: 12,
    priority:13,
    startDate: 'wwq',
    deadline: '21'
}
const todolistId = '47624a32-3c12-45bd-a0c0-4f54b782816d'
const taskId = '8933f5a6-8965-4760-9ced-dcd95b3fb28a'


const setting = {
    withCredentials: true
}

export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
      tasksAPI.getTasks(todolistId).then( (res)=>{
         setState(res.data)
       })

    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const CreateTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
      tasksAPI.postTasks(title, todolistId).then( (res)=>{
            setState(res.data)
        })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
       tasksAPI.deleteTask(todolistId, taskId).then( (res)=>{
            setState(res.data)
        })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
      tasksAPI.putTask(todolistId, taskId, model).then( (res)=>{
            setState(res.data)
        })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

