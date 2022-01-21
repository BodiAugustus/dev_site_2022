import { createContext,  useState } from "react";

export const HeroContext = createContext()

export default function HeroProvider ({children}){
    const [readMore, setReadMore] = useState(false)
    // const [ readMoreState, setReadMoreState] = useState({})
    const [showModal, setShowModal] = useState(false)
    const [showModal2, setShowModal2] = useState(false)
    const [showModal3, setShowModal3] = useState(false)
    const [showModal4, setShowModal4] = useState(false)
    const [showModal5, setShowModal5] = useState(false)
    const [showModal6, setShowModal6] = useState(false)

    // const readMore = (id) => setReadMoreState(state => ({
    //     ...state,
    //     [id]: !state[id], //toggles boolean value
    // }))


    const openModal = () => {
        setShowModal(true)
    }
    const openModal2 = () => {
        setShowModal2(true)
    }
    const openModal3 = () => {
        setShowModal3(true)
    }
    const openModal4 = () => {
        setShowModal4(true)
    }
    const openModal5 = () => {
        setShowModal5(true)
    }
    const openModal6 = () => {
        setShowModal6(true)
    }

    const closeModal = () => {
        setShowModal(false)
    }
    const closeModal2 = () => {
        setShowModal2(false)
    }
    const closeModal3 = () => {
        setShowModal3(false)
    }
    const closeModal4 = () => {
        setShowModal4(false)
    }
    const closeModal5 = () => {
        setShowModal5(false)
    }
    const closeModal6 = () => {
        setShowModal6(false)
    }
    return(
        <HeroContext.Provider value={{ showModal, setShowModal, openModal, closeModal, setShowModal2, setShowModal3, setShowModal4, setShowModal5, setShowModal6, showModal2, setShowModal3, setShowModal4, setShowModal5, setShowModal6, openModal2, openModal3, openModal4, openModal5, openModal6, showModal2, showModal3, showModal4, showModal5, showModal6, closeModal2, closeModal3, closeModal4, closeModal5, closeModal6, readMore, setReadMore}}>{children}</HeroContext.Provider>
    )
}

