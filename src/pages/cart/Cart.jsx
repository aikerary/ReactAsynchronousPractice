import { useEffect, useState } from "react"
import Fruta from "../../components/fruta/Fruta"
 
const Cart = () => {
 
    const [idFruits, setIdFruits] = useState([])
    const [fruits, setFruits] = useState([])
 
    const getAllIdFruits = async () => {
        const response = await fetch(import.meta.env.VITE_FRUIT_API + '/shop/v2/products')
        const data = await response.json()
 
        setIdFruits(data.products.map(product => product.id))
    }
 
    const getAllFruits = async () => {
        const fetchedFruits = await Promise.all(idFruits.map(async id => {
            const response = await fetch(import.meta.env.VITE_FRUIT_API + '/shop/v2/products/' + id)
            const data = await response.json()
 
            return data
        }))
 
        setFruits(fetchedFruits)
    }
 
    const fetchs = async() => {
        await Promise.all([getAllIdFruits(), getAllFruits()])
    }
 
    useEffect(() => {
        fetchs()
    }, [])
 
    useEffect(() => {
        // Update fruits state whenever idFruits changes
        getAllFruits()
    }, [idFruits])
 
    return (
        <section>
            {/* <Fruta fruta={} /> */}
            {fruits.map((fruit, index) => (
                <Fruta key={index} fruta={fruit} />
            ))}
        </section>
    )
}
 
export default Cart;
