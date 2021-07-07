export default function NotFound () {
    return (
        <div className="not-found">
            <h1 className="head">Page Not Found</h1>
            <p>This page is not available which could be due to a number of reasons</p>
            <ul>
                <li>The page does not exist (re-check the URL).</li>
                <li>This page is currently under construction / maintenance.</li>
                <li>Something went wrong with our server, we'll be fixing it shortly.</li>
            </ul>
        </div>
    )
}