import DefaultLayout from "layouts";
import Link from "next/link";
import { Custom404Styles } from 'styles';

const Custom404 = () => {

    return (
        <div className="notfound-container">
            <h1>404 Error</h1>
            <p>The page you're looking for could not be found</p>
            <Link href="/">Try going back to the homepage</Link>
            <style jsx>{ Custom404Styles }</style>
        </div>
    )
}

export default Custom404;