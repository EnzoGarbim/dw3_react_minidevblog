import { useState, useEffect, UseReducer, useReducer } from "react";
import {db} from "../firebase/config"
import { collection, addDoc, Timestamps } from "firebase/firestore";

const insertReducer = (state, action) => {
    switch (action.type) {
        case "LOADING":
            return {loading: true, error: null}
        case "INSERT_DOC":
                return {loading: false, error: null}
        case "ERROR":
                return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const userInsertDocument = (docCollection) => {
    const [response, dispatch] = useReducer(insertReducer, initialState)
    const [cancelled, setCancelled] = useState(false)

    const checkCancelBeforeDispatch = (action) => {
        if (!cancelled) {
            dispatch(action)
        }
    }

    const inserDocument = async (document) => {
        checkCancelBeforeDispatch({ type: "LOADING "})

        try {
            const newDocument = { ...document, createdAt: Timestamps.now() }

            const inserDocument = await addDoc(
                collection(db, docCollection),
                newDocument
            )
            checkCancelBeforeDispatch({
                type: "INSERT_DOC",
                payload: inserDocument
            })
        } catch(error){
            checkCancelBeforeDispatch({
                type: "ERROR",
                payload: error.message
            })
        }
    }

    useEffect(() =>{
        return () => setCancelled(true)
    }, [])

    return{
        inserDocument,
        response
    }
}