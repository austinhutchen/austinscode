import { motion } from 'framer-motion'
import  {Nav}  from "../common/navbar";
import { Spinner } from '../common/symbols';
import { Footer } from '../common/footer';
const Head = () => {
    return (
        <motion.div
        >
            <Nav />
        </motion.div >
    )
}
// components



export const Landing = () => {

    // add Player and Spinner, get css animations working
    return (
        <section className="App">
            <Head />
            <motion.div initial={{ width: 0 }} animate={{ width: "100%" }}
                exit={{ x: window.innerWidth, transition: { duration: 0 } }}>
                <i
                    id="desc"
                    className="App"
                >
                    <b>
                        Full-Stack Software Engineer with passion for development and
                        experience working with startups!
                    </b>
                </i>
            </motion.div>
            <Spinner />
            <Footer/>
        </section>
    )
}

