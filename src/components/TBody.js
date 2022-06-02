import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


const TBody = ({ store, query }) => {

    return (
        <div>
            {store.filter(post => {
                if (query === '') {
                    return post;
                } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
                    return post;
                }
            }).map((post =>
                <table className="infoTable align-items-center" key={post.id}>
                    <tbody>
                        <tr>
                            <td className="col-1 cell text-center" >{post.id}</td>
                            <td className="col-4 cell">{post.title}</td>
                            <td className="col-4 cell"> {post.body}</td>
                        </tr>
                    </tbody>
                </table>
            ))}
        </div>
    )
}

export default TBody